
import "./setting.css";
import SecondTopBar from '../../components/secondtopbar/SecondTopBar';
import {AddAlarm} from "@material-ui/icons";
import {MdOutlineAddModerator,MdOutlineAlarmAd} from "react-icons/md";
import {AiFillAlipaySquare, AiOutlineCloudServer} from "react-icons/ai";
import ModeSettings from "../../components/modeSetting/ModeSetting";
import { Link } from "react-router-dom";
import { useState } from "react";
import StorageMethod from "../../components/storageMethod/StorageMethod";
import SetThread from "../../components/setThread/SetThread";
export default function Setting() {

 const[modeSettings,setModeSettings]=useState(true);
 const[storageMethod,setStorageMethod]=useState(false);
 const[setThread,setSetThread]=useState(false);

  return (
    
    <div className="view">
           <SecondTopBar title="Settings"/>
           
      <div className="settingWrapper">
      
      <div className="settingsidebar">
      <div className="settingsidebarWrapper">
        <div className="settingsidebarMenu">
         
          <ul className="settingsidebarList">
        
            <li className="settingsidebarListItem " onClick={function(){setModeSettings(true);setStorageMethod(false);setSetThread(false)}}>
              <MdOutlineAddModerator className="settingsidebarIcon" />
              Modes 
            </li>
        
            <li className="settingsidebarListItem " onClick={function(){setModeSettings(false);setStorageMethod(true);setSetThread(false)}}>
              <AiOutlineCloudServer className="settingsidebarIcon"  />
              Storage Method 
            </li>
         
            <li className="settingsidebarListItem" onClick={function(){setModeSettings(false);setStorageMethod(false);setSetThread(true)}}>
              < AddAlarm className="settingsidebarIcon"  />
              Set Threat
            </li>
         
            
           </ul>
        </div>
        
      </div>
    </div>

       <div className="SettingCards">
      {modeSettings? <ModeSettings/>:null}
      {storageMethod? <StorageMethod/>:null}
      {setThread? <SetThread/>:null}

       </div>

        </div>  
    </div>
  )
}
