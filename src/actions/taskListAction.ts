import Task from '../models/TaskModel'

let nextId = 0

export enum ActionTypes {                /* Using Typscrippt enum */
  ADD_TASK = '[tasks] ADD_TASK',
  TOGGLE_STATE = '[tasks] TOGGLE_STATE'
}

/*Each Action returns a type and a payload*/
export interface AddTaskAction { type: ActionTypes.ADD_TASK, payload: { task: Task } }
export interface ToggleStateAction { type: ActionTypes.TOGGLE_STATE, payload: { taskId: number } }

export function addTask(name: string): AddTaskAction {

  return {
    type: ActionTypes.ADD_TASK,
    payload: {
      task: {
        id: nextId++,
        name: name,
        done: false
      }
    }
  }
}

export function toggleTask(taskId: number): ToggleStateAction {
  return { type: ActionTypes.TOGGLE_STATE, payload: { taskId } } 
}

export type Action = AddTaskAction | ToggleStateAction