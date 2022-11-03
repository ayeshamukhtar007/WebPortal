import "./sidebar.css";
import {
 
  Home,
  PlayArrow,
  TrendingUp,
  Security,
  Notifications,
  ReportProblemRounded,
  Person,
  Settings,
 AdjustOutlined
 ,ViewHeadlineOutlined,
GroupWork
} from "@material-ui/icons";
import {IoPeople} from "react-icons/io5";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
         
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem ">
            
              <Home className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/liveview" className="link">
            <li className="sidebarListItem ">
              <PlayArrow className="sidebarIcon" />
              Live View
            </li>
            </Link>
            <Link to="/recording" className="link">
            <li className="sidebarListItem">
              <AdjustOutlined className="sidebarIcon" />
              Recordings
            </li>
            </Link>
            
           
            <Link to="/notifications" className="link">
            <li className="sidebarListItem">
              <Notifications className="sidebarIcon" />
              Notifications
            </li>
            </Link>
            <Link to="/alert" className="link">
            <li className="sidebarListItem">
              <ReportProblemRounded className="sidebarIcon" />
              Alert
            </li>
            </Link>
            <Link to="/modes" className="link">
            <li className="sidebarListItem">
              <Security className="sidebarIcon" />
              Modes
            </li>
            </Link>
            <Link to="/profile" className="link">
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              Profile
            </li>
            </Link>
            <Link to="/services" className="link">
            <li className="sidebarListItem">
              <ViewHeadlineOutlined className="sidebarIcon" />
              Services
            </li>
            </Link>
            <Link to="/employee" className="link">
            <li className="sidebarListItem">
              <IoPeople className="sidebarIcon" />
              Employee
            </li>
            </Link>
            <Link to="/setting" className="link">
            <li className="sidebarListItem">
              <Settings className="sidebarIcon" />
              Settings
            </li>
            </Link>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

