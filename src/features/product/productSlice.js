import { createSlice } from "@reduxjs/toolkit";
import Products from "../../components/products";

const initialState = {
    productsList: [ {
        
                    id: 1,
                    name: "Wireless Mouse",
                    amount: 1,
                    price:25,
                }, 
                {
                    id: 2,
                    name: "BLuetooth Headphones",
                    amount: 1,
                    price: 50,
                },
                {
                    id: 3,
                    name: "Gaming Keyword",
                    amount: 1,
                    price:75,
                },
                {
                    id: 4,
                    name: "webcam",
                    amount: 1,
                    price:80,
                }
    ],
    cart: [],
}
export const ProductSlice = createSlice({
    name : "product",
    initialState:initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log("🚀 ~ action:", action) //payload represents the obj when clicked on
            
            const newProduct = action.payload
            state.cart = [newProduct, ...state.cart] 
        },

        deleteItem: (state, action) => {
            //console.log("🚀 ~ action:", action)
            const id = action.payload
            state.cart = state.cart.filter((item) => item.id !== id)
        }
        
    

    }
})

export const {addToCart, deleteItem} = ProductSlice.actions
export default ProductSlice.reducer

//mathi productko initialState globally set garem.
//useState ko first argument ma set garda locally ma matra set huncha.

//state.cart = [newProduct, ...state.cart]
//so we are modifying our cart state adding newProduct as an array
//but our cart is already is an array which we want to update when adding newProduct,
//thatswhy we r ... spreadig it and puttting it to an array which will be our new state of cart.
