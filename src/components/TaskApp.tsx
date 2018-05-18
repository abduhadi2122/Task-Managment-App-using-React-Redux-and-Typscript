import * as React from 'react'
import AddTaskContainer from '../containers/AddTaskContainer'
import TaskListContainer from '../containers/TaskListContainer'
import './Styles.css'

class TaskApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Task Managment</h1>
        <h2> Built with Rect-Redux and Typescrit.</h2>
        <AddTaskContainer />
        <TaskListContainer />
      </div>
    );
  }
}

export default TaskApp;
