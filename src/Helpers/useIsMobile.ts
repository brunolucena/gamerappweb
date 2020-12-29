import { useEffect, useState } from 'react';

export const MOBILE_SIZE = 767;

interface Props {
  mobileSize?: number;
}

const useIsMobile = (props?: Props) => {
  const mobileSize = props?.mobileSize ?? MOBILE_SIZE;

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowSizeChange);

    return () => window.removeEventListener('resize', handleWindowSizeChange);
  });

  return width <= mobileSize;
};

export default useIsMobile;
