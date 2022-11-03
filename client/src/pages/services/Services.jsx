import { useState,useEffect } from "react";
import React from "react";
import "./services.css";
import SecondTopBar from '../../components/secondtopbar/SecondTopBar';
import Card from "../../components/card/Card";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import {GetServices,BuyService} from "../../redux/apiCalls";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow:4 },
];
export default function Services() {
  const dispatch = useDispatch();
  const services = (useSelector((state) => state.service.AllServices));
  useEffect(()=>{
    GetServices(dispatch);
   },[]);
 
   const renderList=services.map((service)=>{
    const {_id,title,description,price}=service;
   
  return(
   
    <Card  id={_id} title={title} amount={price} description={description}/>

  )
  });
  return (
    <div className="view">
           <SecondTopBar title="Services"/>
            <div className="Carousel">
              <Carousel breakPoints={breakPoints} >
                {renderList}
              </Carousel>
            </div>
        

        
    </div>
  )
}

