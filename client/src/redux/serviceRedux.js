import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "service",
  initialState: {
    AllServices:[],
    isFetching: false,
    error: false,
    
    
  },
  reducers: {
    GetAllServices: (state, action) => {
      state.isFetching = false;
      state.AllServices = action.payload;
     
    }
  },
});

export const { GetAllServices} = userSlice.actions;
export default userSlice.reducer;
