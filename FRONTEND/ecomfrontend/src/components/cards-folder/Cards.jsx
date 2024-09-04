import styles from './Cards.module.css'
import img1 from '../../assets/p_img1.png';
function Cards() {
  return (
    <div className={styles.cards} >
      <div className={styles.container1}>
      <img className={styles.cardImg} src={img1}></img>
        <div className={styles.container2}>

        <p>hello there hello there hello there hello there </p>
        <span> $50 </span>

        </div>
        <button className={styles.cardBtn}>add to cart</button>

      </div>

    </div>
  )
}

export default Cards
