import styles from './styles.module.css';

export function TableHistory() {
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
          {Array.from({ length: 20 }).map((_, index) => {
            return (
              <tr key={index}>
                <td>Estudar</td>
                <td>25min</td>
                <td>24/01/2025 23:00</td>
                <td>Concluída</td>
                <td>Work</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
