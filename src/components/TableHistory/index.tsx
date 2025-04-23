import { useState } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks, SortTasksOptions } from '../../utils/sortTasks';

import styles from './styles.module.css';

export function TableHistory() {
  const { state } = useTaskContext();
  const [storedTaskChoise, setStoredTaskChoise] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        direction: 'desc',
        field: 'startDate',
      };
    },
  );

  function handleStoredTaskChoiseClick({
    field,
  }: Pick<SortTasksOptions, 'field'>) {
    const setDirection = storedTaskChoise.direction === 'asc' ? 'desc' : 'asc';

    setStoredTaskChoise({
      tasks: sortTasks({
        direction: setDirection,
        tasks: storedTaskChoise.tasks,
        field,
      }),
      direction: setDirection,
      field,
    });
  }

  return (
    <section className={styles.container}>
      <table>
        <thead>
          <tr>
            <th
              onClick={() => handleStoredTaskChoiseClick({ field: 'name' })}
              className={styles.thSort}
            >
              Tarefa
            </th>
            <th
              onClick={() => handleStoredTaskChoiseClick({ field: 'duration' })}
              className={styles.thSort}
            >
              Tempo
            </th>
            <th
              onClick={() =>
                handleStoredTaskChoiseClick({ field: 'startDate' })
              }
              className={styles.thSort}
            >
              Data
            </th>
            <th onClick={() => handleStoredTaskChoiseClick({ field: 'name' })}>
              Status
            </th>
            <th onClick={() => handleStoredTaskChoiseClick({ field: 'name' })}>
              Tipo
            </th>
          </tr>
        </thead>
        <tbody>
          {storedTaskChoise.tasks.map(task => {
            const taskType = {
              workCycle: 'Trabalho',
              breakShortCycle: 'Descanço Curto',
              breakLongCycle: 'Descanso Longo',
            };
            return (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.duration}min</td>
                <td>{formatDate(task.startDate)}</td>
                <td>{getTaskStatus(task, state.activeTask)}</td>
                <td>{taskType[task.type]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
