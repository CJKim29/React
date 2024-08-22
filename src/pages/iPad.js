import React from "react";
import ipadImage from "../images/iPad.png";

// 익명함수
const IPad = () => {
  return (
    <div>
      <p>ipadImage</p>
      <img src="images/apple_logo.png" alt=""></img>
      <br></br>
      <img src={ipadImage} alt=""></img>
    </div>
  );
};

export default IPad;
