import React from "react";
import "./recordingBar.css";
import {AdjustOutlined,AirplayOutlined,Delete } from "@material-ui/icons";

import "../../App.css";
import { Link } from "react-router-dom";
export default function RecordingBar({Camera}) {
  return (
    < div className="recordingbar">
      <div className="recordingBarWrapper">
        <div className="recordingTopLeft">
          <AdjustOutlined className="recordingIcon"/>
          <div className="recordingTitle">
           <span className="topLeftTitle"> {Camera}</span>
           <span className="recordingTopLeftSubTitle">Sunday October 24,2021 . 24 hours camera stream recording save on cloud</span>
           </div>
        </div>
        <div className="recordingTopRight">
        <Link to="/videoPlaying" className="link">
            <AirplayOutlined className="actionIcon"/>
        </Link>
            <Delete className="actionIcon"/>
        </div>
      </div>
      </div>
  );
}
