import styles from './Footer.module.css'
import {assets} from '../../assets/assets'
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.div1}>
        <div className={styles.divImg}><h1>FOREVER Co.</h1></div>
        <div className={styles.div1p}><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
      </div>


      <div className={styles.div2}>
      <div className={styles.divImg}><h2>COMPANY</h2></div>
      <div className={styles.div1p}>
        <ul>
          <li>Home</li>
<li>About us</li>
<li>Delivery</li>
<li>Privacy policy</li>

        </ul>
      </div>
        </div>
        <div className={styles.div2}>
      <div className={styles.divImg}><h2>GET IN TOUCH</h2></div>
      <div className={styles.div1p}>
        <ul>

<li>+1-000-000-0000</li>
  <li>greatstackdev@gmail.com</li>
  <li>Instagram</li>
        </ul>
      </div>
        </div>


    </div>
  )
}

export default Footer
