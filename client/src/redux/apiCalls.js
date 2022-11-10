import { loginFailure, loginStart, loginSuccess,ViewAllServices,Attendance} from "./userRedux";
import { adminlogin} from "./adminRedux";
import { ViewCameraData ,CountAlert,CountAllCameras,CountPaired,CountUnpaired} from "./cameraRedux";
import { GetAllServices} from "./serviceRedux";
import { GetAllAlerts} from "./alertRedux";

import { publicRequest, userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    const id=res.data._id
    const firebaseToken=user.firebaseToken
    registerDevice({id,firebaseToken})
    dispatch(login(res.data));
    window.alert("login susscessfull");
  } catch (err) {
    if(err.response.status==401 || err.response.status==500){
      window.alert("invalid password or username");
    }
    dispatch(loginFailure());
  }
};
export const Adminlogin = async (dispatch, admin) => {

  try {
    const res = await publicRequest.post("/admin/login", admin);
    dispatch(adminlogin(res.data));
    window.alert("login susscessfull");
  } catch (err) {
    if(err.response.status==401 || err.response.status==500){
      window.alert("invalid password or username");
    }

  }
};
export const registerDevice = async (tokenData) => {
  console.log('tokenData',tokenData)
try {
  await publicRequest.post("/auth/deviceRegister", tokenData);
  // window.alert("Registeration susscessfull");
 
} catch (err) {
 
  console.log(err.message);
}
}; 
export const addService = async (Data) => {
try {
  await publicRequest.post("/service/addservice", Data);
  // window.alert("Registeration susscessfull");
 
} catch (err) {
 
  console.log(err.message);
}
};
export const updateUser = async (dispatch,user) => {
  try {
    console.log(user)
    const res = await userRequest.put("/user/updateUser/"+user._id+"",user);
    
    dispatch(loginSuccess(res.data));
    console.log(res.data);
    window.alert("update susscessfull");
  } catch (err) {
   
  }
};
export const register = async (user) => {

  try {
    await publicRequest.post("/auth/register", user);
    window.alert("Registeration susscessfull");
   
  } catch (err) {
    if(err.response.status==500){
      window.alert("Invalid Data");
    }
    console.log(err.message);
  }
};
export const editService = async (service) => {
   const ser={
    title:service.title,
    description:service.description,
    price:service.price,

   }
  try {
    await publicRequest.put("/service/updateService/"+service.sid+"",ser);
    window.alert("Update susscessfull");
   
  } catch (err) {
    
    console.log(err.message);
  }
};
// export const addcamera = async (camera) => {
//   window.alert("Camera Register susscessfull");

//   try {
//     const res = await userRequest.post("/camera/newcamera", camera);
//     window.alert(res.status);
//     window.alert("Camera Register susscessfull");
   
//   } catch (err) {
  

//     console.log(err)
//   }
// };
export const Viewcameras= async (dispatch,user) => {
  
  const url="/camera/ViewAllCameras/"+user._id+"";
  console.log(url);
  try {
    const res = await userRequest.get(url);

    dispatch(ViewCameraData(res.data));

  } catch (err) {
   
    console.log(err)
  }
};
export const CountCameraAlert= async (dispatch,user) => {

  const url="/alert/CountAllAlert/"+user+"";
 console.log(url);
  try {
    const res = await userRequest.get(url);
    dispatch(CountAlert(res.data));
 
  } catch (err) {
   
    console.log(err)
  }
};
export const EmployeeAteen= async (dispatch,id) => {
  console.log('hello')
  const url="/user/GetAtten/"+id;
 console.log(url);
  try {
    const res = await userRequest.get(url);
    
    dispatch(Attendance(res.data));

    
  } catch (err) {
   
    console.log(err)
  }
};
export const CountCameras= async (dispatch,id) => {
  
  const url="/camera/CountCamera/"+id;
 console.log(url);
  try {
    const res = await userRequest.get(url);
    dispatch(CountAllCameras(res.data));
    
  } catch (err) {
   
    console.log(err)
  }
};
export const CountUsers= async () => {
  
  const url="/user/CountUser/";

  try {
    const res = await publicRequest.get(url);
    return res;
  } catch (err) {
   
    console.log(err)
  }
};
export const CountUsersMonthly= async () => {
  
  const url="/user/countUserMonthly";

  try {
    const res = await publicRequest.get(url);
    return res;
  } catch (err) {
   
    console.log(err)
  }
};
export const CountServiceMonthly= async () => {
  
  const url="/service/countMonthly";

  try {
    const res = await publicRequest.get(url);
    return res;
  } catch (err) {
   
    console.log(err)
  }
};export const serviceOverAllsubscription= async (id) => {
  
  const url="/service/serviceOverAllsubscription/"+id+"";

  try {
    const res = await publicRequest.get(url);
    return res;
  } catch (err) {
   
    console.log(err)
  }
};
export const CountServices= async () => {
  
  const url="/service/CountServices";

  try {
    const res = await publicRequest.get(url);
    console.log('gg',res)
    return res;
  } catch (err) {
   
    console.log(err)
  }
};
export const CountPairedCameras= async (dispatch,id) => {
  
  const url="/camera/CountPairedCamera/"+id;
 console.log(url);
  try {
    const res = await userRequest.get(url);

    dispatch(CountPaired(res.data));
 
  } catch (err) {
   
    console.log(err)
  }
};
export const CountUnpairedCameras= async (dispatch,id) => {
  
  const url="/camera/CountUnpairedCamera/"+id;
 console.log(url);
  try {
    const res = await userRequest.get(url);
    dispatch(CountUnpaired(res.data));
 
  } catch (err) {
   
    console.log(err)
  }
};
export const ViewAllBuyedServices= async (dispatch,id) => {
  
  const url="/user/ViewAllBuyedServices/"+id;
 console.log(url);
  try {
    const res = await userRequest.get(url);
    dispatch(ViewAllServices(res.data));

  } catch (err) {
   
    console.log(err)
  }
};
export const GetServices= async () => {
  
  const url="/service/ViewAllServices";
 console.log(url);
  try {
    const res = await userRequest.get(url);
    // dispatch(GetAllServices(res.data));
    return res
  } catch (err) {
   
    console.log(err)
  }
};
export const GetAllUsers= async () => {
  
  const url="/user/AllUsers";

  try {
    const res = await publicRequest.get(url);
    // dispatch(GetAllServices(res.data));
    return res
  } catch (err) {
   
    console.log(err)
  }
};
export const BuyService = async (data) => {
  console.log("inside", data)
  try {
    const res = await userRequest.post("/user/buyservice/"+data.uid+"/"+data.sid+"");
    window.alert("buy susscessfull");
  } catch (err) {
      
    console.log(err)
  }
};
export const ChangeCameraStatus = async (data) => {
  const {uid,cid,status,mode,name}=data;
  console.log(data)
  try {
    const res = await userRequest.put("/camera/updateCamera/"+cid+"/"+uid+"",{status,mode,name});
    window.alert("paired susscessfull");
  } catch (err) {
      
    console.log(err)
  }
};
export const addcamera = async (data) => {
 const {id,name,ip_address}=data;
 console.log(ip_address)
  try {
    const res = await userRequest.post("/camera/addcamera/"+id+"",{name,ip_address});
    window.alert("add susscessfull");
  } catch (err) {
    if(err.response.status==500){
      window.alert("Invalid IP Address");
    }
    console.log(err.message)
  }
};
export const updateCamera = async (data) => {
  console.log("update susscessfully susscessfull")
  const {_id,name,UserID,mode,status}=data;
   try {
     const res = await userRequest.put("/camera/updateCamera/"+_id+"/"+UserID+"",{name,mode,status});
     window.alert("update susscessfully susscessfull");
   } catch (err) {
     if(err.response.status==500){
       window.alert("Invalid IP Address");
     }
     console.log(err.message)
   }
 };
export const GetAlert = async (dispatch,id) => {
 console.log(id)
  try {
    const res = await userRequest.get("/alert/GetAlert/"+id+"");
    console.log(res.data)
    dispatch(GetAllAlerts(res.data));
  } catch (err) {
      
    console.log(err)
  }
};export const GetService= async (id) => {
  console.log(id)
   try {
     const res = await userRequest.get("/service/ViewService/"+id+"");
    return res;
   } catch (err) {
       
     console.log(err)
   }
 };
export const DeleteCamera = async (data) => {

   try {
     const res = await userRequest.delete("/camera/delCamera/"+data.cid+"/"+data.uid+"");
     window.alert("Camera deleted successfully");
   } catch (err) {
       
     console.log(err)
   }
 };
 export const DeleteAlert = async (data) => {

  try {
    const res = await userRequest.delete("/alert/delAlert/"+data.aid+"");
    window.alert("Alert deleted successfully");
  } catch (err) {
      
    console.log(err)
  }
};
export const DeleteService = async (data) => {

  try {
    const res = await userRequest.delete("/service/delService/"+data.sid+"");
    window.alert("Service deleted successfully");
  } catch (err) {
      
    console.log(err)
  }
};