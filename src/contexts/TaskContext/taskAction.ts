import { TaskModel } from '../../models/TaskModel';

export enum TaskActionType {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNT_DOWN = 'COUNT_DOWN',
  COMPLETE_TASK = 'COMPLETE_TASK',
  CONFIG_TIMER = 'CONFIG_TIMER',
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
    }
  | {
      type: TaskActionType.CONFIG_TIMER;
      payload: {
        workCycle: number;
        breakShortCycle: number;
        breakLongCycle: number;
      };
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
