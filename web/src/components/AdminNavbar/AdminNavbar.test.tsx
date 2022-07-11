import { render } from '@redwoodjs/testing/web'

import AdminNavbar from './AdminNavbar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AdminNavbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminNavbar />)
    }).not.toThrow()
  })
})
