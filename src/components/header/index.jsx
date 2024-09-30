import shopping from '../../assets/6011.jpg'
import './header.css'
import { useSelector } from 'react-redux'





function Header() {
    const cart = useSelector((store)=>store.product.cart)
    //console.log("🚀 ~ Header ~ cart:", cart)//product cart
    
    return (
        <header className="header">
            <h1>My Store Header</h1>
            <nav className="navbar">
                <ul>
                    <li>HOme</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
            </nav>
            <div className="icon-container">
                <img src={shopping} alt="shopping icon"  />

                {cart.length > 0 &&
                <span className="total-items">{cart.length}</span>
}
            </div>
        </header>
    )
}

export default Header