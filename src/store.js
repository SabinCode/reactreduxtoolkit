import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import productReducer from './features/product/productSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
})


//fetures and store exits but they need to work together. so we import counterReducer here.
//in our store we have a counter reducer.