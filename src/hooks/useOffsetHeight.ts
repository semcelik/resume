import { MutableRefObject, useEffect, useRef, useState } from 'react';

function useOffsetHeight(
  initialValue = 0 as number
): [MutableRefObject<HTMLDivElement | undefined>, number] {
  const elementRef = useRef<HTMLDivElement>();
  const [offsetHeight, setOffsetHeight] = useState<number>(initialValue);

  useEffect(() => {
    function calculateOffsetHeight() {
      if (elementRef.current) {
        setOffsetHeight(elementRef.current.offsetHeight);
      }
    }

    calculateOffsetHeight();
    window.addEventListener('resize', calculateOffsetHeight);
  }, []);

  return [elementRef, offsetHeight];
}

export default useOffsetHeight;
