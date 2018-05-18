import { combineReducers } from 'redux'
import * as fromTasks from './tasks'

/*Root state of the app*/  
export interface State {
  tasks: fromTasks.State
}

export const initialState: State = {
  tasks: fromTasks.initialState
}

/*Root Reducer*/
export const reducer = combineReducers<State>({
  tasks: fromTasks.reducer
})