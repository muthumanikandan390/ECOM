import { Link } from 'react-router-dom';
import Hero from '../../components/hero-folder/Hero';
import ScrollButton from '../../components/scroll-button/ScrollButton';
import NewCollection from '../../components/NewCollection/NewCollection';
import { useRef , useEffect } from 'react';



function Home() {

const newCollectionRef = useRef(null)

const scrollToSection = (elementRef) => {
  window.scrollTo({
  top: elementRef.current.offsetTop ,
  behavior: "smooth",
 });
};


  return (
    <div>
    <Hero />
    <ScrollButton scrollToSection={scrollToSection} sectionRef={newCollectionRef} />
    <NewCollection sectionRef={newCollectionRef} />
    </div>

  )
}

export default Home
