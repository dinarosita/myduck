// useVirtualKeyboard.js
import { useState, useEffect } from 'react';

function useVirtualKeyboard() {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isLandscape = window.innerWidth > window.innerHeight;
      const screenHeight = isLandscape ? screen.availWidth : screen.availHeight;
      const currentHeight = window.innerHeight;

      setIsKeyboardVisible(currentHeight < screenHeight * 0.8);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isKeyboardVisible;
}

export default useVirtualKeyboard;
