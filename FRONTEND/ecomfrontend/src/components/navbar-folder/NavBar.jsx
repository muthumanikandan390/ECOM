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
            <h1> about </h1>
          </a>
          <a href='#'>
            <h1> contact </h1>
          </a>
          <a href='#'>
            <h1> cell no </h1>
          </a>
        </ul>
        </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
