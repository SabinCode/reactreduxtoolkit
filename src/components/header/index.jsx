import shopping from '../../assets/6011.jpg'
import './header.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { calculateTotalAmount, calculateTotalPrice } from '../../features/product/productSlice'




function Header() {
    //const cart = useSelector((store)=>store.product.cart)
    //console.log("🚀 ~ Header ~ cart:", cart)//product cart
    

    const {totalAmount, cart, totalPrice } = useSelector((store) => store.product)
    //console.log("🚀 ~ Header ~ totalAmount:", totalAmount)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(calculateTotalAmount())
        dispatch(calculateTotalPrice())
    }, [dispatch, cart])
    
    return (
        <header className="header">
            <h1>My Store </h1>
            <nav className="navbar">
                <ul>
                    <li>HOme</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
            </nav>
            <span>Total Price: {totalPrice.toFixed(2)}</span>
            <div className="icon-container">
                <img src={shopping} alt="shopping icon"  />

                {totalAmount > 0 &&
                <span className="total-items">{totalAmount}</span>
}
            </div>
        </header>
    )
}

export default Header