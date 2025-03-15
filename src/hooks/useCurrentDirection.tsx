import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScroll = window.pageYOffset;
      const direction = currentScroll > lastScroll ? 'down' : 'up';
      
      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }
      
      setLastScroll(currentScroll > 0 ? currentScroll : 0);
    };

    window.addEventListener('scroll', updateScrollDirection);
    
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection, lastScroll]);

  return scrollDirection;
};