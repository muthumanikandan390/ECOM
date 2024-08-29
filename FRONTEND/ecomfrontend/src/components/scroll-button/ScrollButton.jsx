/* eslint-disable react/prop-types */
import styles from './ScrollButton.module.css'

function ScrollButton({ scrollToSection, sectionRef }) {

  return (
    <div className={styles.scrollButtonContainer}>
      <button onClick={() => scrollToSection(sectionRef)} className={styles.scrollButton}>check out &darr;</button>
    </div>
  )
}

export default ScrollButton
