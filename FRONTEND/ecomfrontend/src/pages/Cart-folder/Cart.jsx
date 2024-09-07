import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../../components/cartItem-folder/CartItem'
import styles from './Cart.module.css'
function Cart() {

  const status = useSelector((state) => state.cart.status);
  console.log(status)

  const currentCartItems = useSelector((state) => state.cart.cartArr)
  console.log("length of arr", currentCartItems)






  return (
    <div className={styles.cart}>
      <div className={styles.cartContainer}>

      <div className={styles.cartTable}>
  {/* Heading Bar */}


{ currentCartItems.length > 0 ?
<>
<div className={styles.cartHeader}>
    <div className={styles.headerItem}>Product</div>
    <div className={styles.headerItem}>Description</div> {/* New Column */}
    <div className={styles.headerItem}>Quantity</div>
    <div className={styles.headerItem}>Price</div>
    <div className={styles.headerItem}>Total</div>
    <div className={styles.headerItem}></div>
  </div>


{ currentCartItems.map((item)=> <CartItem key={item.id} imagePath={item.imagePath} description={item.description.split(" ").slice(0 , 2) } quantity={2} price={"10.02"} />)}


<CartItem imagePath={'p_img1.png'} description={'shirt'} quantity={2} price={"10.02"} />

</>
   :
   <>
   <p className={styles.cartTablePara} >The cart is empty , pls add items </p>
   <Link to='/collection' ><button className={styles.cartTablebutton} >add items &larr;</button></Link>

</>

}


  </div>
</div>


      </div>

  )
}

export default Cart
