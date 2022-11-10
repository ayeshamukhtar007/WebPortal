import "./serviceTable.css";
import { useState,useEffect } from "react";
import {
  Camera,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import SecondTopBar from '../../components/secondtopbar/SecondTopBar';

import  'bootstrap/dist/css/bootstrap.min.css';
import {Dialog,DialogTitle,DialogContent,DialogActions,Button} from "@material-ui/core";
import {RiLinkM,RiLinkUnlinkM,RiUploadLine} from "react-icons/ri";
import { SearchOutlined,Edit,DeleteRounded,Add,DeleteOutlineRounded } from "@material-ui/icons";

import {useDispatch, useSelector } from "react-redux";
import { DeleteService, GetServices} from "../../redux/apiCalls";

export default function Servicetable() {
  const [services,setServices]=useState([]);
 

useEffect(()=>{
  GetServices()
  
  .then(items=>{
    console.log(items)
    setServices(...services,items.data)
 
  })

 
  },[]);
 
  const renderList=services.map((ser)=>{
    const {_id,title,description,price}=ser;
   return(
   
    <table className="serviceTable" id="table" key={_id}>
    
     
      <tr className="serviceTr">
        <td className="serviceUser">
          <Camera className="CameraIcon"/>
          <span className="serviceName">{title}</span>
        </td>
        
        <td className="serviceStatus">{description}</td>
        <td className="serviceMode">{price}</td>
        <td >
          <div className="Attributerow1">
          <Link to={"/EditService/" + _id}>
              <Edit className="AttributeIcon"  />

            </Link>
     
          
          <DeleteRounded className="AttributeDeleteIcon" onClick={()=>{
              const sid=_id;
              
              DeleteService({sid});
              window.location.reload(true);
             
            }}/>

       
         

          
          </div>
        </td>
      </tr>
     </table>
  )
  });
  return (
    <div className="service">
       <SecondTopBar title="Services"/>

      
      <div class="search-container">
          
            <input type="text" placeholder="Search.." name="search" className="searchinput"/>
            <button type="submit" className="searchbutton"><SearchOutlined/></button>
        
        </div>
      
      <table className="serviceTable" id="table">
      
        <tr className="serviceTr">
          <th className="serviceTh">Title</th>
          <th className="serviceTh">Description</th>
          <th className="serviceTh">Price(Rs)</th>
          <th className="serviceTh">Actions</th>
        </tr>
       
      
       
      
      </table>
      {renderList}

    </div>
  );
}
