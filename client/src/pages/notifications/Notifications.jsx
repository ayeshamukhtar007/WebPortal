
import "./notifications.css";
import SecondTopBar from '../../components/secondtopbar/SecondTopBar';
import RecordingBar from '../../components/recordingBar/RecordingBar';
import { SearchOutlined } from "@material-ui/icons";
import NotificationMsg from "../../components/notificationMsg/NotificationMsg";

import Video from '../../components/video/Video';

export default function Notifications() {
  return (
    <div className="view">
        <SecondTopBar title="Notifications"/>
        <div class="search-container">
          
            <input type="text" placeholder="Search.." name="search" className="input"/>
            <button type="submit"><SearchOutlined/></button>
        
        </div>
        <div className="notification">
        <NotificationMsg Title="Your payment is due" Msg="You subscribe the services and their payment is due which is $80You subscribe the services and their payment is due which is $80."/>
        <NotificationMsg Title="Your payment is due" Msg="You subscribe the services and their payment is due which is $80You subscribe the services and their payment is due which is $80."/>
        <NotificationMsg Title="Your payment is due" Msg="You subscribe the services and their payment is due which is $80You subscribe the services and their payment is due which is $80."/>

        </div>
        
        
    </div>
  )
}
