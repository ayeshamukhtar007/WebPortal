import React, { useState } from 'react';
import "./profileInfo.css";
import {Edit,Upload} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/apiCalls";

import "../../App.css";
export default function ProfileInfo() {
  const user = (useSelector((state) => state.user.currentUser));

  const [useValue, setValue] = useState({
      Name:user.name,
      Email:user.email,
      CompanyName:user.companyName,
    

    })

    const [css, setCss] = useState("profileInfoBox")
    const dispatch = useDispatch();
    const [disable, setDisable] = useState(true)
    const [btnName, setBtnName] = useState("Edit");
        let key,value;
    const handleInputs=(e)=>{
       
          key=e.target.name;
          value=e.target.value;
          setValue({...useValue,[key]:value});
    }
    const postData=()=>{
       
       
        if(btnName=="Edit"){
          setBtnName("Save");
          setDisable(false);
          setCss("profileEditBox");
          
        }
        else{
          setBtnName("Edit");
          setDisable(true);
          setCss("profileInfoBox");
          console.log(user);
          const _id= user._id;
          const name=useValue.Name;
          const email=useValue.Email;
          const companyName=useValue.CompanyName;
          // const {name,email,companyName}=useValue;
          console.log(useValue)
          updateUser(dispatch, {_id,name,email,companyName});


        }
    }
    // const [image, setImage] = useState({ preview: "", raw: "" });
    // const handleChange = e => {
    //   if (e.target.files.length) {
    //     setImage({
    //       preview: URL.createObjectURL(e.target.files[0]),
    //       raw: e.target.files[0]
    //     });
    //   }
    // };
 
  return (
    < div className="profileInfoBox">
      <div className="profileInfoBoxWrapper">
        <div className="profileInfotopLeft">
          <div className='formBox'>
           <span>My Profile</span>
          
             <div className="group">
            <input type="text" name='Name' value={useValue.Name} disabled={disable} onChange={handleInputs}/>
            <Edit className='editIcon' hidden={disable} 
           />
            </div>
            <div className="group"> 
            <input  type="text" name='Email' value={useValue.Email} disabled={disable} onChange={handleInputs}/>
            <Edit className='editIcon' hidden={disable}/>
            </div>
            {user.companyName!=null?
            <div className="group"> 
            <input  type="text" name='CompanyName' value={useValue.CompanyName} disabled={disable} onChange={handleInputs}/>
            <Edit className='editIcon' hidden={disable}/>
            </div>
            :null }
           
            {/* <div className="group" hidden={disable}>
            <input  type="password" name='OldPassword' value={useValue.OldPassword} disabled={disable} onChange={handleInputs}/>
            <Edit className='editIcon' />
            </div>
            <div className="group" hidden={disable}>
            <input  type="password" name='NewPassword' value={useValue.NewPassword} disabled={disable} onChange={handleInputs}/>
            <Edit className='editIcon'/>
            </div> */}
            </div>
        </div>
        <div className="profileInfotopRight">
        <button type="button" class="btn btn-light" onClick={postData}>{btnName}</button> 
       {/* <div className='imgBox'>
        {image.preview ? (
          <img src={image.preview} alt="dummy" width="160" height="150"  style={{marginLeft:70,borderRadius:6}}/>
        ) : (
          <img 
          src="https://media.istockphoto.com/photos/smiling-handsome-man-with-trendy-haircut-and-glasses-isolated-on-picture-id1170154569?k=20&m=1170154569&s=612x612&w=0&h=9i5KgTXwG01DTsg6Ba7dJBOT6LMwHWAW30aKciUpdtc="
          className="profileImg"
          />
        )}
        </div>  */}
     {/* <label type="button" class="btn btn-success"  htmlFor="upload-button"
       hidden={disable}  >Upload</label>
         <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      /> */}
      <br /> 
    


        </div>
      </div>
      </div>
  );
}
