import "./stream.css";
import noSignal from "../../images/noSignal.JPG"
import React, { useRef, useEffect } from 'react';
import { loadPlayer } from 'rtsp-relay/browser';
import { useState } from "react";
import {BsRecordCircleFill} from "react-icons/bs";

export default function Stream({ip,identifier}) {
  // const canvas = useRef(null);
  // useEffect(() => {

  //   loadPlayer({
  //     url:  'ws://localhost:5005/api/stream/'+ip+'',
  //     canvas: canvas.current,
  //   });
  // }, []);
const handle=()=>{
  identifier='lx'
}
  return <div className="con">
    <img src="http://46.229.128.35:81/mjpg/video.mjpg" className={identifier} onClick={handle}/>
    {/* <canvas ref={canvas} className={identifier} onClick={handle}  /> */}
    {/* <BsRecordCircleFill className="RI"/>
    {identifier=='canSx'?     
    <BsRecordCircleFill className="recordIconSx"/>
    :<BsRecordCircleFill className="RIMx"/>
}
   */}
  </div>;
};
