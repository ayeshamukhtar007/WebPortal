import React from 'react';
import "./video.css";
import ReactPlayer from 'react-player';
import {useDispatch, useSelector } from "react-redux";
import { Viewcameras,addcamera,PairedCamera } from "../../redux/apiCalls";
// import { Video } from 'react-video-stream';
import { useState,useEffect } from "react";
export default function Video1({id}) {
  const user = (useSelector((state) => state.user.currentUser));
  const dispatch = useDispatch();
     const cameras = (useSelector((state) => state.camera.cameras));
     console.log(cameras)
     useEffect(()=>{
      Viewcameras(dispatch, user);
       },[]);
       const renderList=cameras.map((camera)=>{
        const {_id,name,mode,videoLink,status,ip_address}=camera;
        console.log(id)
      return(
        <>{id==_id?
          <iframe  src={videoLink}  key={_id}  width="700"  height="500" allowfullscreen="" scrolling="no" className='margin2' />
          :
          <iframe  src={videoLink}  key={_id}  width="700"  height="500" allowfullscreen="" scrolling="no" className='margin2' />

        }</>
        // <iframe  src={videoLink}  key={_id}  width="700"  height="500" allowfullscreen="" scrolling="no" className='margin2' />
        // <ReactPlayer playing url={
        //   {src: {videoLink}}} />
      //   <Video
    
      //   controls={true}
      //   autoPlay={true}
     
      //   remoteUrl={url}
      // />
    //  <video> <source src={videoLink}></source></video>
      )
      });
  return (
    <div  className="display">
      <div className='rowCol'>
      {renderList}

      </div>
       
     
             {/* <iframe  src="https://10.113.57.118:8080/video"  height='700'/>
             <iframe  src="https://192.168.137.24:8080/video"  height='700'/> */}

      {/* <div className='row'>
       <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeAvM4fr8zYj2tL9HZ5DoIY9yOv_ZzCiQF7g&usqp=CAU" className='img'/>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwyBe4bHVR2gnPQgKSH3qQwOiFCvx11MQiQ&usqp=CAU' className='img'/>
      <img src='https://m.media-amazon.com/images/S/aplus-media/vc/52bfea03-c3cb-44fb-ae17-0c60549f8438._CR250,0,1440,1080_PT0_SX300__.jpg' className='img'/>
      <img src='https://ap.rdcpix.com/6c7ff2aa8195fd8c27f71158cef9cd81l-m569567775xd-w1020_h770_q80.jpg' className='img'/>
      <img src='https://wdcimagestorageprodeast.blob.core.windows.net/mls010/Large/20005401_HD_1638964479622_20005401_4.JPEG' className='img'/>

      </div>
      <div className='row'>
       <img  src="https://images.indianexpress.com/2020/06/office-new-759.jpg" className='img'/>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNJq9xZK-W1-IAJ7H6w1VeZsBOAs1wpc_cQ&usqp=CAU' className='img'/>
      <img src='https://images.adsttc.com/media/images/6077/21f1/f91c/81f9/7400/03c7/newsletter/novita-office-nyc-31web.jpg?1618420203' className='img'/>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDKHKpArunMZ6RpJ0duFQ44p1mrs3blb1ybA&usqp=CAU' className='img'/>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwyBe4bHVR2gnPQgKSH3qQwOiFCvx11MQiQ&usqp=CAU' className='img'/>

      </div>
      <div className='row'>
       <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljft_hqTaw89QH7iqNoDlRTAFwBCJ0hLSyg&usqp=CAU" className='img'/>
      <img src='https://static01.nyt.com/images/2020/11/18/well/well-grocery-shopping/well-grocery-shopping-articleLarge.jpg?quality=75&auto=webp&disable=upscale' className='img'/>
      <img src='https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Kroger_checkout-face_masks_copy_1.jpg?itok=w_3HnDkQ' className='img'/>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_oRy7WnjXctOhUQoJC1S1pq-5Leri6Mv9Q&usqp=CAU' className='img'/>
      <img src='https://media.istockphoto.com/photos/warehouse-picture-id957065332?k=20&m=957065332&s=612x612&w=0&h=qWeN3qizo74lQ9ztrhtZ-_5PkqogXougtZJI7jqLVSU=' className='img'/>

      </div> */}
    </div>
  )
}
