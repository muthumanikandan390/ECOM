/* eslint-disable react/prop-types */
import styles from './Cards.module.css'
import img1 from '../../assets/p_img1.png';


function Cards({img , description , price }) {
  return (
    <div className={styles.cards} >
      <div className={styles.container1}>
      <img className={styles.cardImg} src={img}></img>
        <div className={styles.container2}>

        <p>{description}</p>
        <p> PRICE : <em>${price}</em> </p>

        </div>
        <button className={styles.cardBtn}>add to cart</button>

      </div>

    </div>
  )
}

export default Cards
