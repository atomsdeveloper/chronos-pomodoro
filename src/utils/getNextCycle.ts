// Funcão para pegar o próximo ciclo, iniciando em 1 e terminando em 8.
export function getNextCycle(cycle: number) {
  return cycle === 0 || cycle === 8 ? 1 : (cycle += 1);
}
