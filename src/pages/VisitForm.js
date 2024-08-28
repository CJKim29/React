import React from 'react';
import { useMediaQuery } from 'react-responsive';

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
    return (
        <div>
            <div style={screen_style}>
                <form className="form-inline">
                    <h2 style={{ color: '#999', fontSize: '20px' }}>♣ 방명록 작성하기 ♣</h2>
                    <br />
                    <input className="form-control" id="name" placeholder="작성자명을 입력하세요" />
                    <br />
                    <textarea className="form-control" style={{ width: '100%', resize: 'none' }} id="content" rows={5} cols={50} placeholder="내용을 입력하세요"></textarea>
                    <br />
                    <input className="form-control" type="password" id="pwd" placeholder="비밀번호 입력하세요" />
                    <br />
                    <input className="btn btn-success mybtn" type="button" value="글올리기" />
                </form>
            </div>

        </div>
    );
}

export default VisitForm;