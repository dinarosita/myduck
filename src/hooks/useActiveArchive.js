export default function useActiveArchive() {
  function isAnyActive() {
    return chatCollection.some((chat) => chat.archive === false);
  }

  function isAnyActive() {
    return chatCollection.some((chat) => chat.archive === true);
  }
  return { isAnyActive, isAnyArchive };
}
