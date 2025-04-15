import { useEffect, useReducer } from 'react';

// Context and Reducer
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimeWorkerManager } from '../../workers/TimeWorkerManager';

type TaskContextProviderTypes = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderTypes) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  // Iniciando a instancia do Worker.
  const worker = TimeWorkerManager.getInstance();

  // Escuta mensagens enviadas do worker e recebendo o dados em 'event.data'.
  worker.onmessage(event => {
    const CountDownSeconds = event.data;

    // Verifica se a contagem feita dentro do Worker chegou a zero e termina.
    if (CountDownSeconds >= 0) {
      console.log('worker completed');
      worker.terminate();
    }
  });

  // Emitir resultado do estado na tela sempre que o state mudar.
  useEffect(() => {
    console.log(state);
    // Caso não exista uma tarega ativa é encerrado o worker.
    if (!state.activeTask) {
      console.log(`Worker terminado por falta de Task ativa.`);
      worker.terminate();
    }
    // Caso contrário o envio o state para dentro do worker.
    return worker.postMessage(state);
  }, [worker, state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
