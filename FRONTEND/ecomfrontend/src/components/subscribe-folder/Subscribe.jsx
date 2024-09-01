
import styles from './Subscribe.module.css'
function Subscribe() {
  return (
    <div className={styles.subscribe}>
      <div className={styles.container1}>
        <h1>Subscribe now & get 20% off</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className={styles.container2}>
        <div><input placeholder='Enter your Email...'></input></div>
        <div><button className={styles.container2Button}>subcribe</button></div>
      </div>
    </div>
  )
}

export default Subscribe
