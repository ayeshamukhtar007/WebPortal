import React from 'react'
import { useState,useEffect } from "react";
import "./featuredInfo.css";
import {Camera} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {RiLinkM,RiLinkUnlinkM,RiUploadLine} from "react-icons/ri";
import {CountCameras,CountPairedCameras,CountUnpairedCameras} from "../../redux/apiCalls";
export default function FeaturedInfo() {
  const user = (useSelector((state) => state.user.currentUser));
  const dispatch = useDispatch();
  const cameras = (useSelector((state) => state.camera.countCameras));
  const pairedCameras = (useSelector((state) => state.camera.paired));
  const unpairedCameras = (useSelector((state) => state.camera.unpaired));
  useEffect(()=>{
    CountCameras(dispatch, user._id);
    console.log(cameras);
    CountPairedCameras(dispatch, user._id);
    console.log(pairedCameras);
    CountUnpairedCameras(dispatch, user._id);
    console.log(unpairedCameras);
   
    },[]);
  return (
    <div  className="featured">
      <div className="featuredItem">
      <Camera  className="featuredIcon"/>
            <div className="featuredContainer">
         
              <span className="featuredTitle">
                Total Devices
              </span>
              <span className="featuredCount">
               {cameras}
              </span>
            </div>
            <div className="featuredSub">
         
             View Details
            </div>
      </div>

      <div className="featuredItem">
     
      <RiLinkM  className="featuredIcon"/>
            <div className="featuredContainer">
         
              <span className="featuredTitle">
                 Paired Devices
              </span>
              <span className="featuredCount">
               {cameras-unpairedCameras}
              </span>
            </div>
            <div className="featuredSub">
         
             View Details
            </div>
      </div>

      <div className="featuredItem">
      
      <RiLinkUnlinkM  className="featuredIcon" style={{ color: "#1DA1F2" } }  />
            <div className="featuredContainer">
         
              <span className="featuredTitle">
                UnPaired Devices
              </span>
              <span className="featuredCount">
               {unpairedCameras}
              </span>
            </div>
            <div className="featuredSub">
         
             View Details
            </div>
      </div>
    </div>
  )
}
