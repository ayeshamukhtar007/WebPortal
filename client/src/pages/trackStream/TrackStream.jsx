// import React, { useRef, useEffect,useState } from 'react';
// import "./stream.css";
// import { w3cwebsocket as W3CWebSocket } from "websocket";
// import {useDispatch, useSelector } from "react-redux";
// import utf8 from 'utf8';
// import { FlaskApi } from "../../redux/apiCalls";

// export default function Stream() {
//   const user = (useSelector((state) => state.user.currentUser));
//   const dispatch = useDispatch();
//      const cameras = (useSelector((state) => state.camera.cameras));
//   var canvas = useRef(null);
//   var[state,setState]=useState()
//   useEffect(() => {
//    FlaskApi()
//   }, []);
//   return <div> hello</div>;
// };

import "./trackStream.css";
import React, { useRef, useEffect } from 'react';
import { loadPlayer } from 'rtsp-relay/browser';
import { useState } from "react";
import {useDispatch, useSelector } from "react-redux";

import {BsRecordCircleFill} from "react-icons/bs";
import { w3cwebsocket as W3CWebSocket } from "websocket";
// const  image = document.querySelector('#image_Slice');
export default function TrackStream() {
  const src1 = useRef(null);
  const [state,setState]=useState()
  const cameraID = (useSelector((state) => state.alert.selectCamera));
   console.log(cameraID)
  // var ws = new W3CWebSocket('ws://127.0.0.1:5000/detection')
  //    ws.onmessage = (message) => {
  //    console.log('hello',message)
     
  //    var image = 'data:image/jpg;base64,' + message.data;
  //     setState(image)
  //   //  src1=image;
  //   // console.log("size= "+ message.data.length);
  //   //  return(     <img src={message} alt="video" className="ShowImg" />
  //   //  )
      
  // };
  useEffect(() => {

    var ws = new W3CWebSocket('ws://127.0.0.1:5000/detection/'+cameraID+'')
     ws.onmessage = (message) => {
      console.log(message)
      var arr=message.data.split(",");
    //  console.log('hello',arr[1])
     
     var image = 'data:image/jpg;base64,' + arr[1];
      setState(image)
    //  src1=image;
    // console.log("size= "+ message.data.length);
    //  return(     <img src={message} alt="video" className="ShowImg" />
    //  )
      
  };
  }, []);
  // var r=require.context('../../images')
  // const importAll=r.keys().map((item, index) => { 
  //     console.log(index)
      
   
  //     // images[item.replace('./', '')] = r(item); 
  //     return( <canvas src={r(item)} alt="video" className="ShowImg" />)

    
  //   });
  
  // const images = importAll(require.context('../../images'));
  // const render=images.forEach(element => {
 
  //   return(  <img src={element} alt="video" className="ShowImg" />
  //   )
  // });
// const render=images.map((img)=>{

//   return(  <img src={img} alt="video" className="ShowImg" />
//   )
// })
{}
  return <div className="con">
 <img  src={state} className="ShowImg" id="image_Slice"/>
  </div>;
};
