import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();

  // Pegando o próximo ciclo.
  const nextCycle = getNextCycle(state.currentCycle);
  // Pegando o tipo do próximo ciclo.
  const nextCycleType = getNextCycleType(nextCycle);

  // Tips
  // Tips para Tasks ativas.
  const tipsActiveTask = {
    workCycle: (
      <span>
        {' '}
        Foque por <b>{state.config?.workCycle}min</b>
      </span>
    ),
    breakShortCycle: (
      <span>
        {' '}
        Descanse por <b>{state.config.breakShortCycle}min</b>
      </span>
    ),
    breakLongCycle: <span> Descanso Longo</span>,
  };

  // Tips para Task não ativa, mostrando o próximo ciclo.
  const tipsNoActiveTask = {
    workCycle: (
      <span>
        {' '}
        Próximo ciclo é de <b>{state.config.workCycle}min</b>
      </span>
    ),
    breakShortCycle: (
      <span>
        {' '}
        Próximo ciclo é descanso de <b> {state.config.breakShortCycle}min</b>
      </span>
    ),
    breakLongCycle: <span> Próximo descanso será Longo</span>,
  };

  return (
    <>
      {!!state.activeTask && tipsActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsNoActiveTask[nextCycleType]}
    </>
  );
}
