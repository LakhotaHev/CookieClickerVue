let startTime = window.onload;

export function startTimer() {
  startTime = new Date();
}

export function getTimeOnPage() {
  if (!startTime) return "0d 0h 0m 0s";

  const diff = new Date() - startTime;
  const days = Math.floor(diff / (24 * 60 * 60 * 1000));
  const hours = Math.floor((diff / (60 * 60 * 1000)) % 24);
  const minutes = Math.floor((diff / (60 * 1000)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}