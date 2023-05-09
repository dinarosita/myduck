import { useCallback } from "react";

export default function useActionMenu() {
  const [showActionMenu, setShowActionMenu] = useState(false)
  const bind = useLongPress(toggleActionMenu)
  const handleActionMenu

  function toggleActionMenu(e) {
    if (e) {
      e.preventDefault();
    }
    setShowActionMenu(prev => !prev)
  }

}