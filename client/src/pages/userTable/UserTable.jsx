import "./userTable.css";
import { useState,useEffect } from "react";
import {
  Camera,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import SecondTopBar from '../../components/secondtopbar/SecondTopBar';
import  'bootstrap/dist/css/bootstrap.min.css';
import {BiUserCircle} from "react-icons/bi";
import { SearchOutlined } from "@material-ui/icons";
import {useDispatch, useSelector } from "react-redux";
import { DeleteService, GetAllUsers, GetServices} from "../../redux/apiCalls";

export default function UserTable() {
  const [user,setUser]=useState([]);
 useEffect(()=>{
  GetAllUsers()
  .then(items=>{
    console.log(items)
    setUser(...user,items.data)
 
  })

 
  },[]);
 
  const renderList=user.map((ser)=>{
    const {_id,name,email,companyName}=ser;
   return(
   
    <table className="userTable" id="usertable" key={_id}>
    
     
      <tr className="userTr">
        <td className="userUser">
          <BiUserCircle className="CameraIcon"/>
          <span className="userName" >{name}</span>
        </td>
        
        <td className="userStatus">{email}</td>
        <td className="userMode">{companyName}</td>
       
      </tr>
     </table>
  )
  });
  return (
    <div className="user">
       <SecondTopBar title="users"/>

      
      <div class="search-container">
          
            <input type="text" placeholder="Search.." name="search" className="searchinput"/>
            <button type="submit" className="searchbutton"><SearchOutlined/></button>
        
        </div>
      
      <table className="userTable" id="usertable">
      
        <tr className="userTr">
          <th className="userTh">Name</th>
          <th className="userTh">Email</th>
          <th className="userTh">CompanyName</th>

        </tr>
       
      
       
      
      </table>
      {renderList}

    </div>
  );
}
