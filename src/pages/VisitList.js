import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useMediaQuery } from "react-responsive";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import InfiniteScroll from "react-infinite-scroller";

function VisitList() {

    axios.defaults.withCredentials = true;

    const isPc = useMediaQuery({
        query: "(min-width:1024px)"
    });

    const isTablet = useMediaQuery({
        query: "(min-width:768px) and (max-width:1023px)"
    });

    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });



    let screen_style = { margin: 'auto', minWidth: '600px', width: '600px' };
    if (isPc) {
        screen_style = { margin: 'auto', minWidth: '600px', width: '600px' };
    } else if (isTablet) {
        screen_style = { margin: 'auto', minWidth: '500px', width: '90%' };
    } else if (isMobile) {
        screen_style = { margin: 'auto', minWidth: '400px', width: '90%' };
    }

    // 내부상태관리하는변수 : Re-Rendering이 안 된다
    const total_count = useRef(0);    // 전체데이터 갯수
    const count = useRef(3);    // 현재화면에 보여진 데이터 갯수
    const isLast = useRef(false);// 데이터를 모두 보여줬냐

    // 내부상태관리하는변수 : Re-Rendering이 된다
    const [list, setList] = useState([]); // [] <- 초기값 빈 배열

    const handleLoadMore = () => {
        //console.log("---handleLoadMore()---");
        count.current = count.current + 3;

        if (count.current >= total_count.current) { // 
            isLast.current = true;// setLast(true); // true로 바꿔주자.
        } else {
            isLast.current = false;//setLast(false);
        }
        getData();

    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        //Data 읽어오는 코드
        //console.log("--useEffect()--");
        getData();
    }, []);

    function getData() {
        //const url = "http://localhost:8080/rest/visits/" + count.current;
        const url = "http://54.180.143.241:8080/demo_visit/rest/visits/" + count.current;
        // GET 요청(select)
        axios.get(url)
            .then(function (response) {
                console.log(response.data);

                //useState()정보가 갱신 -> Re-Rendering
                setList(response.data.list);

                //전체데이터 갯수
                total_count.current = response.data.total_count;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function deleteVisit(idx) {

        const c_pwd = prompt("삭제 비밀번호:");

        //취소
        if (c_pwd == null) return;

        //입력되지 않은 경우
        if (c_pwd === "") {
            alert("삭제할 비밀번호를 입력하세요");
            return;
        }

        // GET 요청(select) : 비밀번호 확인요청
        //const url = `http://localhost:8080/rest/check-pwd/${idx}/${c_pwd}`;
        const url = `http://54.180.143.241:8080/demo_visit/rest/check-pwd/${idx}/${c_pwd}`;
        axios.get(url)
            .then(function (response) {
                console.log(response);
                if (response.data.result === false) {
                    alert("비밀번호가 틀렸습니다");
                    return;
                }

                //삭제확인
                if (window.confirm("정말 삭제하시겠습니까?") === false) return;

                //삭제처리
                deleteVisitData(idx);
            })
            .catch(function (error) {
                console.log(error);
            });
    }//end:deleteVisit

    function deleteVisitData(idx) {

        // DELETE 요청(delete)
        //const url = "http://localhost:8080/rest/visit/" + idx;
        const url = "http://54.180.143.241:8080/demo_visit/rest/visit/" + idx;
        axios.delete(url)
            .then(function (response) {
                console.log(response);
                if (response.data.result === false) {
                    alert("삭제 실패");
                    return;
                }

                // 새로운 데이터 요청
                getData();
            })
            .catch(function (error) {
                console.log(error);
            });
    }//end:deleteVisitData

    return (
        <InfiniteScroll
            className="h-[85%] smartPhone:h-[70%]  scrollbar-hide"
            pageStart={0}
            loadMore={getData}
        >
            <main>
                {/* <div className="flex flex-col items-center justify-center h-full"> */}

                <div className="flex flex-col h-full" style={screen_style}>
                    {list &&
                        list.map((v, index) => (
                            <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '20px', boxShadow: '1px 1px 3px black' }}>

                                {/* 첫번째줄 */}
                                <div className="flex flex-row">
                                    <span style={{ display: 'inline-block', width: '80%', textAlign: 'left', color: 'black', fontWeight: 'bold' }} >
                                        ♥ {v.name}({v.pwd})
                                    </span>
                                    <span style={{ display: 'inline-block', width: '20%', textAlign: 'right' }}>
                                        <IconButton aria-label="delete" id={v.idx} onClick={() => deleteVisit(v.idx)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </span>
                                </div>
                                {/* 두번째줄 */}
                                <p style={{ textAlign: 'left', color: 'gray', whiteSpace: 'pre-wrap' }}>{v.content.replaceAll('<br>', '\n')}</p>
                                {/* 세번째줄 */}
                                <p style={{ textAlign: 'left', color: '#ccc' }}>{v.regdate}</p>
                            </div>
                        ))}

                    {/* 더보기버튼 */}
                    {!isLast.current && (
                        <button
                            onClick={handleLoadMore}
                            className="btn btn-success mybtn"
                        >
                            더보기...
                        </button>
                    )}

                    {isLast.current && (
                        <button
                            onClick={scrollToTop}
                            className="btn btn-success mybtn"
                        >
                            맨위로...
                        </button>
                    )}
                </div>
            </main>
        </InfiniteScroll>
    );
};

export default VisitList;