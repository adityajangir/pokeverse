import { createSlice } from "@reduxjs/toolkit";



const authdetailsSlice = createSlice({
    name: 'authdetails',
    initialState: {
        user: null
    },
    reducers: {
        signup: (state, action) => {
            state.user = action.payload
        },
        setLoggedin: (state, action) => {
            state.user.loggedin = action.payload.loggedin
        }
    }
})


export const {signup, setLoggedin} = authdetailsSlice.actions;
export default authdetailsSlice.reducer;