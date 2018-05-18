import Task from '../models/TaskModel'
import { ActionTypes, Action } from '../actions/taskListAction'

export interface State {
  tasks: Task[]
}

export const initialState: State = {
  tasks: [] 
}


export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {

    case ActionTypes.ADD_TASK: {
    
      const task = action.payload.task

      return {
        ...state,
        tasks: [...state.tasks, task] 
      }
    }

    case ActionTypes.TOGGLE_STATE: {
      
      const { taskId } = action.payload
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === taskId ? { ...task, done: !task.done } : task)
      }
    }

    default:
      return state
  }
}