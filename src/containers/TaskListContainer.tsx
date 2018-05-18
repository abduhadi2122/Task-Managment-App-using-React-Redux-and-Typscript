import { connect } from 'react-redux'
import { State } from '../reducers'
import { getTasks } from '../selectors/tasks'
import { toggleTask } from '../actions/taskListAction'
import TasksList from '../components/TasksList'

const mapStateToProps = (state: State) => ({
  tasks: getTasks(state)
})

const mapDispatchToProps = {
  onTaskClicked: toggleTask
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(TasksList)