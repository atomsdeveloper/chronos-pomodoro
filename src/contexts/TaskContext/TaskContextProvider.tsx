import { useEffect, useReducer } from 'react';

// Context and Reducer
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';

type TaskContextProviderTypes = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderTypes) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  // Emitir resultado do estado na tela sempre que o state mudar.
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
