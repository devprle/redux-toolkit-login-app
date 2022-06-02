import {createSlice} from "@reduxjs/toolkit"

const initialStateValue = {name: '', age: 0, email: ''}
//Slice is something that contains reducers
export const userSlice = createSlice({

    //Name of the slice
    name: "user", //Initial state of that slice in redux
    initialState: {value: initialStateValue},

    //reducer that contains action which changes state
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },

        logout: (state) => {
            state.value = initialStateValue
        }
    }
})
export const {login, logout} = userSlice.actions

export default userSlice.reducer