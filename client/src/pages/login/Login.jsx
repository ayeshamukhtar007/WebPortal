import React from 'react';
import './login.css';
import { useState } from "react";
import { Adminlogin, login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import  'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import { requestFirebaseNotificationPermission,onMessageListener } from '../../firebaseInit';

const Login=()=>{
   
    const [disable, setDisable] = useState(true);
    const [role, setRole] = useState("user");
    const [username, setUserName] = useState("");

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if(role!="user"){
        var isAdmin,isSuperAdmin;
        if(role=="CEO"){
          isAdmin=false;
        }
        else{
            isAdmin=true;
        }
         const data={
            username:username,
            password:password,
            isAdmin:isAdmin,

         }
         console.log(data)
         Adminlogin(dispatch,data)
    }
    else{
        requestFirebaseNotificationPermission()
        .then((firebaseToken) => {
          // eslint-disable-next-line no-console
    
          console.log("jhgjg",firebaseToken);
          login(dispatch, { email, password,firebaseToken });
    
        })
    }
   }
  const handleSelection=(e)=>{
    setDisable(false)
    console.log(e.target.value)
    setRole(e.target.value)
  }
  
  return(
      <div className='login'>
        {/* <div className='loginToggleWrapper'>
        </div> */}
        <div className='loginWrapper'>
           <div className='leftWrapper'>
             
               <img src={logo} className='logo'/>
               <p className='AppName'>Eagle Eye Survillance System</p>
           </div>
           <div className='rightWrapper'>
           <div className="auth-wrapper">
<form className='auth-innerlogin'>
          <h3 className='Title'>Sign In</h3>
          <div className="form-group">
              <label>Role</label>
              <select class="form-select" value={role} aria-label="Default select example" onChange={handleSelection}>
                    <option selected>Open this select menu</option>
                    <option value="CEO">CEO</option>
                    <option value="user">User</option>
                    <option value="manager">Manager</option>
                </select>
          </div>
         
          {role!="user"?
          <div className="form-group">
              <label>User Name</label>
              
              <input type="text" className="form-control" placeholder="Enter username" 
               onChange={(e) => setUserName(e.target.value)
               }
               
              />
          </div>
          :
          <div className="form-group">
          <label>Email address</label>
          
          <input type="email" className="form-control" placeholder="Enter email" 
           onChange={(e) => setEmail(e.target.value)
           }
           
          />
      </div>
          }
          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" 
               onChange={(e) => setPassword(e.target.value)
                }
                          />
          </div>
          <div className="form-group">
              <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
              </div>
          </div>
          <button button type="submit" className="btn btn-primary Signupsubmitbtn"
          onClick={handleClick} >Submit</button>
          {/* {error && <span>Something went wrong...</span>} */}
        {role=="user" ?
          <div className='Footer'>
          <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
          </p>
          <p className="forgot-password text-left">
          <Link to="/signup" className="link">

                   Create Account
                   </Link>
          </p>
          </div>
          :
               <div className='blankDiv'></div>
          
          }
      </form>
</div>

           </div>
      
      </div>
     
      </div>
  )
}
export default Login;