import { deleteItem } from '../../features/product/productSlice'
import './cart-item.css'
import { useDispatch } from 'react-redux'

function CartItem(props) {

    const dispatch = useDispatch()

    return (
        <div className="cart-item">
            <h2>{props.product.name}</h2>
            <span>{props.product.price.toFixed(2)}</span>
            <span>Amount: {props.product.amount}</span>
            <button onClick={()=>dispatch(deleteItem(props.product.id))}>Delete</button>
        </div>
    )
}

export default CartItem