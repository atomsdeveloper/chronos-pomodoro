export function formatSecondsToMinutes(seconds: number): string {
  // Formatando o valor dos minutos.
  const minutes = String(Math.floor(seconds / 60)).padStart(0, '2');
  // Formatando o valor dos segundos.
  const secondsMod = String(Math.floor(seconds % 60)).padStart(0, '2');
  return `${minutes}:${secondsMod}`;
}
