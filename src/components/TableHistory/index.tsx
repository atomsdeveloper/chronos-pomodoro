import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import styles from './styles.module.css';

export function TableHistory() {
  const { state } = useTaskContext();

  return (
    <section className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Tempo</th>
            <th>Data</th>
            <th>Status</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {state.tasks.map(task => {
            return (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.duration}min</td>
                <td>{formatDate(task.startDate)}</td>
                <td>{task.interruptDate}</td>
                <td>{task.type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
