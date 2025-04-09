import { createContext } from 'react';
import { TaskStateModel } from '../../models/TaskStateModel';
import { initialState } from './initialTaskState';

// Tipagem do Taskcontext onde state e setState é objeto dentro de initialContextState passados para o provider do context.
type TaskContextTypes = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

// Valores iniciais do TaskContext
const initialContextValue = {
  state: initialState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextTypes>(initialContextValue);
