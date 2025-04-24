import { useEffect, useState } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks, SortTasksOptions } from '../../utils/sortTasks';

import styles from './styles.module.css';
import { checkHasTasks } from '../../contexts/TaskContext/checkHasTasks';

export function TableHistory() {
  const { state } = useTaskContext();
  const hasTasks = checkHasTasks(state); // Checa se tem task.

  // Estado inical da ordenação.
  const [storedTaskChoise, setStoredTaskChoise] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        direction: 'desc',
        field: 'startDate',
      };
    },
  );

  // Definindo a ordenação do estado a partir do click.
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

  // Re-renderizar este componente quando tasks mudar alterando os valores de dentro da state 'storedTaskChoise'.
  useEffect(() => {
    setStoredTaskChoise(prevState => {
      return {
        ...prevState,
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      };
    });
  }, [state.tasks]);

  return (
    <section className={styles.container}>
      {hasTasks && (
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
                onClick={() =>
                  handleStoredTaskChoiseClick({ field: 'duration' })
                }
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
              <th
                onClick={() => handleStoredTaskChoiseClick({ field: 'name' })}
              >
                Status
              </th>
              <th
                onClick={() => handleStoredTaskChoiseClick({ field: 'name' })}
              >
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
      )}

      {!hasTasks && (
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Não existem tarefas
        </p>
      )}
    </section>
  );
}
