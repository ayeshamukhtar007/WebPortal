import { useState,useEffect } from "react";
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import SecondTopBar from '../../components/secondtopbar/SecondTopBar';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import {useDispatch, useSelector } from "react-redux";
import { CountServiceMonthly, CountUsersMonthly, Viewcameras } from "../../redux/apiCalls";
import Chart from '../../components/chart/Chart';

import "./adminDashboard.css";
import AdminfeaturedInfo from "../../components/adminfeaturedInfo/AdminfeaturedInfo";
export default function AdminDashboard() {
//   const user = (useSelector((state) => state.user.currentUser));
const [data,setData]=useState([]);
const [services,setServices]=useState([]);

useEffect(()=>{
  CountUsersMonthly()
  
  .then(items=>{
    console.log(items)
    setData(...data,items.data)
 
  })
  CountServiceMonthly()
  .then(service=>{
    console.log(service)
    setServices(...services,service.data)

  })
 
  },[]);

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
      <AdminfeaturedInfo/>
      <Chart data={data} title ="user Analytics"  dataKey="Totaluser"/>
      <Chart data={services} title ="Services Analytics"  dataKey="Revenue"/>

      {/* <div className="homeWidgets">
    
         <WidgetLg/>
      </div> */}
    </div>
  )
}
