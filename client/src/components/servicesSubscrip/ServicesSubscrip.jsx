import "./servicesSubscrip.css";
import { useState,useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import {ViewAllBuyedServices } from "../../redux/apiCalls";
export default function ServicesSubscrip() {
  const user = (useSelector((state) => state.user.currentUser));
  const dispatch = useDispatch();
  const Allservices = (useSelector((state) => state.user.services));
  var renderList=0;
  useEffect(()=>{
    ViewAllBuyedServices(dispatch, user._id);
    console.log("nameTr",Allservices);
    },[]);
    if(Allservices!=null){
     renderList=Allservices.map((s)=>{
      const {_id,title,description,price }=s.service;
    return(
      <table className="servicesSubscripTable" key={_id}>
           <tr className="servicesSubscripTr">
          <td className="nameTr">
           
            <span >{title}</span>
          </td>
          
          <td className="descriptionTr">
            <p>{description}</p>
          </td>
          <td >${price}</td>

        </tr>
      </table>
    )
    });
  }
  return (
    <div className="servicesSubscrip">
      <p className="servicesSubscripTitle">Subscribe Services </p>


   
      <div className="scrolldiv">
      <table className="servicesSubscripTable" >
        <tr className="servicesSubscripTr">
          <th className="servicesSubscripTh">Name</th>
          <th className="servicesSubscripTh">Description</th>
          <th className="servicesSubscripTh">Price</th>

        </tr>        
      </table>
      {renderList}
      </div>
    </div>
  );
}
