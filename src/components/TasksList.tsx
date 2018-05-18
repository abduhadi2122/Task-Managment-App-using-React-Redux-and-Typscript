import * as React from 'react'
import Task from '../models/TaskModel'
import './Styles.css'

interface Props {
  tasks: Task[],
  onTaskClicked: (taskId: number) => void
}
interface State { }

export default class AddTaskForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { tasks, onTaskClicked } = this.props
    return (
      <div className="task-list">
        <ul>
          {
            tasks.map(task => (
              <li key={task.id}
                onClick={() => onTaskClicked(task.id)}
                style={{ display: `${task.done ? 'none' : ''}`, cursor: 'pointer' }}>
                {task.name}
              </li>)
            )
          }
        </ul>
      </div>
    )
  }
}