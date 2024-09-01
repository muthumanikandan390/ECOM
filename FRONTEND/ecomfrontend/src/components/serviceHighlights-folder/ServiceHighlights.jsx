import NewCollection from "../NewCollection/NewCollection"
import styles from './ServiceHighlights.module.css'
import quality_icon from '../../assets/quality_icon.png'
import support_img from '../../assets/support_img.png'
import exchange_icon from '../../assets/exchange_icon.png'

function ServiceHighlights() {
  return (
    <div className={styles.serviceHighlights}>
      <div className={styles.container}>
        <img className={styles.imgs} src={quality_icon }></img>
        <h1>Easy Exchange Policy</h1>
        <p>We offer hassle free exchange policy</p>
      </div>
      <div className={styles.container}>
        <img className={styles.imgs} src={support_img }></img>
        <h1>Easy Exchange Policy</h1>
        <p>We offer hassle free exchange policy</p>
      </div>
      <div className={styles.container}>
        <img className={styles.imgs} src={exchange_icon}></img>
        <h1>Easy Exchange Policy</h1>
        <p>We offer hassle free exchange policy</p>
      </div>

    </div>
  )
}

export default ServiceHighlights
