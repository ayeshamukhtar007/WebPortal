import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "alert",
  initialState: {
    selectCamera:'',
    isFetching: false,
    error: false,
    CameraAlerts:[]
  },
  reducers: {
   
    GetAllAlerts: (state, action) => {
      state.isFetching = false;
      state.CameraAlerts = action.payload;
     
    },
    SetSelection:(state,action)=>{
      state.isFetching = false;
      state.selectCamera = action.payload;
    }
  }
});


export const {GetAllAlerts,SetSelection} = userSlice.actions;
export default userSlice.reducer;
