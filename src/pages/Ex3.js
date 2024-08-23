import React, { useState } from "react";
function Ex3() {
  const [vo, setVo] = useState({
    name: "",
    email: "",
    tel: "",
  });
  
  const {name, email, tel} = vo;
  // name  = vo.name
  // email = vo.email
  // tel   = vo.tel

  function setNameValue(e) {
    // const setValue = (e) => {
    let value = e.target.value;
    //let id = e.target.id;

    // vo.name = value; 이렇게 할 경우 렌더링이 안 됨
    // useState에 선언된 Setter를 이용해서 값을 변경해야 Re-Rendering이 됨
    setVo({
      ...vo, // 스프레이드 속성이라 한다. vo 를 하나 복사해 놓는 개념
      name: value,
    });
  }
  function setEmailValue(e) {
    // const setValue = (e) => {
    let value = e.target.value;
    //let id = e.target.id;
    setVo({
      ...vo, // 스프레이드 속성이라 한다. vo 를 하나 복사해 놓는 개념
      email: value,
    });
  }
  function setTelValue(e) {
    // const setValue = (e) => {
    let value = e.target.value;
    //let id = e.target.id;
    setVo({
      ...vo, // 스프레이드 속성이라 한다. vo 를 하나 복사해 놓는 개념
      tel: value,
    });
  }
  return (
    <div>
      <p>이벤트 분리</p>
      <div>
        <label>이름</label>
        <input type="text" id="name" value={name} onChange={setNameValue} />
      </div>
      <div>
        <label>이메일</label>
        <input type="email" id="email" value={email} onChange={setEmailValue} />
      </div>
      <div>
        <label>전화번호</label>
        <input type="tel" id="tel" value={tel} onChange={setTelValue} />
      </div>
      <p> 이름: {name}</p>
      <p> 이메일: {email}</p>
      <p> 전화번호: {tel}</p>
    </div>
  );
}
export default Ex3;
