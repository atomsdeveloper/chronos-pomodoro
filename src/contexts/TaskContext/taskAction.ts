import { TaskModel } from '../../models/TaskModel';

export enum TaskActionType {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
}

// Tipagem dos types que possuem payload.
export type TaskActionModelWithPayload = {
  type: TaskActionType.START_TASK;
  payload: TaskModel;
};

// Tipagem dos types que não possuem payload.
export type TaskActionModelWithoutPayload =
  | {
      type: TaskActionType.RESET_STATE;
    }
  | {
      type: TaskActionType.INTERRUPT_TASK;
    };

export type TaskActionModel =
  | TaskActionModelWithPayload
  | TaskActionModelWithoutPayload;
