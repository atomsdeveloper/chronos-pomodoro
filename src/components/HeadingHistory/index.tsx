import { useEffect } from 'react';

import { Button } from '../Button';
import { Container } from '../Container';
import { Heading } from '../Heading';

import { TrashIcon } from 'lucide-react';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { TaskActionType } from '../../contexts/TaskContext/taskAction';
import { checkHasTasks } from '../../contexts/TaskContext/checkHasTasks';

import { showMessages } from '../../adapters/showMessages';

export function HeadingHistory() {
  const { state, dispatch } = useTaskContext();
  const hasTasks = checkHasTasks(state); // Checa se tem task

  // Remover 'toast' ao sair do componente com com 'componentUnmount'
  useEffect(() => {
    return () => {
      showMessages.dismiss();
    };
  }, []);

  function handleResetTasks() {
    showMessages.dismiss();

    showMessages.confirm('Tem certeza', confirm => {
      if (confirm) dispatch({ type: TaskActionType.RESET_STATE });
    });
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
              onClick={() => handleResetTasks()}
            />
          </span>
        )}
      </div>
    </Container>
  );
}
