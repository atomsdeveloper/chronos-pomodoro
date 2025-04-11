// import { useState } from 'react';
import { useRef } from 'react';

// Styles
import styles from './sytles.module.css';

// Icons
import { PlayCircleIcon } from 'lucide-react';

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
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
  const { state, setState } = useTaskContext();

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

    if (!taskRef.current) return;
    const task = taskRef.current.value.trim();

    if (!task) {
      alert('É preciso preencher o campo task.');
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

    const secondsRemaining = taskToAdd.duration * 60;

    // Setando o objeto dentro de state.
    setState(prevState => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, taskToAdd],
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        activeTask: taskToAdd,
        currentCycle: nextCycle,
        config: {
          ...prevState.config,
        },
      };
    });
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
          // value={taskValue}
          // onChange={event => setTaskValue(event.target.value)}
        />
      </div>

      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className={styles.formRow}>
        <Cycles />
      </div>

      <div className={styles.formRow}>
        <Button type='button' icon={<PlayCircleIcon />} color='green' />
        {/* <Button icon={<StopCircleIcon />} color='red' /> */}
      </div>
    </form>
  );
}
