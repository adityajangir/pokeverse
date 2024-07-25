import { configureStore } from "@reduxjs/toolkit";
import authdetailsReducer from './slices/authdetailsSlice'



const store = configureStore({
    reducer: {
        authdetails: authdetailsReducer,
    }
})

export default store;