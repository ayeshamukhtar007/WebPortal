import React from "react";
import "./notificationMsg.css";
import {Delete,Camera,Notifications } from "@material-ui/icons";
import "../../App.css";
import { Link } from "react-router-dom";
export default function NotificationMsg({Title,Msg}) {
  return (
    < div className="notificationTopbar">
      <div className="notificationTopbarWrapper">
        <div className="topLeft">
          <Notifications className="notificationIcon"/>
          
          <div className="notificationTitle">
           <span className="topLeftTitle"> {Title}</span>
           <span className="notificationTopLeftSubTitle">{Msg}</span>
           </div>
        </div>
        <div className="topRight">
       
            <Delete className="actionIcon"/>
        </div>
      </div>
      </div>
  );
}
