import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function VisitForm() {

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

    const [visit, setVisit] = useState({ name: "", content: "", pwd: "" });

    //화면전환객체
    const navigator = useNavigate();

    function updateVisit(e) {
        let id = e.target.id;
        let value = e.target.value;
        setVisit({ ...visit, [id]: value });
    }
    function addVisit() {

        //입력값 체크
        if (visit.name === '') {
            alert("이름을 입력하세요");
            return;
        }

        if (visit.content === '') {
            alert("내용을 입력하세요");
            return;
        }

        if (visit.pwd === '') {
            alert("비밀번호를 입력하세요");
            return;
        }

        // POST 요청(insert) : parameter는 JSON형식
        const url = "http://localhost:8080/rest/visit";
        axios.post(url, visit)
            .then(function (response) {
                console.log(response.data);
                if (response.data.result === false) {
                    alert("등록 실패");
                    return;
                }

                //화면초기화(필요는 없다)
                //setVisit({ name: "", content: "", pwd: "" })

                //목록보기 화면으로 이동
                navigator("/");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <div style={screen_style}>
                <form className="form-inline">
                    <h2 style={{ color: '#999', fontSize: '20px' }}>♣ 방명록 작성하기 ♣</h2>
                    <br />
                    <input className="form-control" id="name" value={visit.name} placeholder="작성자명을 입력하세요" onChange={updateVisit} />
                    <br />
                    <textarea className="form-control" style={{ width: '100%', resize: 'none' }} id="content" value={visit.content}
                        rows={5} cols={50} placeholder="내용을 입력하세요" onChange={updateVisit}></textarea>
                    <br />
                    <input className="form-control" type="password" id="pwd" value={visit.pwd} placeholder="비밀번호 입력하세요" onChange={updateVisit} />
                    <br />
                    <input className="btn btn-success mybtn" type="button" value="글올리기" onClick={addVisit} />
                </form>
            </div>

        </div>
    );
}

export default VisitForm;