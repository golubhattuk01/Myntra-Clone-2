import { createSlice} from '@reduxjs/toolkit';
const itemSlice = createSlice({
    name : "myntraItems",
    initialState : [],
    reducers:
    {
        setItem :(state ,action)=>
        {
            return action.payload;
        }
    }
})
export const itemSliceActions = itemSlice.actions;
export default itemSlice;
