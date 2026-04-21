import { createSlice } from "@reduxjs/toolkit";

 export const DataSlice=createSlice({
    name:'DataApi',
    initialState :{
        value:0,
    },
    reducers:{
        Plus:(state)=>{
         state.value+=1
        }
    }
 })
 export const {Plus}=DataSlice.actions
 export default DataSlice.reducer