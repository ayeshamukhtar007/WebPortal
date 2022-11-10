import React from 'react'
import { useState,useEffect } from "react";
import "./adminfeaturedInfo.css";
import {Description} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {RiUser4Fill,RiShoppingBag2Fill,} from "react-icons/ri";

// import {CgShoppingBag} from "react-icons/cg";
import {CountCameras,CountPairedCameras,CountServices,CountUnpairedCameras, CountUsers} from "../../redux/apiCalls";
export default function AdminfeaturedInfo() {
  // const user = (useSelector((state) => state.user.currentUser));
  // const dispatch = useDispatch();
  // const cameras = (useSelector((state) => state.camera.countCameras));
  // const pairedCameras = (useSelector((state) => state.camera.paired));
  // const unpairedCameras = (useSelector((state) => state.camera.unpaired));
  const [data,setData]=useState([]);
  const [services,setServices]=useState([]);

  useEffect(()=>{
    CountUsers()
    
    .then(items=>{
      console.log(items)
      setData(...data,items.data)
   
    })
    CountServices()
    .then(service=>{
      console.log(service)
      setServices(...services,service.data)

    })
   
    },[]);
  return (
    <div  className="featured">
      <div className="featuredItem">
      <RiUser4Fill  className="featuredIcon"/>
            <div className="featuredContainer">
         
              <span className="featuredTitle">
                Total Users
              </span>
              <span className="featuredCount">
               {data}
              </span>
            </div>
            <div className="featuredSub">
         
             View Details
            </div>
      </div>

      <div className="featuredItem">
     
      <RiShoppingBag2Fill  className="featuredIcon"/>
            <div className="featuredContainer">
         
              <span className="featuredTitle">
                 Total Services
              </span>
              <span className="featuredCount">
               {services}
              </span>
            </div>
            <div className="featuredSub">
         
             View Details
            </div>
      </div>

      <div className="featuredItem">
      
      <Description  className="featuredIcon" style={{ color: "#1DA1F2" } }  />
            <div className="featuredContainer">
         
              <span className="featuredTitle">
              Report
              </span>
              {/* <span className="featuredCount">
               {data}
              </span> */}
            </div>
            <div className="featuredSub">
         
             View Details
            </div>
      </div>
    </div>
  )
}
