import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
    name: "bagitem",
    initialState: [],
    reducers: {
        addToBag: (state, action) => {
            state.push(action.payload)
        },
        removeTOBag :(state ,action)=>
        {
            return state.filter(item=> item.id!== action.payload)
            
        }
    },
});

export const BagSliceActions = BagSlice.actions;
export default BagSlice;
