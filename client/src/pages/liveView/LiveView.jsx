// import React, { useRef, useEffect } from 'react';
// import {useDispatch, useSelector } from "react-redux";
// import Stream from '../../components/Stream/Stream';
// import "./liveView.css";
// export default function LiveView() {
//   const cameras = (useSelector((state) => state.camera.cameras));
//   console.log(cameras)
//   // var arr=[{id:1,ip:"192.168.1.104"}]
//   const renderList=cameras.map((camera)=>{
//    var{_id,_ip_address_buf}=camera;
//    console.log(_ip_address_buf.data.toString().replaceAll(",","."))
//     return(
//       <div  className='stream' key={_id} >
        
//               <Stream ip={_ip_address_buf.data.toString().replaceAll(",",".")}/>
//       </div>
//     )
//   });
//   return (
//   <div className="Liveview">
//       {renderList}
//   </div>

// )};

import React, { useRef, useEffect,useState } from 'react';
import {useDispatch, useSelector } from "react-redux";
import Stream from '../../components/Stream/Stream';
import { ShowCamera,ShowState} from "../../redux/cameraRedux";
import {BsReverseLayoutSidebarReverse,BsRecordCircleFill} from "react-icons/bs";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {Arow} from "react-icons/ri";

import "./liveView.css";
export default function LiveView() {
  const[show,setShow]=useState(false)
  const dispatch = useDispatch();  
  const cameras = useSelector((state) => state.camera.cameras);
  const showcamera = useSelector((state) => state.camera.ipAdddress);
  const state = useSelector((state) => state.camera.state);
  let modified_collection = [];
  const user = (useSelector((state) => state.user.currentUser));
 var uid=user._id
 console.log(cameras)
 const[noSignal,setNoSignal]=useState()
  var ws = new W3CWebSocket("ws://localhost:5005/ping/"+uid+"")

 
  useEffect(()=>{
    setShow(state)

 
     },[]);
  //    ws.onmessage = (message) => {
  //     var Data=message.data;
  //     var DataObj=JSON.parse(JSON.stringify(Data))
  //     console.log(JSON.parse(DataObj).ip);
  //     setNoSignal(JSON.parse(DataObj).ip)

      
  // };
     if (cameras.length > 0) {
      let numberOfColumns;
      if(show==true)
        numberOfColumns = 2;
      else
        numberOfColumns = 4;
  
  
      let index = 0;
      for (let i = 0; i < cameras.length; i++) {
        if (index % numberOfColumns == 0) {
          index = 0;
        }
  
        if (!modified_collection[index]) {
          modified_collection[index] = [];
        }
  
        modified_collection[index].push(cameras[i]);
        index++;
      }
    }
  
 

  return (
    <div className='Liveview'>
<div style={{
          height:10,
        
        }}>
<BsReverseLayoutSidebarReverse className='ShowIcon' onClick={()=>{dispatch(ShowCamera(cameras[cameras.length-1]._ip_address_buf.data.toString().replaceAll(",",".")))
      setShow(!show)
      
  }
  
  }/>
</div>
  
     {  show? <div style={{
      width: "50%",
      
   }}>
    
   <Stream ip={showcamera} identifier='canLx'/>

   </div>
   :null}
      <div style={show?{ 
         width: "45%",
         display: "flex",
         flexDirection: 'row',} :
         { 
          width: "100%",
          display: "flex",
          flexDirection: 'row',}
         } className='LeftLiveView'>
      {modified_collection.map((row, index) => (
        <div
          key={index}
        style={{
          marginLeft:20,
          marginTop:20
        }}
        >
          {row.map((col, index) => (
            <div 
              key={index} onClick={()=>{ 
                if(show){
                  dispatch(ShowCamera(col._ip_address_buf.data.toString().replaceAll(",",".")))
                  dispatch(ShowState(true))
               window.location.reload(true)
             
                }
                
            
            } 
              }>
            {show?   
             <Stream ip={col._ip_address_buf.data.toString().replaceAll(",",".")} identifier='canSx'/>
             :
            <Stream ip={col._ip_address_buf.data.toString().replaceAll(",",".")} identifier='canMx'/>
             }
            </div>
          ))}
        </div>
      ))}
      </div>
    </div>
   
)};