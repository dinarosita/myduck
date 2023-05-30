export function determineMainActiveId(chats, anyActive) {
  if (!chats.some(chat => !chat.archived)) {
    localStorage.setItem("persistedId", null);
    return null;
  }
  const storedId = localStorage.getItem("persistedId") || null;
  if (!storedId) return getLastActiveId(chats, anyActive);

  const isStoredIdValid = validateActiveId(chats, storedId);
  return isStoredIdValid ? storedId : getLastActiveId(chats, anyActive);
}

export function getLastActiveId(chats, anyActive) {
  if (!anyActive) return null;
  return chats.find((chat) => !chat.archived).id;
}

export function getLastArchivedId(chats, anyArchived) {
  if (!anyArchived) return null;
  return chats.find((chat) => chat.archived).id;
}

export function validateActiveId(chats, storedId) {
  return chats.some((chat) => chat.id === storedId && !chat.archived);
}
