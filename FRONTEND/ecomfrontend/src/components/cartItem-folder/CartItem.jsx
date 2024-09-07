/* eslint-disable react/prop-types */
import styles from './CartItem.module.css'

function CartItem({imagePath , description , quantity , price }) {

  const convertedPrice = parseFloat(price)

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
      <div className={styles.itemTotal}><button>delete</button></div>
    </div>
    </div>
  )
}

export default CartItem
