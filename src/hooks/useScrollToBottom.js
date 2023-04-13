import { useEffect, useRef } from "react";

function useScrollToBottom(dependency) {
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [dependency]);

  return containerRef;
}

export default useScrollToBottom;
