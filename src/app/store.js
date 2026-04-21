import { configureStore } from '@reduxjs/toolkit'
import DataReducer from '../features/DataSlice'
import DataReduxReducer from '../features/DataRedux' 
export const store = configureStore({
  reducer: {ApiData:DataReducer,
    ApiDataRedux:DataReduxReducer
  },
})