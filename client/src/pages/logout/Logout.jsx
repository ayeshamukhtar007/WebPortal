import React from 'react';

import { useState } from "react";
import { logout } from "../../redux/userRedux";
import { useDispatch, useSelector } from "react-redux";

const Logout=()=>{
   
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
  dispatch(logout());

  
  };
  
  return(
       <div>

               
                <button type="submit" className="btn btn-primary btn-block"
                onClick={handleClick}>Logout</button>
               
  </div>
  )
}
export default Logout;