export default function useArray(setArray) {
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

  return { addItem, editItem, toggleArchived };
}
