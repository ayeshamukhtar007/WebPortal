import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "camera",
  initialState: {
    // alertCount:[],
    isFetching: false,
    error: false,
    cameras:[],
    ipAdddress:"",
    countCameras:0,
    unpaired:0,
    paired:0,
    state:false
  },
  reducers: {
    Start: (state) => {
      state.alertCount =null;
    },
    // CountAlert: (state, action) => {
    //   state.isFetching = false;
    //   state.alertCount = action.payload;
     
    // },
    ViewCameraData:(state,action)=>{
      state.isFetching = false;
      state.cameras = action.payload;
     
    },
    ShowCamera:(state,action)=>{
      state.isFetching = false;
      state.ipAdddress = action.payload;
      
     
    },
    ShowState:(state,action)=>{
      state.isFetching = false;
      state.state = action.payload;
      
     
    },
    CountAllCameras: (state, action) => {
      state.isFetching = false;
      state.countCameras = action.payload;
     
    },
    CountPaired:(state,action)=>{
      state.isFetching = false;
      state.paired = action.payload;
     
    },
    CountUnpaired:(state,action)=>{
      state.isFetching = false;
      state.unpaired = action.payload;
     
    }
  },
});

export const { ShowCamera,CountAlert,ViewCameraData,ShowState,Start,CountAllCameras,CountPaired,CountUnpaired} = userSlice.actions;
export default userSlice.reducer;
