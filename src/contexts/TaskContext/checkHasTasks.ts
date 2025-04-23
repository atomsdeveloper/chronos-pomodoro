import { TaskStateModel } from '../../models/TaskStateModel';

export function checkHasTasks({
  tasks,
}: Pick<TaskStateModel, 'tasks'>): boolean {
  return tasks.length > 0 ? true : false;
}
