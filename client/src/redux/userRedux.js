import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    services:[],
    updateUser:null,
    atten:[]
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
     
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout:(state)=>{
      state.currentUser=null;
      // localStorage.removeItem('primary');
    },
    ViewAllServices: (state, action) => {
      state.isFetching = false;
      state.services = action.payload;
     
    },
    update: (state, action) => {
      state.isFetching = false;
       state.currentUser=action.payload;
    },
    Attendance: (state, action) => {
      state.isFetching = false;
       state.atten=action.payload;
    },
  },
});

export const {Attendance, loginStart, loginSuccess, loginFailure,logout,ViewAllServices,update} = userSlice.actions;
export default userSlice.reducer;
