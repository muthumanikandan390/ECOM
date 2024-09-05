import Cards from '../../components/cards-folder/Cards'
import styles from './Collection.module.css'
import { useEffect } from 'react';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

function Collection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardArray = Array.from(Array(12));
  console.log(cardArray)



  const {data , error} = useQuery( {queryKey :['randomFacts'],
    queryFn: async() => {
     const res = await axios.get('http://127.0.0.1:8000/card/card-details/');
     return res.data;
   },
    }

   );

if (data) {
console.log('card datas:', data);
console.log(data[0].imagePath)
}



const description = [ 'Marks & Spencer']
const price = [50]

  return (
    <div className={styles.collection}>

      { data && <Cards img={data[0].imagePath} description={description} price = {price}/> }



    </div>
  )
}

export default Collection
