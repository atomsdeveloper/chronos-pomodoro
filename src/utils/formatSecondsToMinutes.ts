export function formatSecondsToMinutes(seconds: number): string {
  // Formatando o valor dos minutos.
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  // Formatando o valor dos segundos.
  const secondsMod = String(Math.floor(seconds % 60)).padStart(2, '0');
  return `${minutes}:${secondsMod}`;
}
