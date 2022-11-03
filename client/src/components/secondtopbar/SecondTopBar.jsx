import React from "react";
import "./seconstopbar.css";
export default function Topbar({title}) {
  return (
    <div className="secondtopbar">
      <div className="secondtopbarWrapper">
         <div className="secondtopbartitle">
            {title}
         </div>
      </div>
      </div>
  );
}
