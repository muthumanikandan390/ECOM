import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../../components/cartItem-folder/CartItem'
import styles from './Cart.module.css'
function Cart() {

  const status = useSelector((state) => state.cart.status);
  console.log(status)

  return (
    <div className={styles.cart}>
      <div className={styles.cartContainer}>

      <div className={styles.cartTable}>
  {/* Heading Bar */}


{ status === true ?
<>
<div className={styles.cartHeader}>
    <div className={styles.headerItem}>Product</div>
    <div className={styles.headerItem}>Description</div> {/* New Column */}
    <div className={styles.headerItem}>Quantity</div>
    <div className={styles.headerItem}>Price</div>
    <div className={styles.headerItem}>Total</div>
    <div className={styles.headerItem}></div>
  </div>
<CartItem />
</>
   :
   <>
   <p>The cart is empty , pls add items </p>
   <Link to='/collection'><button>add items &larr;</button></Link>

</>

}







  </div>
</div>


      </div>


  )
}

export default Cart
