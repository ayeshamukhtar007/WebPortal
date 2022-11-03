import React, { useState ,useEffect} from 'react';
import './employee.css';
import SecondTopBar from '../../components/secondtopbar/SecondTopBar';
import { SearchOutlined } from "@material-ui/icons";
import {EmployeeAteen} from "../../redux/apiCalls";
import {useDispatch, useSelector } from "react-redux";

// export default function Employee() {
  
//     const [image, setImage] = useState({ preview: "", raw: "" });
//     const handleChange = e => {
//       if (e.target.files.length) {
//         setImage({
//           preview: URL.createObjectURL(e.target.files[0]),
//           raw: e.target.files[0]
//         });
//       }
//     };
//   return(
//     <div className="view">
//     <SecondTopBar title="Employee Information"/>
  
//     <div className='Employee'>
//         <div className='EmployeeWrapper'>
//     <form>
//       <h3 className='SignupTitle'>Employee Details</h3>
//       <div className="form-group">
//                      <label>Name</label>
//                      <input type="text" name="name" className="form-control" placeholder="name" 
//                      />
//                 </div>
               
//                 <div className="form-group">
//                     <label>Email address</label>
//                     <input type="email" name="email" className="form-control" placeholder="Enter email" 
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Phone Number</label>
//                     <input type="text" name="password" className="form-control" placeholder="Enter Phone number" 
//                 />
//                 </div>
              
//                 <div className="form-group">
//                     <label>Company Name</label>
//                     <input type="text" name="companyName" className="form-control" placeholder="Enter company name" 
//                 />
//                 </div>
//                 <div className="form-group">
//                     <label>Company ID</label>
//                     <input type="text" name="companyName" className="form-control" placeholder="Enter company id" 
//                 />
//                 </div>
//       <button type="submit" className="btn btn-primary"
//      >Submit</button>
     
  
      
//   </form>
//   </div>
//   <div className='EmployeeWrapper'>
//   <div className="form-group">
//           <label style={{marginTop:30}}>Upload Thread Image</label>

//        <div className='imgBox'>
//         {image.preview ? (
//           <img src={image.preview} alt="dummy" width="10" height="10"  style={{borderRadius:6}}/>
//         ) : (
//           <img 
//           src="https://media.istockphoto.com/photos/smiling-handsome-man-with-trendy-haircut-and-glasses-isolated-on-picture-id1170154569?k=20&m=1170154569&s=612x612&w=0&h=9i5KgTXwG01DTsg6Ba7dJBOT6LMwHWAW30aKciUpdtc="
//           className="EmployeeImage"
//           />
//         )}
//         </div> 
//      <label type="button" class="upload"  htmlFor="upload-button"
//        >Upload</label>
//          <input
//         type="file"
//         id="upload-button"
//         style={{ display: "none" }}
//         onChange={handleChange}
//       />
//       </div>
//           </div>
//     </div>
//     </div>
//   );
// };
export default function Employee() {
  const dispatch = useDispatch();

  const user = (useSelector((state) => state.user.currentUser));
  const atte = (useSelector((state) => state.user.atten));

 
  useEffect(()=>{
   EmployeeAteen(dispatch, user._id);
     },[]);
  // var atten=EmployeeAteen(user._id)
  const {date,attendance}=atte;
  // const renderLsit=attendance.forEach(element => {
  //   console.log(element)
 
  // return(
  //   <table className="widgetLgTable" id="table" >
    
     
  //     <tr className="widgetLgTr">
  //       {/* <td className="widgetLgUser">
  //         <Camera className="CameraIcon"/>
  //         <span className="widgetLgName">{name}</span>
  //       </td> */}
        
  //       <td className="widgetLgStatus">{element.employeename}</td>
  //       <td className="widgetLgMode">{element.starttime}</td>
  //       <td className="widgetLgMode">{element.endtime}</td>

  //     </tr>
  //    </table>
  // );
  // })
  const renderList=attendance.map((att)=>{
  // const[_id,employeename,starttime,endtime]=att
  return(
    <table className="widgetLgTable" id="table" >
    
     
      <tr className="widgetLgTr">
        {/* <td className="widgetLgUser">
          <Camera className="CameraIcon"/>
          <span className="widgetLgName">{name}</span>
        </td> */}
        
        <td className="widgetLgStatus">{att.employeename}</td>
        <td className="widgetLgMode">{att.starttime}</td>
        <td className="widgetLgMode">{att.endtime}</td>

      </tr>
     </table>
  )

  })
  return(
    <div className="view" >
         <SecondTopBar title="Employee Attendance"/>
        <div class="search-containerEm">
          
            <input type="text" placeholder="Search.." name="search" className="input"/>
            <button type="submit"><SearchOutlined/></button>
        
        </div>
        <div className='Emview'>
      <table className="widgetLgTableEmp" id="table">
      
      <tr className="widgetLgTrEm">
        <th className="widgetLgTh">EmployeeName</th>
        <th className="widgetLgTh">First In</th>
        <th className="widgetLgTh">Last Out</th>
        {/* <th className="widgetLgTh">Attributes</th> */}
      </tr>
     
    
     
    
    </table>
  {renderList}
  </div>
    </div>
  )
}
