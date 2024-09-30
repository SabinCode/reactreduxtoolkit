import React from 'react'
import './App.css'
import Header from './components/header'

import Cart from './components/cart'

import Products from './components/products'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, increaseByOwnNumber } from './features/counter/counterSlice'


function App() {
  // const myNumber = useSelector((store)=> {
  //   return store.counter.number
  // })    tala onliner ma implicit return garekocha

  //useSelector we used to get data from store. And can simply return data in jsx with {myNumber}
  // const myNumber = useSelector((store)=> store.counter.number)
  // const myName = useSelector((store)=> store.counter.firstName)

  //everytime useSelector use garera single single data retrive garnu vanda.
  //const data = useSelector((store)=> store.counter) //yesari counterReducer ko sabai data store bata retrive garna sakincha.
  //aba jsx ma return garda data.number , data.firstName garna parne huncha.

  //console.log({myNumber}) //counter ma firstname and lastname and number aaucha.kina counter ma aaucha vane
  //store ma hamile name counter rakhera ma counterReducer pathako cha.
  //so mathi hamile return store.counter.number ma huncha vanne thaha payem

  //we could also object destructure
  const{ number } = useSelector((store)=>store.counter)
  //yo garda jsx ma sidai {firstName}, {number} ,{lastName} garera return garna sakincha.

  const dispatch = useDispatch()
  return (
    <>
      <Header />

      {/* <h2>Number: {myNumber}</h2>
      <h2>FirstName: {myName}</h2> */}

      {/* <h2>Number: {data.number}</h2>
      <h2>FirstName: {data.firstName}</h2>
      <h2>LastName: {data.lastName}</h2> */}

      {/* <h2>Number: {number}</h2> */}

      <div className="main-container">
        <Products />
        <Cart />
      </div>

      {/* <button onClick={()=>dispatch(increase())}>Increase</button>
      <button onClick={()=>dispatch(decrease())}>Decrease</button>
      
      <button onClick={()=>dispatch(increaseByOwnNumber(5))}>IncreaseByOwnNumber</button> */}

    </>
  )
}

export default App

