/* eslint-disable react/prop-types */
import styles from './CartItem.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatus , addItems , clearCart } from '../../store/slices/cartSlice';

function CartItem({imagePath , description , quantity , price , data }) {

  const convertedPrice = parseFloat(price)

  const dispatch = useDispatch();

 function handleDelete(data) {
  dispatch(clearCart(data))
 }


  return (

<div className={styles.cartItems}>

    <div className={styles.cartItem}>
      <div className={styles.itemDetails} >
      <img src={imagePath}></img>
      </div>

      <div className={styles.itemQuantity}>{description}</div>
      <div className={styles.itemQuantity}>{quantity}</div>
      <div className={styles.itemPrice}>${convertedPrice}</div>
      <div className={styles.itemTotal}>${convertedPrice*quantity}</div>
      <div className={styles.itemTotal}><button onClick={()=>handleDelete(data)}>delete</button></div>
    </div>
    </div>
  )
}

export default CartItem
