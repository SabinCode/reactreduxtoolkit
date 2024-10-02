import { createSlice } from "@reduxjs/toolkit";
import Products from "../../components/products";
import { productsList } from "../../productsList";

const initialState = {
    productsList:productsList,
    cart: [],
    totalAmount: 0,
    totalPrice: 0
}
export const ProductSlice = createSlice({
    name : "product",
    initialState:initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log("🚀 ~ action:", action) //payload represents the obj when clicked on
            
            const newProduct = action.payload
            //So if items index -1 does not exit(which is newProduct) , add it to the cart.
            //ELSE (if it exits) we add the ammount ++ (increase the ammount )
            const index = state.cart.findIndex((item)=>item.id ===newProduct.id)
            if(index === -1) {
                state.cart = [newProduct, ...state.cart] 
            } else {
                state.cart[index].amount++
            }
            
        },

        deleteItem: (state, action) => {
            //console.log("🚀 ~ action:", action)
            const id = action.payload
            state.cart = state.cart.filter((item) => item.id !== id)
        },

        calculateTotalAmount : (state) => {
            state.totalAmount = state.cart.reduce((totalAmount, currItem)=> {
                const {amount} = currItem
                totalAmount += amount
                return totalAmount
            }, 0)

        },

        calculateTotalPrice:(state) => {
            state.totalPrice = state.cart.reduce((totalPrice , currItem) => {
                const  {price, amount} = currItem
                const totalItemPrice = amount * price
                totalPrice += totalItemPrice
                return totalPrice
            }, 0)
        }, 

        increaseAmount:(state, action) => {
            //console.log(action.payload)
            const id = action.payload
            const index = state.cart.findIndex((item)=> item.id === id)

            state.cart[index].amount++
        },

        decreaseAmount: (state, action) => {
               //console.log(action.payload)
            const id = action.payload
            const index = state.cart.findIndex((item)=> item.id === id)
   
            state.cart[index].amount--
        },
        
    

    }
})

export const {addToCart, deleteItem, calculateTotalAmount, calculateTotalPrice, increaseAmount, decreaseAmount} = ProductSlice.actions
export default ProductSlice.reducer

//mathi productko initialState globally set garem.
//useState ko first argument ma set garda locally ma matra set huncha.

//state.cart = [newProduct, ...state.cart]
//so we are modifying our cart state adding newProduct as an array
//but our cart is already is an array which we want to update when adding newProduct,
//thatswhy we r ... spreadig it and puttting it to an array which will be our new state of cart.
