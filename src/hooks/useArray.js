import { useState } from "react";

export default function useArray(initialArray) {
  const [array, setArray] = useState(initialArray);

  function addItem(element) {
    setArray((arr) => [...arr, element]);
  }

  function editItem(id, key, value) {
    setArray((arr) => {
      return arr.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            [key]: value,
          };
        }
        return el;
      });
    });
  }

  function toggleArchived(id) {
    setArray((arr) => {
      return arr.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            archived: !el.archived,
          };
        }
        return el;
      });
    });
  }

  return { array, setArray, addItem, editItem, toggleArchived }
}

