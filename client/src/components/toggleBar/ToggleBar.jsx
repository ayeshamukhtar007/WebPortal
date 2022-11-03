import React from "react";
import "./toggleBar.css";
import {Security} from "@material-ui/icons";
import Toggle from 'react-styled-toggle';
import {updateCamera} from "../../redux/apiCalls";

export default function ToggleBar({Data,State}) {
 
const handle=(mode)=>{
  var {_id,name,ip_address,UserID}=Data;
  
  updateCamera({_id,name,mode,ip_address,UserID});
  // window.location.reload(true);
}
  return (
    < div className="modeTopbar">
      {console.log(Data.Camera.name)}
      <div className="modeTopbarWrapper">
        <div className="modeTopLeft">
          <Security className="modeIcon"/>
          <div className="modeTitle">
           
           <span className="topLeftTitle">{Data.Camera.name}</span>
           </div>
        </div>
        <div className="modeTopRight">
      <Toggle width={65}  height={26} sliderHeight={20} sliderWidth={20}
      translate={38} labelRight="Active Mode"  labelLeft="Silent Mode"
      checked={State} onChange={()=>{
        var mode;
        if(State==="true")
        mode="silent"
        else  mode="active"
        var {_id,name,ip_address,UserID}=Data;
  
        updateCamera({_id,name,mode,ip_address,UserID});
      }}
     />
        </div>
      </div>
      </div>
  );
}
