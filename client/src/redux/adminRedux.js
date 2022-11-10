import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    current: null,
   
  },
  reducers: {
    
    adminlogin: (state, action) => {
      state.isFetching = false;
      state.current = action.payload;
     
    },
    
  },
});

export const {adminlogin} = adminSlice.actions;
export default adminSlice.reducer;
