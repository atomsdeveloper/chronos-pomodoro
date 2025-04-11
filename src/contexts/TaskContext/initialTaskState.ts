import { TaskStateModel } from '../../models/TaskStateModel';

export const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '',
  activeTask: null,
  currentCycle: 0,
  config: {
    workCycle: 25,
    breakShortCycle: 3,
    breakLongCycle: 10,
  },
};
