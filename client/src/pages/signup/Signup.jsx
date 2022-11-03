import React, { useState } from 'react';
import './signup.css';
import { useHistory } from 'react-router-dom';
import { register } from "../../redux/apiCalls";
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";
export default function Signup() {
    const history= useHistory();
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        companyName:"",
    })
    let key,value;
    const handleInputs=(e)=>{
       
          key=e.target.name;
          value=e.target.value;
          setUser({...user,[key]:value});
    }
    const postData=async(e)=>{
        e.preventDefault();
        const {name,email,password,companyName,confirmPassword}=user;
        if(password!=confirmPassword){
            window.alert("Password and confirm password don't match");

        }
        else{
        register({ name,email, password,companyName });
        
        }
    }
  return(
    <div className='signup'>
    <div className='signupWrapper'>
       <div className='SignupleftWrapper'>
         
           <img src={logo} className='signuplogo'/>
           <p className='AppName'>Eagle Eye Survillance System</p>
       </div>
       <div className='signuprightWrapper'>
       <div className="Signupauth-wrapper">
<form className='auth-innersignup'>
      <h3 className='SignupTitle'>Sign Up</h3>
      <div className="form-group">
                     <label>Name</label>
                     <input type="text" name="name" className="form-control" placeholder="name" 
                    value={user.name} onChange={handleInputs}/>
                </div>
               
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" 
                    value={user.email} onChange={handleInputs}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" 
                    value={user.password} onChange={handleInputs}/>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" className="form-control" placeholder="Enter password" 
                    value={user.confirmPassword} onChange={handleInputs}/>
                </div>
                <div className="form-group">
                    <label>Company Name</label>
                    <input type="text" name="companyName" className="form-control" placeholder="Enter password" 
                    value={user.companyName} onChange={handleInputs}/>
                </div>
      <button type="submit" className="btn btn-primary Signupsubmitbtn"
      onClick={postData}>Submit</button>
       <p className="forgot-password text-right">
       <Link to="/login" className="link">

                     Already registered <a href="#">sign in?</a>
                     </Link>
                 </p>
  
      
  </form>
</div>

       </div>
  
  </div>
  </div>

//    <div className="auth-wrapper ">
//       <form>
//                 <h3>Sign Up</h3>
//                 <div className="form-group">
//                     <label> name</label>
//                     <input type="text" name="name" className="form-control" placeholder="name" 
//                     value={user.name} onChange={handleInputs}/>
//                 </div>
               
//                 <div className="form-group">
//                     <label>Email address</label>
//                     <input type="email" name="email" className="form-control" placeholder="Enter email" 
//                     value={user.email} onChange={handleInputs}/>
//                 </div>
//                 <div className="form-group">
//                     <label>Password</label>
//                     <input type="password" name="password" className="form-control" placeholder="Enter password" 
//                     value={user.password} onChange={handleInputs}/>
//                 </div>
//                 <button type="submit" className="btn btn-primary btn-block" onClick={postData}>Sign Up</button>
//                 <p className="forgot-password text-right">
//                     Already registered <a href="#">sign in?</a>
//                 </p>
//             </form>
//   </div>
  );
};
