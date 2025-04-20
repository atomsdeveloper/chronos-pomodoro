import { useEffect, useReducer, useRef } from 'react';

// Context and Reducer
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimeWorkerManager } from '../../workers/TimeWorkerManager';
import { TaskActionType } from './taskAction';
import { loadBeep } from '../../utils/loadBeep';
import { TaskStateModel } from '../../models/TaskStateModel';

type TaskContextProviderTypes = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderTypes) {
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

  // Função 'lazy initializer' para pegar o 'state' de dentro do 'localStorage' que está sempre atualizado.
  // Atualizar somente os dados do 'count'.
  // Afinal as tasks já realizadas devem permanecer como um tipo de histórico.
  const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
    const localStorageState = localStorage.getItem('state');

    if (localStorageState === null) return initialTaskState;

    const localStorageStateParsed: TaskStateModel =
      JSON.parse(localStorageState);

    return {
      ...localStorageStateParsed,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: '00:00',
    };
  });

  // Iniciando a instancia do Worker.
  const worker = TimeWorkerManager.getInstance();

  // Escuta mensagens enviadas do worker e recebendo o dados em 'event.data'.
  worker.onmessage(event => {
    const CountDownSeconds = event.data;

    // Verifica se a contagem feita dentro do Worker chegou a zero e termina caso contrário atualiza o estado com a contagem.
    if (CountDownSeconds <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current();
        playBeepRef.current = null;
      }

      dispatch({ type: TaskActionType.COMPLETE_TASK }); // Completa a tarefa ao terminar.

      worker.terminate();
    } else {
      dispatch({
        type: TaskActionType.COUNT_DOWN,
        payload: { secondsRemmaning: CountDownSeconds },
      });
    }
  });

  // Emitir resultado do estado na tela sempre que o state mudar.
  useEffect(() => {
    // Adicionando no 'localStorage' o 'state' sempre atualizado.
    localStorage.setItem('state', JSON.stringify(state));

    // Adicionando o 'secondsRemainig' no title da página.
    document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`;

    // Caso não exista uma tarega ativa é encerrado o worker.
    if (!state.activeTask) {
      worker.terminate();
    }
    // Caso contrário o envio o state para dentro do worker.
    return worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
