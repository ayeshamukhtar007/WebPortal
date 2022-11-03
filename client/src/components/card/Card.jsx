import React from "react";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import logo from '../../images/logo.png';
import {BuyService} from "../../redux/apiCalls";
export default function Card(props) {
  // const dispatch = useDispatch();
  const user = (useSelector((state) => state.user.currentUser));

  const handleClick=(id)=>{
    const data={
      uid:user._id,
      sid:id
    }
    console.log(data);
    BuyService(data);
   };
  return(
    <div className="card">
     <div className="cardWrapper">
          <img  src={logo} className="cardImg"/>
           <span className="cardTitle">{props.title}</span>
           <span className="cardAmount">${props.amount}</span>
           <p className="cardDescription">{props.description}</p>
           <button type="text" className="buyButton" onClick={()=>{
                const data={
                  uid:user._id,
                  sid:props.id
                }
                console.log(data);
                BuyService(data);
           }}>Subscribe</button>
     </div>
    </div>
  )
}