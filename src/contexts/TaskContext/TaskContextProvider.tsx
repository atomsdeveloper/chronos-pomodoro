import { useEffect, useState } from 'react';
import { initialState } from './initialTaskState';
import { TaskContext } from './TaskContext';

type TaskContextProviderTypes = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderTypes) {
  const [state, setState] = useState(initialState);

  // Emitir resultado do estado na tela sempre que o state mudar.
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}
