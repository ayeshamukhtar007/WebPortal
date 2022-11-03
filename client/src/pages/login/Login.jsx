import React from 'react';
import './login.css';
import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import  'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import { requestFirebaseNotificationPermission,onMessageListener } from '../../firebaseInit';

const Login=()=>{
   

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error,currentuser } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    requestFirebaseNotificationPermission()
    .then((firebaseToken) => {
      // eslint-disable-next-line no-console

      console.log("jhgjg",firebaseToken);
      login(dispatch, { email, password,firebaseToken });

    })
  
  };
  return(
      <div className='login'>
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
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email"
               onChange={(e) => setEmail(e.target.value)}
              />
          </div>
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
          
      </form>
</div>

           </div>
      
      </div>
      </div>
  )
}
export default Login;