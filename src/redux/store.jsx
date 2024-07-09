import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlicer'
import userReducer from './userSlice'

export const store=configureStore({
    reducer:{
        todo:todoReducer,
        user:userReducer
    }

})