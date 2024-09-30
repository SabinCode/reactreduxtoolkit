import { useSelector } from "react-redux"
import CartItem from "../cart-item"
function Cart() {
    const shoppingCart = useSelector((store) =>store.product.cart)
    //console.log("🚀 ~ Cart ~ shoppingCart:", shoppingCart) //product.car
    return (
        <div className="container">
           <h2>Cart</h2>
           <div className="cart"></div>

           {shoppingCart.map((item) =>(
            <CartItem key={item.id} product={item}/>
           ))}
        </div>
    )
}

export default Cart
//we want to retrieve data from global store to read using useSelector