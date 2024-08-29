import {assets} from '../../assets/assets'
import styles from './navBar.module.css'

function NavBar() {
  return (
    <header >
      <nav>
        <div className={styles.navContainer}>
        <div className={styles.imgContainer}>
        <img className={styles.navImage} src={assets.logo}></img>
        </div>
        <div className={styles.navLinkContainer} >
        <ul className={styles.navUl}>
          <a href='#'>
            <h1> HOME </h1>
          </a>
          <a href='#'>
            <h1> COLLECTION </h1>
          </a>
          <a href='#'>
            <h1> ABOUT </h1>
          </a>
          <a href='#'>
            <h1> CONTACT </h1>
          </a>
        </ul>
        </div>
        <div className={styles.featuresContainer}>
        <img className={styles.cartImg} src={assets.search_icon}></img>
        <img className={styles.cartImg} src={assets.profile_icon}></img>
        <div className={styles.badgeContainer}>
        <img className={styles.cartImg} src={assets.cart_icon}></img>
        <p className={styles.badge}>0</p>
        </div>

        </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
