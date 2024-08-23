import React from "react";
function Data({ member }) {
    return (
        <tr>
            <td>{member.num}</td>
            <td>{member.name}</td>
            <td>{member.email}</td>
        </tr>
    );
}
function Ex5() {
    //서버에서 다음과 같이 받은 자원이 있다고 가정하자!
    const list = [
        { num: "1", email: "hi@korea.com", name: "혜인" },
        { num: "2", email: "hl@korea.com", name: "해린" },
        { num: "3", email: "dl@korea.com", name: "다니엘" },
        { num: "4", email: "hn@korea.com", name: "하니" },
        { num: "5", email: "mj@korea.com", name: "민지" }
    ];
    return (
        <table align="center" border={1}>

            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>

            <tbody>
                {/* list 로부터 하나씩 가져와서 data 에 담아 Data 라는 함수 컴포넌트를 호출할 때
                    인자인 member 라는 변수에 data 에 담긴 자원을 전달한다. */}
                {/* list라는 변수를 표현하기 위해 {}안에 씀 */}
                {list.map(data => <Data member={data} />)}
            </tbody>

        </table>
    )
}
export default Ex5;