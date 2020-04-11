import { createStore } from 'redux'

// action types
export const actions = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PIN_TASK: 'PIN_TASK'
}

// action creators
export const archiveTask = id => ({
  type: actions.ARCHIVE_TASK,
  id
})

export const pinTask = id => ({
  type: actions.PIN_TASK,
  id
})

// reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return changeTaskState('TASK_ARCHIVED')(state, action)
    case actions.PIN_TASK:
      return changeTaskState('TASK_PINNED')(state, action)
    default:
      return state
  }
}

// initial state
const defaultTasks = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
]

function changeTaskState(taskState) {
  return (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map(task =>
        task.id === action.id ? {...task, state: taskState} : task
      )
    }
  }
}

export default createStore(reducer, {tasks: defaultTasks},)
