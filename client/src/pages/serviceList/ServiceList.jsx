import "./ServiceList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { CountServiceMonthly, CountUsersMonthly, GetServices, Viewcameras } from "../../redux/apiCalls";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ServiceList() {
  // const [data,setData]= useState(userRows);
  
  const [services,setServices]=useState([]);
  const handleDelete=(id)=>{
    setServices(services.filter((item)=> item.id!==id));
  }
useEffect(()=>{
  GetServices()
  
  .then(items=>{
    console.log(items)
    setServices(...services,items.data)
 
  })

 
  },[]);
  const columns = [
    // { field: "_id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Title",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="ServiceListUser">
            {/* <img className="ServiceListImg" src={params.row.avatar} alt="" /> */}
            {params.row.title}
          </div>
        );
      },
    },
    { field: "description", headerName: "description", width: 400 },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    // {
    //   field: "transaction",
    //   headerName: "Transaction Volume",
    //   width: 160,
    // },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/EditService" + params.row._id}>
              {/* <button className="ServiceListEdit">Edit</button> */}
              <button type="button" class="btn btn-primary">Edit</button>
            </Link>
            <DeleteOutline
              className="ServiceListDelete"
               onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="ServiceList">
      <DataGrid
        rows={services}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        // rowHeight={5}
        getRowId={(row) => row._id}
        checkboxSelection
      />
    </div>
  );
}
