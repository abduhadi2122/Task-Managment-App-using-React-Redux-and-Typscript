import * as React from 'react';
import * as ReactDOM from 'react-dom'
import TaskApp from './components/TaskApp'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'

ReactDOM.render(
  /* We are using provider to make the store available to all the container components*/
  <Provider store={store}>
    <TaskApp />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker()
