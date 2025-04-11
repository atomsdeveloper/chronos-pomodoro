export function formatSecondsToMinutes(seconds: number): string {
  const minutes = String(Math.floor(seconds / 60)).padStart(0, '2');
  const secondsMod = String(Math.floor(seconds % 60)).padStart(0, '2');
  return `${minutes}:${secondsMod}`;
}
