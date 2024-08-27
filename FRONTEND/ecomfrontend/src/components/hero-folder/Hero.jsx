import styles from './Hero.module.css'
import fashion from '../../assets/fashion.jpg';


function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContainer1}>
        <div className={styles.heroDescription}>
          <h1 className={styles.line}></h1>
          <p> OUR BEST SELLER </p>
        <h1 className={styles.arrivals}> Latest Arrivals </h1>
        <p> SHOP NOW </p>
        <h1 className={styles.line}></h1>
        <h1 className={styles.line}></h1>
        </div>

      </div>
      <div className={styles.heroContainer2}>
      <img className={styles.heroImg} src={fashion}></img>
      </div>

    </div>
  )
}

export default Hero
