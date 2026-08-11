import { useRef, useEffect } from "react";

//personalized hook
export function useAutoScroll(dependencies) {
  const ref = useRef(null);
  useEffect(() => {
    const containerElem = ref.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [dependencies]);
  return ref;
}
