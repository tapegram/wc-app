import { render } from '@redwoodjs/testing/web'

import WallchartComponent from './WallchartComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WallchartComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WallchartComponent />)
    }).not.toThrow()
  })
})
