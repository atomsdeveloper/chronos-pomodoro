import { createContext } from 'react';
import { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';
import { TaskActionModel } from './taskAction';

// Tipagem do Taskcontext onde state e setState é objeto dentro de initialContextState passados para o provider do context.
type TaskContextTypes = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

// Valores iniciais do TaskContext
const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextTypes>(initialContextValue);
