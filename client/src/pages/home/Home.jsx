import { useState,useEffect } from "react";
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import SecondTopBar from '../../components/secondtopbar/SecondTopBar';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import {useDispatch, useSelector } from "react-redux";
import { Viewcameras } from "../../redux/apiCalls";

import "./home.css";
export default function Home() {
//   const user = (useSelector((state) => state.user.currentUser));
   

//   const dispatch = useDispatch();
//   const {cameras} = useSelector((state) => state.user);

//   useEffect(()=>{
//   window.alert("./home.css");
//   Viewcameras(dispatch, user);
//  console.log(cameras);
//   },[]);
  return (
    <div className="home">
      <SecondTopBar title="Home"/>
      <FeaturedInfo/>
     
      <div className="homeWidgets">
    
         <WidgetLg/>
      </div>
    </div>
  )
}
