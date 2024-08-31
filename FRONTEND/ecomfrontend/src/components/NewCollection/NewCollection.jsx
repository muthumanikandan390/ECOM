/* eslint-disable react/prop-types */
import styles from './NewCollection.module.css'
import fashion from '../../assets/fashion.jpg';
import img1 from '../../assets/p_img1.png';
import img2 from '../../assets/p_img2.png';
import img3 from '../../assets/p_img3.png';
import img4 from '../../assets/p_img4.png';
import img5 from '../../assets/p_img5.png';
import img6 from '../../assets/p_img6.png';
import img7 from '../../assets/p_img7.png';
import img8 from '../../assets/p_img8.png';
import { useState } from 'react';





function NewCollection({sectionRef}) {

const [isHovered, setIsHovered] = useState(false)





  return (
    <div  ref={sectionRef} className={styles.newCollectionContainer}>
      <div className={styles.cardGridContainer} >

        <div className={styles.headingContainer}>
          <p className={styles.heading}>BEST <span>SELLERS</span></p>
        </div>
        <div className={styles.grid} >

        {/* <div className={styles.gridItem} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
          <img className={styles.gridImg} src={img8}></img>
          { isHovered && <div className={styles.zindex} ><p >hello there whats up</p></div> }
          </div> */}

        <div className={styles.gridItem}><img className={styles.gridImg} src={img8}></img>
        <div className={styles.zindex} ><p >hello there whats up</p></div>
        </div>
        <div className={styles.gridItem}><img className={styles.gridImg} src={img2}></img>
        <div className={styles.zindex} ><p >hello there whats up</p></div>
        </div>
        <div className={styles.gridItem}><img className={styles.gridImg} src={img3}></img>
        <div className={styles.zindex} ><p >hello there whats up</p></div>
        </div>
        <div className={styles.gridItem}><img className={styles.gridImg} src={img4}></img>
        <div className={styles.zindex} ><p >hello there whats up</p></div>
        </div>
        <div className={styles.gridItem}><img className={styles.gridImg} src={img5}></img>
        <div className={styles.zindex} ><p >hello there whats up</p></div>
        </div>
        <div className={styles.gridItem}><img className={styles.gridImg} src={img6}></img>
        <div className={styles.zindex} ><p >hello there whats up</p></div>
        </div>
        <div className={styles.gridItem}><img className={styles.gridImg} src={img7}></img>
        <div className={styles.zindex} ><p >hello there whats up</p></div>
        </div>
        <div className={styles.gridItem}><img className={styles.gridImg} src={img1}></img>
        <div className={styles.zindex} ><p >hello there whats up</p></div>
        </div>





        </div>

      </div>
    </div>
  )
}

export default NewCollection
