export function formatDate(timestamp) {
  const date = new Date(timestamp.seconds * 1000).toDateString();
  return `${date}`;
}

export function formatDateTime(timestamp) {
  const date = new Date(timestamp.seconds * 1000);
  return `${date.toDateString()} at ${date.toLocaleTimeString()}`;
}
