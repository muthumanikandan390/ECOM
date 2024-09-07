
import Cards from '../../components/cards-folder/Cards'
import styles from './Collection.module.css'
import { useEffect } from 'react';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import { toggleStatus , addItems} from '../../store/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';


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

// if (data) {
// console.log(data[0].imagePath);
// console.log(data[0].description);
// console.log(data[0].productPrice);
// console.log(data[0].id);
// console.log(data[0]);
// }


const dispatch = useDispatch();


const handleAddToCart = (card) => {

  toggleStatus
  dispatch(addItems(card))
};




  return (

    <div className={styles.collection}>


{data && data.length > 0 ? data.map((card)=> <Cards key={card.id}
          img={card.imagePath}
          description={card.description}
          price={card.productPrice}
          handleAddToCart={()=>handleAddToCart(card)}

        /> )

       : (
        'loading ... '
      )}


    </div>
  )
}

export default Collection
