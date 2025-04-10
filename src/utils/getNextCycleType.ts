import { TaskModel } from '../models/TaskModel';

// Funcão para pegar o tupo próximo ciclo, usando math para saber qual é o tipo do ciclo.
export function getNextCycleType(cycleType: number): TaskModel['type'] {
  if (cycleType % 8 === 0) return 'breakLongCycle';
  if (cycleType % 8 === 2) return 'breakShortCycle';
  return 'workCycle';
}
