import React, { useState } from 'react';
import {BsFillArrowUpSquareFill} from 'react-icons/bs';
const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return ( 
        <div className={`scroll-to-top ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
          <BsFillArrowUpSquareFill className='up' size={46}/>
       </div>
     );
}
 
export default ScrollToTopButton;