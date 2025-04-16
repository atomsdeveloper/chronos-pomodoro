import { TaskModel } from '../../models/TaskModel';

export enum TaskActionType {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNT_DOWN = 'COUNT_DOWN',
  COMPLETE_TASK = 'COMPLETE_TASK',
}

// Tipagem dos types que possuem payload.
export type TaskActionModelWithPayload =
  | {
      type: TaskActionType.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionType.COUNT_DOWN;
      payload: { secondsRemmaning: number };
    };

// Tipagem dos types que não possuem payload.
export type TaskActionModelWithoutPayload =
  | {
      type: TaskActionType.RESET_STATE;
    }
  | {
      type: TaskActionType.INTERRUPT_TASK;
    }
  | {
      type: TaskActionType.COMPLETE_TASK;
    };

export type TaskActionModel =
  | TaskActionModelWithPayload
  | TaskActionModelWithoutPayload;
