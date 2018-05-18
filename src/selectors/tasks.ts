import { State } from '../reducers'
import { createSelector } from 'reselect'

const getTasksState = ((state: State) => state.tasks)

export const getTasks = createSelector([getTasksState], s => s.tasks)