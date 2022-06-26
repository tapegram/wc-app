import { render } from '@redwoodjs/testing/web'

import DropDownMenu from './DropDownMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DropDownMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DropDownMenu />)
    }).not.toThrow()
  })
})
