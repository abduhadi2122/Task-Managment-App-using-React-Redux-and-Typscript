import * as React from 'react'
import { FormEvent } from 'react';
import './Styles.css'

interface Props {
  handleSubmit: (value: string) => void
}
interface State {
  value: string
}

export default class AddTaskForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { value: '' } 
    this.updateValue = this.updateValue.bind(this)
    this.addbuttonClicked = this.addbuttonClicked.bind(this)
  }

  updateValue(value: string) {
    this.setState({ value })
  }

  addbuttonClicked(e: FormEvent<any>) {
    e.preventDefault()
    if (!this.state.value.trim()) {
      return
    }

    this.props.handleSubmit(this.state.value)
    this.setState({ value: '' })

  }

  render() {
    const { value } = this.state
    const { updateValue, addbuttonClicked } = this
    return (
      <div className="form">
        <form onSubmit={addbuttonClicked}>
          <input placeholder="Enter Task" type="text" value={value} onChange={e => updateValue(e.target.value)} />
          <button type="submit">Add</button>
        </form>
      </div>  
    )
  }
}