export default function useActiveArchive() {

  function isAnyActive() {
    return chatList.some(chat => chat.archive === false)
  }

    function isAnyActive() {
    return chatList.some(chat => chat.archive === true)
  }
  return { isAnyActive, isAnyArchive}
}
