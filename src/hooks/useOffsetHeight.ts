import { MutableRefObject, useEffect, useRef, useState } from 'react';

function useOffsetHeight(
  initialValue = 0 as number
): [MutableRefObject<HTMLDivElement | undefined>, number] {
  const elementRef = useRef<HTMLDivElement>();
  const [offsetHeight, setOffsetHeight] = useState<number>(initialValue);

  useEffect(() => {
    if (elementRef.current) {
      setOffsetHeight(elementRef.current.offsetHeight);
    }
  }, []);

  return [elementRef, offsetHeight];
}

export default useOffsetHeight;
