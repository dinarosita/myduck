import { useState } from "react"

export default function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue)

  function toggleValue(value) {
    setValue((prevValue) => typeof value === "boolean" ? value : !prevValue)
  }

  return [value, toggleValue]
}