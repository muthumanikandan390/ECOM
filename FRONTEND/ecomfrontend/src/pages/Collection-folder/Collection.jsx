import Cards from '../../components/cards-folder/Cards'
import styles from './Collection.module.css'
import { useEffect } from 'react';
function Collection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const cardArray = Array.from(Array(12));
  console.log(cardArray)
  return (
    <div className={styles.collection}>


      <Cards />
      <Cards />
      <Cards />
      <Cards />

      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />

      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />

      <Cards />
      <Cards />



    </div>
  )
}

export default Collection
