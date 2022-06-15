import { render } from '@redwoodjs/testing/web'

import ShiftAssignees from './ShiftAssignees'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ShiftAssignees', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShiftAssignees />)
    }).not.toThrow()
  })
})
