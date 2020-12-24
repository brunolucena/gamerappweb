import { useEffect, useState } from 'react';

export const MOBILE_SIZE = 767;

const useIsMobile = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange)
  });

  return width <= MOBILE_SIZE;
};

export default useIsMobile;
