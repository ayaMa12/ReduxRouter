import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
 
 export const FeatchData=createAsyncThunk("MyfunctionThunk",async()=>{
const response =await axios.get("https://dummyjson.com/products")
console.log("Responce :",response.data.products);
const Data=response.data.products;
return Data;
 })
 export  const DataSlice=createSlice({
name:"DataRedux",
initialState:{
  Api:[],
loading:false,
error:null
},
reducers:{
  
  
},
    extraReducers:(builder)=>{
        builder.addCase(FeatchData.pending,(state)=>{
state.loading=true
        }
        ) 
           .addCase(FeatchData.fulfilled,(state,action)=>{
state.loading=false
state.Api=action.payload
        })
        .addCase(FeatchData.rejected,(state)=>{
state.loading=false
state.error="error"
        }
        )
    }
 })
export  default DataSlice.reducer