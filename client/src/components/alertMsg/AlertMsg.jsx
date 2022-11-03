import React from "react";
import "./alertMsg.css";
import { ClearSharp,ReportProblemRounded,AirplayOutlined,Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function AlertMsg({Title,Msg,Date}) {
  return (
    < div className="alertTopbar">
      <div className="alertTopbarWrapper">
        <div className="alertTopLeft">
          <ReportProblemRounded className="alertIcon"/>
          <div className="alertTitle">
           <span className="topLeftTitle"> {Title}</span>
           <span className="topLeftSubTitle">{Msg}</span>
           </div>
        </div>
        <div className="AlertTopRight">
          <div>
        <Link to="/detection" className="link">
            <AirplayOutlined className="actionIcon"/>
        </Link>
        <Delete className="actionIcon"/>
            <ClearSharp className="actionIcon"/>
            
            </div>
            <span className="date">{Date}</span>
        </div>
      </div>
      </div>
  );
}
