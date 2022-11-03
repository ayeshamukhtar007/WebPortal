import React,{useState} from "react";
import "./setThread.css";
import  'bootstrap/dist/css/bootstrap.min.css';

import 'react-calendar/dist/Calendar.css';
import {MdOutlineAddModerator} from "react-icons/md";
import Calendar from 'react-calendar';
import Modal from 'react-modal';
export default function SetThread() {
  const [thread, setThread] = useState("");
  const [disable, setDisable] = useState(true)

    const [image, setImage] = useState({ preview: "", raw: "" });
    const handleChange = e => {
      if (e.target.files.length) {
        setImage({
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        });
      }
    };
  return (
    <div className="setThread">
      <div className="setThreadWrapper">
      <div className="setThreadHeader">
      <p className="setThreadTitle">Thread Settings</p>
      <button type="button" class="btn btn-light" style={{padding:0,top:"10px",height:"40px",width:"100px"}}>Submit</button> 
      </div>
      <div className="form-group">
              <label>Thread Name</label>
              <input type="text" className="form-control" placeholder="Enter name"
               onChange={(e) => setThread(e.target.value)}
              />
          </div>
          <div className="form-group">
          <label>Upload Thread Image</label>

       <div className='imgBox'>
        {image.preview ? (
          <img src={image.preview} alt="dummy" width="160" height="150"  style={{borderRadius:6}}/>
        ) : (
          <img 
          src="https://media.istockphoto.com/photos/smiling-handsome-man-with-trendy-haircut-and-glasses-isolated-on-picture-id1170154569?k=20&m=1170154569&s=612x612&w=0&h=9i5KgTXwG01DTsg6Ba7dJBOT6LMwHWAW30aKciUpdtc="
          className="ThreadImg"
          />
        )}
        </div> 
     <label type="button" class="upload"  htmlFor="upload-button"
       >Upload</label>
         <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
          </div>
        </div>  
    </div>
  )
}
