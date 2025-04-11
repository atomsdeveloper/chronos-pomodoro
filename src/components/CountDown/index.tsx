import styles from './styles.module.css';

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function CountDown() {
  const { state } = useTaskContext();

  return (
    <div className={styles.countContainer}>
      {state.formattedSecondsRemaining}
    </div>
  );
}
