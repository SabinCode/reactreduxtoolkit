
import { addToCart } from '../../features/product/productSlice'
import './product.css'
import { useDispatch } from 'react-redux'
function Product(props) {
    const dispatch = useDispatch()
    return (
        <div className="product">
            <h3>{props.product.name}</h3>
            <span>CHF {props.product.price.toFixed(2)}</span>
            <button onClick={()=>dispatch(addToCart(props.product))}>Add to cart</button>
        </div>
    )
}

export default Product