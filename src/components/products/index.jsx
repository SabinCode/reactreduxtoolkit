import Product from "../product"
import { useState } from "react"
import './products.css'
import { useSelector } from "react-redux"
function Products() {
    // const [Products, setProducts] = useState([
    //     {
    //         id: 1,
    //         name: "Wireless Mouse",
    //         amount: 1,
    //         price:25,
    //     }, 
    //     {
    //         id: 2,
    //         name: "BLuetooth Headphones",
    //         amount: 1,
    //         price: 50,
    //     },
    //     {
    //         id: 3,
    //         name: "Gaming Keyword",
    //         amount: 1,
    //         price:75,
    //     },
    //     {
    //         id: 4,
    //         name: "webcam",
    //         amount: 1,
    //         price:80,
    //     }
    // ])

    //yo products lai hamile productSlice ko initialState ma lagera rakheko cha.
    //kinavane slice ko initialState ra useState ko first argument same ho.
    //global store ma useState chaidaina so, 

    const products = useSelector((store)=>store.product.productsList)

    console.log(products) //we can see the data now as an array inside productsList of product. So store.product.productsList
    //because, productSlice ko initialState ma object banayera  productsList ko array ma products chan..
    return (
        <div className="container">
            <h2>Products</h2>
            <div className="products">
                {/* {
                    Products.map((product) =>(
                        <Product key={product.id} product={product} />
                    ))
                } */}
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Products

//So now we have the data from the globalStore and rendering it with jsx using useSelector hook.