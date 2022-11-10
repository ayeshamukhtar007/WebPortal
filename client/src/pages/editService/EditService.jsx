import { Link,useParams } from "react-router-dom";
import "./editservice.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useLocation } from 'react-router-dom';
import { DeleteService, editService, GetService, GetServices, serviceOverAllsubscription} from "../../redux/apiCalls";
import { useState,useEffect } from "react";
import {
  Camera,
} from "@material-ui/icons";
export default function EditService() {
  // const location = useLocation()
  // const { from } = location.state
 
  const [services,setServices]=useState([]);
  const [data,setData]=useState([]);
  const [editservice,setEditService]=useState({
    
    title:"",
    description:"",
    price:"",

})
let key,value;
const handleInputs=(e)=>{
   
      key=e.target.name;
      value=e.target.value;
      setEditService({...editservice,[key]:value});
}
const postData=async(e)=>{
  e.preventDefault();
  const {title,description,price}=editservice;

  editService({sid,title,description,price});
  alert("Update Successfully")
  window.location.reload(true);
  
  }
  var {sid } = useParams();
  useEffect(()=>{
    
    GetService(sid)
    
    .then(items=>{
      console.log(items)
      setServices(...services,items.data)
   
    })
    serviceOverAllsubscription(sid)
    
    .then(items=>{
      console.log(items)
      setData(...data,items.data)
   
    })
   
    },[]);
  return (
  
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Service</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={data} dataKey="Revenue" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
              <Camera className="CameraIcon"/>
                  <span className="productName">{services.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Title:</span>
                      <span className="productInfo">{services.title}</span>
                  </div>
                  <div className="productInfoItemDes">
                      <span className="productInfoKey">Description:</span>
                      <p className="productInfoValue">{services.description}</p>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Price:</span>
                      <span className="productInfo">Rs{services.price}</span>
                  </div>
                  {/* <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">no</span>
                  </div> */}
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
              <br></br>
                  <label>Service Name</label>
                  <input type="text"  name="title" disabled={true}
                    value={services.title} />
                  <br></br>
           
                  <br></br>
                  
                  <label >Service price</label>
                  <input type="Number"  name="price"  value={editservice.price} onChange={handleInputs} />
                  
              </div>
              <div className="productFormRight">
              <br></br>
                    <label>Service Description</label>
                    <textarea
                     name="description"
                      rows={6}
                      cols={35}
                      value={editservice.description} onChange={handleInputs}
                    />
                  <button className="productButton" onClick={postData}>Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
