import { Button } from '../Button';
import { Container } from '../Container';
import { Heading } from '../Heading';

import { TrashIcon } from 'lucide-react';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { TaskActionType } from '../../contexts/TaskContext/taskAction';
import { checkHasTasks } from '../../contexts/TaskContext/checkHasTasks';

export function HeadingHistory() {
  const { state, dispatch } = useTaskContext();
  const hasTasks = checkHasTasks(state); // Checa se tem task

  function handleResetTasks() {
    if (!confirm()) return;

    dispatch({ type: TaskActionType.RESET_STATE });
  }
  return (
    <Container>
      <div className={styles.content}>
        <Heading>Histórico</Heading>
        {hasTasks && (
          <span className={styles.container}>
            <Button
              icon={<TrashIcon />}
              color='red'
              aria-label='Apagar todo histórico'
              title='Apagar histórico'
              onClick={() => handleResetTasks}
            />
          </span>
        )}
      </div>
    </Container>
  );
}
