import { useState,useEffect } from "react";
import "./modes.css";
import SecondTopBar from '../../components/secondtopbar/SecondTopBar';
import { SearchOutlined,ArrowDropDown } from "@material-ui/icons";
import {useDispatch, useSelector } from "react-redux";
import {Viewcameras,updateCamera} from "../../redux/apiCalls";
import {Security} from "@material-ui/icons";
import Toggle from 'react-styled-toggle';

export default function Modes() {
  const user = (useSelector((state) => state.user.currentUser));
  
  const dispatch = useDispatch();
  const cameras = (useSelector((state) => state.camera.cameras));
  console.log(cameras)
  useEffect(()=>{
    Viewcameras(dispatch,user);
     },[]);
  const [detailsShow, setdetailsShow] = useState("false");
  const handleClick = (e) => {
    setdetailsShow(!detailsShow);
    
   };
  const [state, setState] = useState('');
  var modeState;
   const UserID=user._id;
  const renderList=cameras.map((camera)=>{
    var {_id,name,mode,status}=camera;

  //   // const childToParent = (childdata) => {
  //   //   setState(childdata);
  //     if(mode==="active"){
  //      setState(true)
  //     }else setState(false)
  //   //   console.log(state);
  //     // var uid=user._id;
  //     // updateCamera({_id,name,mode,ip_address,uid});
  //     // window.location.reload(true);
  //   // }
  
    return(
   <div key={_id}>
      < div className="modeTopbar">
      <div className="modeTopbarWrapper">
        <div className="modeTopLeft">
          <Security className="modeIcon"/>
          <div className="modeTitle">
           
           <span className="topLeftTitle">{name}</span>
           </div>
        </div>
        <div className="modeTopRight">
          { mode==="active"?
        modeState=true:
     modeState=false}
     
      <Toggle width={65}  height={26} sliderHeight={20} sliderWidth={20}
      translate={38} labelRight="Active Mode"  labelLeft="Silent Mode"
      checked={modeState} onChange={()=>{
   
        if(mode==="active")
        mode="silent"
        else  mode="active"
     
        updateCamera({_id,name,mode,UserID,status});
        window.location.reload(true);
      }}
     />
        </div>
      </div>
      </div>
   </div>

  )
  });
  return (
    <div className="view">
        <SecondTopBar title="Modes"/>
        <div class="search-container">
          
            <input type="text" placeholder="Search.." name="search" className="input"/>
            <button type="submit"><SearchOutlined/></button>
        
        </div>
        <div className="allmodes">
        {/* <ToggleBar Title="Modes"  Attribute="7 Cameras"  State="Active"/> */}
        </div>
         
        < div className="detailsTopbar">
      <div className="detailsTopbarWrapper">
        <div>
          
           <span className="detailsTitle">Cameras Modes Details</span>
           
           
        </div>
        <div>
          <ArrowDropDown  onClick={handleClick} />
        </div>
      </div>
      </div>
        {
          detailsShow?
        <div className="modes" id="CamerasModesDetails">
        {/* <ToggleBar Title="Camera1"   State="Active"/>
        <ToggleBar Title="Camera1"    State="Active"/>
        <ToggleBar Title="Camera1"    State="Active"/> */}

{renderList}
        </div>
        :null
        }
        </div>
        
   
  )
}
