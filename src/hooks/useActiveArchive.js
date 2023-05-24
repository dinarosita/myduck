export default function useActiveArchive() {
  function isAnyActive() {
    return allChats.some((chat) => chat.archive === false);
  }

  function isAnyActive() {
    return allChats.some((chat) => chat.archive === true);
  }
  return { isAnyActive, isAnyArchive };
}
