import { TaskActionModel, TaskActionType } from './taskAction';
import { TaskStateModel } from '../../models/TaskStateModel';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { getNextCycle } from '../../utils/getNextCycle';
import { initialTaskState } from './initialTaskState';

export function taskReducer(
  state: TaskStateModel, // State
  action: TaskActionModel, // Model
): TaskStateModel {
  switch (action.type) {
    case TaskActionType.START_TASK: {
      const secondsRemaining = action.payload.duration * 60;
      // Pegando o próximo ciclo.
      const nextCycle = getNextCycle(state.currentCycle);

      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        activeTask: action.payload,
        currentCycle: nextCycle,
        config: {
          ...state.config,
        },
      };
    }
    case TaskActionType.INTERRUPT_TASK: {
      return {
        ...state,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        activeTask: null,
        tasks: state.tasks.map(task => {
          // Verificando se a task ativa é a mesma task que foi parada, se sim, adicionar a data que foi feita a parada da task.
          if (state.activeTask && state.activeTask?.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }

          // Caso contrário retorna a task normalmente sem alterações.
          return task;
        }),
      };
    }
    case TaskActionType.RESET_STATE: {
      return { ...initialTaskState };
    }
    // Criado com Worker para atualiza estado de contagem.
    case TaskActionType.COUNT_DOWN: {
      return {
        ...state,
        secondsRemaining: action.payload.secondsRemmaning,
        formattedSecondsRemaining: formatSecondsToMinutes(
          action.payload.secondsRemmaning,
        ),
      };
    }
    case TaskActionType.COMPLETE_TASK: {
      return {
        ...state,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        activeTask: null,
        tasks: state.tasks.map(task => {
          // Verificando se a task ativa é a mesma task que foi concluida, se sim, adicionar a data que foi feita a conclusão da task.
          if (state.activeTask && state.activeTask?.id === task.id) {
            return { ...task, completeDate: Date.now() };
          }

          // Caso contrário retorna a task normalmente sem alterações.
          return task;
        }),
      };
    }
    case TaskActionType.CONFIG_TIMER:
      {
        return {
          ...state,
          config: {
            workCycle: action.payload.workCycle,
            breakShortCycle: action.payload.breakShortCycle,
            breakLongCycle: action.payload.breakLongCycle,
          },
        };
      }

      // Sempre retornar o estado.
      return state;
  }
}
