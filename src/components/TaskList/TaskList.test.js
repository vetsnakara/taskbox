import React from 'react'

import Enzyme, { mount } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import { WithPinnedTasks } from './TaskList.stories'

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

it('should pinned tasks at the start of the list', () => {
  const taskList = mount(<WithPinnedTasks/>)
  const firstTask = taskList.find('.list-item').first()
  expect(firstTask.hasClass('TASK_PINNED')).toBe(true)
})
