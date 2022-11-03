import "./alert.css";
import { useState,useEffect } from "react";

import SecondTopBar from '../../components/secondtopbar/SecondTopBar';
import { SearchOutlined } from "@material-ui/icons";
import AlertMsg from "../../components/alertMsg/AlertMsg";
import {useDispatch, useSelector } from "react-redux";
import {GetAlert} from "../../redux/apiCalls";
import { DeleteAlert } from "../../redux/apiCalls";
import { ClearSharp,ReportProblemRounded,AirplayOutlined,Delete } from "@material-ui/icons";
import { Link} from "react-router-dom";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { SetSelection} from "../../redux/alertRedux";
export default function Notifications() {
  const user = (useSelector((state) => state.user.currentUser));
  const dispatch = useDispatch();
  // const navigate = useNavigate(); 
  // const navigateTotrack = () => {
  //   //  navigate to /contacts
  //   navigate('/trackstream');
  // };
  // var ws = new W3CWebSocket("ws://localhost:5005/ObjectDetectionSer/"+user._id+'/'+'null')
  //    ws.onmessage = (message) => {
  //     window.location.reload(true);


      
  // };
  const alerts = (useSelector((state) => state.alert.CameraAlerts));
  useEffect(()=>{
   GetAlert(dispatch,user._id);
   },[]);
      const renderList=alerts.map((alert)=>{
        const {_id,title,description,createdAt,camera}=alert;
   
      return(
        < div className="alertTopbar" key={_id}>
        <div className="alertTopbarWrapper">
          <div className="alertTopLeft">
            <ReportProblemRounded className="alertIcon"/>
            <div className="alertTitle">
             <span className="topLeftTitle"> Alert</span>
             <span className="topLeftSubTitle">{description}</span>
             </div>
          </div>
          <div className="AlertTopRight">
            <div>
          <Link to="/trackstream" className="link">
              <AirplayOutlined className="actionIcon" onClick={dispatch(SetSelection(camera))}/>
          </Link>
          <Delete className="actionIcon" onClick={()=>{
            const aid=_id;
            DeleteAlert({aid});
            window.location.reload(true);
          }}/>
              {/* <ClearSharp className="actionIcon"/> */}
              
              </div>
              <span className="date">{createdAt}</span>
          </div>
        </div>
        </div>
    
      )
      });
  return (
    <div className="view">
        <SecondTopBar title="Alert"/>
        <div class="search-container">
          
            <input type="text" placeholder="Search.." name="search" className="input"/>
            <button type="submit"><SearchOutlined/></button>
        
        </div>
        <div className="alert">
          {renderList}
        {/* <AlertMsg Title="Alert" Msg="Men with gun enter in premises from gate 1" Date={Date().toString().substr(0,24)}/>
        <AlertMsg Title="Alert" Msg="Black bag is left abundand in reception area" Date={Date().toString().substr(0,24)}/>
        <AlertMsg Title="Alert" Msg="Men with gun enter in premises from gate 1" Date={Date().toString().substr(0,24)}/> */}

        </div>
        
        
    </div>
  )
}
