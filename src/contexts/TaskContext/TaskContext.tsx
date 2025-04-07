import { createContext } from 'react';
import { TaskStateModel } from '../../models/TaskStateModel';
import { initialState } from './initialTaskState';

// Tipagem de state e setState para serem recebidos no provider do context.
type TaskContextTypes = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  state: initialState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextTypes>(initialContextValue);
