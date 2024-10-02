import { decreaseAmount, deleteItem, increaseAmount } from '../../features/product/productSlice'
import './cart-item.css'
import { useDispatch } from 'react-redux'

function CartItem(props) {

    const dispatch = useDispatch()

    return (
        <div className="cart-item">
            <h2>{props.product.name}</h2>
            <span>{props.product.price.toFixed(2)}</span>
            <span>Amount: {props.product.amount}</span>
            <div className='buttons'>
                <button onClick={()=>dispatch(increaseAmount(props.product.id))}>Increase</button>
                <button onClick={()=>
                    {if(props.product.amount >1) {

                     dispatch(decreaseAmount(props.product.id))}
                     else{dispatch(deleteItem(props.product.id))

                    }}}>Decrease</button> 

            <button onClick={()=>dispatch(deleteItem(props.product.id))}>Delete</button> 
            </div>
        </div>
    )
}

export default CartItem
//product cart ma add garepaxi same product increaseAmount le amount add garcha sangai price pani add huncha.
//decreaseAmount garda, amount 1 vanda thorai which means 0 cha vane delete garne acion  nai else ma rakhdeko cha.
//yedi sabai product 6,7 amount vayepaani delete le delete huncha.