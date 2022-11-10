import "./widgetLg.css";
import { useState,useEffect } from "react";
import {
  Camera,
} from "@material-ui/icons";
import  'bootstrap/dist/css/bootstrap.min.css';
import {Dialog,DialogTitle,DialogContent,DialogActions,Button} from "@material-ui/core";
import {RiLinkM,RiLinkUnlinkM,RiUploadLine} from "react-icons/ri";
import { SearchOutlined,Add,PlayCircleFilledOutlined,DeleteRounded,DeleteOutlineRounded } from "@material-ui/icons";
import {useDispatch, useSelector } from "react-redux";
import { Viewcameras,addcamera,ChangeCameraStatus, DeleteCamera } from "../../redux/apiCalls";
export default function WidgetLg() {
 const [openPopup,setOpenPopup]=useState(false);
  const user = (useSelector((state) => state.user.currentUser));
   const dispatch = useDispatch();
      const cameras = (useSelector((state) => state.camera.cameras));
  //  const alertCount = (useSelector((state) => state.camera.alertCount));
  const handleOpen=()=>{
    setOpenPopup(true);
  }
  const handleClose=()=>{
   
    setOpenPopup(false);
  }
  const [name, setName] = useState("");
  const [ip_address, setip_address] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    
    const id=user._id;
    addcamera({ id,name,ip_address});
    window.location.reload(true);
    setOpenPopup(false);
  
  };
  const handleChangeCameraStatus = (cid) => {
    const id=user._id;
    console.log(cid);
    ChangeCameraStatus({id,cid,status:"paired"});
    window.location.reload(true);
   
  
  };
 useEffect(()=>{
    Viewcameras(dispatch, user);
     },[]);
 
  const renderList=cameras.map((camera)=>{
    const {_id,name,mode,videoLink,status}=camera;
   
  //  for(var i=0;i<Object.keys(alertCount).length;i++){
  //     if(alertCount[i]._id===_id){
  //       alert1=alertCount[i].count;
  //       break;
  //     }
  //     else{
  //       alert1=0;
  //     }

  //   }
  return(
   
    <table className="widgetLgTable" id="table" key={_id}>
    
     
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <Camera className="CameraIcon"/>
          <span className="widgetLgName">{name}</span>
        </td>
        
        <td className="widgetLgStatus">{status}</td>
        <td className="widgetLgMode">{mode}</td>
        <td >
          <div className="Attributerow1">
               {status==="paired"? 
           
               <RiLinkM className="AttributeIcon" onClick={()=>{
              const uid=user._id;
              const cid=_id;
              const status="unpaired";
              ChangeCameraStatus({uid,cid,status,name,mode});
              window.location.reload(true);
             
            }}
          />
            :
            <>
           
            <RiLinkUnlinkM className="AttributeIcon" onClick={()=>{
              const uid=user._id;
              const cid=_id;
              const status="paired";
              ChangeCameraStatus({uid,cid,status,name,mode});
              window.location.reload(true);
             
            }}/>
       

            </>
          }
           {/* {status==="paired" && mode==="silent"? <>
          <Link to="/VideoPlaying" className="link">
           <CloudDownloadOutlined className="AttributeIcon "/> 
          </Link> 
       
          <Link
            to={{
              pathname: "/liveView",
              state: {cid:_id}// your data array of objects
            }}
            
          >
           <PlayCircleFilledOutlined className="AttributeIcon"/>

          </Link>
          </>
            :
            <>
           
            <RiLinkM className="AttributeIcon" onClick={()=>{
              const uid=user._id;
              const cid=_id;
              const status="paired";
              PairedCamera({uid,cid,status});
              window.location.reload(true);
             
            }}/>
       

            </>
          } */}
          <DeleteRounded className="AttributeDeleteIcon" onClick={()=>{
              const uid=user._id;
              const cid=_id;
              const status="paired";
              DeleteCamera({uid,cid,status});
              window.location.reload(true);
             
            }}/>

            {/* {
             
              alert1!=0? 
                <div className="IconContainer">
            <ReportProblemOutlined className="AttributeAlertIcon"/>
            <span className="IconBadge">{alert1}</span>
          </div> 
          
          : null
            } */}
         

          
          </div>
        </td>
      </tr>
     </table>
  )
  });
  return (
    <div className="widgetLg">
      <div className="widgetLgTitleBox">
         <span>Cameras Detail</span>
        
            <Add className="AddButton" onClick={handleOpen}/>
         
         
      </div>
      
      <div class="search-container">
          
            <input type="text" placeholder="Search.." name="search" className="searchinput"/>
            <button type="submit" className="searchbutton"><SearchOutlined/></button>
        
        </div>
        <Dialog open={openPopup}   showCloseIcon={true}>
          <DialogTitle className="title">
            <h3 className="titleheading">Register Camera</h3>
            
          </DialogTitle>
          <DialogContent>
          <div className="dialog">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control margin" placeholder="Assign Name"
                 onChange={(e) => setName(e.target.value)}
              />
          </div>
          <div className="form-group">
              <label>IP address</label>
              <input type="text" className="form-control margin" placeholder="Enter ip Address"
                  onChange={(e) => setip_address(e.target.value)}
              />
          </div>
          <input type="submit" className="RegisterBtn" onClick={handleClick}></input>

            </div>
          </DialogContent>
          <DialogActions>
            {/* <input type="submit" value="X" className="closebtn" OnClick={()=>{setOpenPopup(false)}}></input> */}
            <input type="submit" value="X" className="closebtn" onClick={handleClose}></input>
            </DialogActions>
        </Dialog>
      <table className="widgetLgTable" id="table">
      
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Devices</th>
          <th className="widgetLgTh">Status</th>
          <th className="widgetLgTh">Mode</th>
          <th className="widgetLgTh">Attributes</th>
        </tr>
       
      
       
      
      </table>
      {renderList}

    </div>
  );
}
