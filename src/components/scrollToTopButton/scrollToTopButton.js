import React, { useState, useEffect } from 'react';
import './scrollToTopButton.css';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check the scroll position and update the visibility state
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 100); // Adjust the value based on when you want the button to appear
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >

    <i className={`fa fa-angle-up arrow-icon`} style={{ color: 'white' }}></i>
    </div>
  );
};

export default ScrollToTopButton;


