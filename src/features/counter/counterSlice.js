import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number: 0,
    firstName: "John",
    lastName: "Doe",
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: (state) => {
            // console.log("Action:", action)
            state.number += 1
        },

        decrease:(state) => {
            state.number -= 1
        },

        increaseByOwnNumber: (state, action) => {
            //console.log(action.payload)
            const number = action.payload
            state.number += number
        }
        
    },
})


export default counterSlice.reducer
export const {increase, decrease, increaseByOwnNumber} = counterSlice.actions


//action ko value payload ma aaucha bydefault. action.payload
//dispatch hook expect action to be pass.
//above we r passing increase, decrease action to dispatch.