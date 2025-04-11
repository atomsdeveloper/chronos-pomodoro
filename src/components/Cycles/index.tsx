import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  // Criando um array com o comprimento de ciclos existentes.
  const cycleType = Array.from({ length: state.currentCycle }); // 8

  // Condição para o atribuir o título do ciclo de acordo com o ciclo atual.
  const nameCycleType = {
    workCycle: 'work focus',
    breakShortCycle: 'break short',
    breakLongCycle: 'break long',
  };

  return (
    <div className={styles.cyclesContainer}>
      <span>Ciclos:</span>

      <div className={styles.cyclesDots}>
        {cycleType.map((_, index) => {
          // Pegando o próximo ciclo.
          const nextCycle = getNextCycle(index);
          // Pegando o tipo do próximo ciclo.
          const nextCycleType = getNextCycleType(nextCycle);

          return (
            <span
              key={nextCycleType}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label='Marcação para o tipo de tarefa atual.'
              title={`${nameCycleType[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
