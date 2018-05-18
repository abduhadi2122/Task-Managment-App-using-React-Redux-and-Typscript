import { connect } from 'react-redux'
import { addTask } from '../actions/taskListAction'
import AddTaskComponent from '../components/AddTaskComponent'

export default connect<any, any, any>(null, {
  handleSubmit: addTask
})(AddTaskComponent)