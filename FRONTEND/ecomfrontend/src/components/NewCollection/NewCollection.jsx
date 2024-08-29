/* eslint-disable react/prop-types */
import styles from './NewCollection.module.css'
function NewCollection({sectionRef}) {
  return (
    <div  ref={sectionRef} className={styles.newCollectionContainer}>

    </div>
  )
}

export default NewCollection
