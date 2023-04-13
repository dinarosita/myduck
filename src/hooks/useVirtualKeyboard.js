// useVirtualKeyboardState.js
import { useState } from 'react';

function useVirtualKeyboardState() {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const handleFocus = () => {
    setIsKeyboardVisible(true);
  };

  const handleBlur = () => {
    setIsKeyboardVisible(false);
  };

  return { isKeyboardVisible, handleFocus, handleBlur };
}

export default useVirtualKeyboardState;
