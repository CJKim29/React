import React, { useState } from "react";

const Ex1 = () => {
  const [txt, setTxt] = useState("");

  function setValue(e) {
    // const setValue = (e) => {
    //입력값을 가져와서 setTxt통해서 txt변수에 넣겠다
    //Re-Rendering
    setTxt(e.target.value);
    //txt = e.target.value; 이렇게 할 경우 갱신이 안 됨
    console.log(txt);
  }

  return (
    <div>
      <p>Ex1화면</p>
      <input type="text" value={txt} onChange={setValue} />
      <br />
      <p>{txt}</p>
    </div>
  );
};

export default Ex1;
