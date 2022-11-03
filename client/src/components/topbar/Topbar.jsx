import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings,Security } from "@material-ui/icons";
import {companyName} from "../../dummyData";
import "../../App.css";
import { Link } from "react-router-dom";


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="homelogo" >{companyName}</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
          <Link to="/Notifications" className="link">
            <NotificationsNone />
            </Link>
            <span className="topIconBadge">5</span>
          </div>
          
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
