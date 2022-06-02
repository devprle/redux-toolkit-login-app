import {createSlice} from "@reduxjs/toolkit"

//Slice is something that contains reducers
export const userSlice = createSlice({

    //Name of the slice
    name: "user", //Initial state of that slice in redux
    initialState: {value: {name: '', age: 0, email: ''}},

    //reducer that contains action which changes state
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        }
    }
})


export default userSlice.reducer