// import { useState } from 'react';
import { useRef } from 'react';

// Styles
import styles from './sytles.module.css';

// Icons
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

// Components
import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';

// Types
import { TaskModel } from '../../models/TaskModel';

// Context
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

// Utils
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

// Type Actions Reducer
import { TaskActionType } from '../../contexts/TaskContext/taskAction';
import { Tips } from '../Tips';
import { showMessages } from '../../adapters/showMessages';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || '';

  // Input controlado com atualização em tempo real causando re-renderização do componente a cada interação com o input.
  // const [taskValue, setTaskValue] = useState<string>('');

  // Input não controlado com atulização do componente sem causar re-rederizações.
  const taskRef = useRef<HTMLInputElement>(null);

  // Pegando o próximo ciclo.
  const nextCycle = getNextCycle(state.currentCycle);
  // Pegando o tipo do próximo ciclo.
  const nextCycleType = getNextCycleType(nextCycle);

  // Função que cria uma nova tarefa ao enviar o formulário.
  function handleStartTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessages.dismiss();

    if (!taskRef.current) return;
    const task = taskRef.current.value.trim();

    if (!task) {
      showMessages.warn('Dígite o nome da task.');
      return;
    }

    // Task que será criada e jogada para dentro do array de Tasks no setState.
    const taskToAdd: TaskModel = {
      id: Date.now().toString(),
      name: task,
      duration: state.config[nextCycleType],
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      type: nextCycleType,
    };

    showMessages.success('A task foi iniciada.');
    // Setando o objeto dentro de state para iniciar task.
    dispatch({ type: TaskActionType.START_TASK, payload: taskToAdd });
  }

  // Setando o objeto dentro de state para parar task.
  function handleStopTask(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    event.preventDefault();
    showMessages.error('A task foi interrompida.');
    dispatch({ type: TaskActionType.INTERRUPT_TASK });
  }

  return (
    <form className={styles.formContainer} action='' onSubmit={handleStartTask}>
      <div className={styles.formRow}>
        <Input
          id='input'
          label='Task'
          type='text'
          title='Descrição da tarefa'
          ref={taskRef}
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}
          // value={taskValue}
          // onChange={event => setTaskValue(event.target.value)}
        />
      </div>

      <div className={styles.formRow}>
        <Tips />
      </div>

      {/* Mostrando os ciclos somente se existir ao menos um ciclo. */}
      {state.currentCycle > 0 && (
        <div className={styles.formRow}>
          <Cycles />
        </div>
      )}

      <div className={styles.formRow}>
        {!state.activeTask ? (
          <Button
            key='start'
            type='submit'
            icon={<PlayCircleIcon />}
            color='green'
            aria-label='Botão para Iniciar Tarefa'
            title='Iniciar Tarefa'
          />
        ) : (
          <Button
            key='stop'
            type='button'
            icon={<StopCircleIcon />}
            color='red'
            aria-label='Botão para Parar Tarefa'
            title='Parar Tarefa'
            onClick={event => handleStopTask(event)}
          />
        )}
      </div>
    </form>
  );
}
