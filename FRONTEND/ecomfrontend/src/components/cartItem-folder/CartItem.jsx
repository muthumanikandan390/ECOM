import styles from './CartItem.module.css'

function CartItem() {
  return (

<div className={styles.cartItems}>
    {/* Example Cart Item */}
    <div className={styles.cartItem}>
      <div className={styles.itemDetails} >
      <img src={'p_img1.png'}></img>
      </div>

      <div className={styles.itemQuantity}>shirt</div> {/* New Field */}
      <div className={styles.itemQuantity}>2</div> {/* New Field */}
      <div className={styles.itemPrice}>$10.00</div>
      <div className={styles.itemTotal}>$20.00</div>
      <div className={styles.itemTotal}><button>delete</button></div>
    </div>
    </div>
  )
}

export default CartItem
