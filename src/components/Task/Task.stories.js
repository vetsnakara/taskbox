import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'

import Task from './Task'

export default {
  component: Task,
  title: 'Task',
  excludeStories: /.*Data$/,
  decorators: [withKnobs]
}

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0)
}

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
}

const veryLontTitle = Array
  .from(Array(20).keys())
  .map(() => "Very long string.").join(" ")

// Default
export const Default = () => (
  <Task
    task={object('task', {...taskData})}
    {...actionsData}
  />
)

// Long title
export const LongTitle = () => (
  <Task
    task={{
      ...taskData, 
      title: veryLontTitle, 
      state: 'TASK_ARCHIVED'
    }}
    {...actionsData}
  />
)

// Pinned task
export const Pinned = () => (
  <Task
    task={{
      ...taskData,
      state: 'TASK_PINNED'
    }}
    {...actionsData}
  />
)

// Archived task
export const Archived = () => (
  <Task
    task={{
      ...taskData,
      state: 'TASK_ARCHIVED'
    }}
    {...actionsData}
  />
)
