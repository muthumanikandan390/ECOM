import {assets} from '../../assets/assets'
import styles from './navBar.module.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {

 const [active , setActive] = useState(false)




  return (
    <header >
      <nav>
        <div className={styles.navContainer}>
        <div className={styles.imgContainer}>
        <img className={styles.navImage} src={assets.logo}></img>
        </div>
        <div className={styles.navLinkContainer} >
        <ul className={styles.navUl}>

    <NavLink to='/'  className={({ isActive }) => isActive ? `${styles.active}` : "" }>

            <h1 > HOME </h1>
            <p className={`${styles.line} ${styles.lineDisplay}`}></p>

    </NavLink>


                  <NavLink to='collection' className={({ isActive }) => isActive ? `${styles.active}` : "" }>

                        <h1> COLLECTION </h1>

                 </NavLink>


                  <NavLink to='about' className={({ isActive }) => isActive ? `${styles.active}` : "" }>

                  <h1> ABOUT </h1>

                  </NavLink>


          <NavLink to='contact' className={({ isActive }) => isActive ? `${styles.active}` : "" }>

            <h1> CONTACT </h1>

          </NavLink>

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
