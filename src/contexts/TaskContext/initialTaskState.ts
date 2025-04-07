import { TaskStateModel } from '../../models/TaskStateModel';

export const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '',
  activeTask: null,
  currentCycle: 0,
  config: {
    workCicle: 25,
    breakShortCicle: 3,
    breakLongCicle: 10,
  },
};
