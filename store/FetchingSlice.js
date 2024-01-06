import { createSlice } from "@reduxjs/toolkit";
const FetchingSlice = createSlice({
    name : "fetching",
    initialState : "START",
    reducers:
    {
      serverFetchToggle :(state ,action)=>
      {
        return action.payload;
      }
    }      
})
export const FetchingSliceActions = FetchingSlice.actions;
export default FetchingSlice;
