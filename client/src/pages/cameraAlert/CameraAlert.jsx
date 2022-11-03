import { useState,useEffect } from "react";

import "./cameraAlert.css";
import SecondTopBar from '../../components/secondtopbar/SecondTopBar';
import {
  Camera,
} from "@material-ui/icons";
import {useDispatch, useSelector } from "react-redux";
import { Viewcameras,addcamera,ChangeCameraStatus, DeleteCamera } from "../../redux/apiCalls";

export default function CameraAlert() {
  const dispatch = useDispatch();
  const cameras = (useSelector((state) => state.camera.cameras));
  const user = (useSelector((state) => state.user.currentUser));
  const handleClick=(cameraid)=>{

  }
  useEffect(()=>{
    Viewcameras(dispatch, user);
     },[]);
     const renderList=cameras.map((camera)=>{
      const {_id,name}=camera;

    return(
     
      <ul className="alertsidebarList" key={_id}>
       <li className="alertsidebarListItem " onClick={handleClick(_id)}>
              <Camera className="alertsidebarIcon" />
              {name} 
            </li>
      </ul>
    )
    });
  return (
    
    <div className="view">
           <SecondTopBar title="alerts"/>
           
      <div className="alertWrapper">
      
      <div className="alertsidebar">
      <div className="alertsidebarWrapper">
        <div className="alertsidebarMenu">
         
          <ul className="alertsidebarList">
        
            {/* <li className="alertsidebarListItem ">
              <MdOutlineAddModerator className="alertsidebarIcon" />
              Modes 
            </li> */}
       {renderList}
         
            
           </ul>
        </div>
        
      </div>
    </div>

       <div className="alertCards">
          <div className="alertCardWraper">

          </div>
       </div>

        </div>  
    </div>
  )
}
