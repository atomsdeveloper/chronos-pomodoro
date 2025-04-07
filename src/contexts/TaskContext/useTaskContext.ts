import { useContext } from 'react';
import { TaskContext } from './TaskContext';

// Hook personalizado.
export function useTaskContext() {
  return useContext(TaskContext);
}
