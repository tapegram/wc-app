import { Link, routes } from '@redwoodjs/router'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <>
      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.newWorker()}>Add a Worker</Link>
            </li>
            <li>
              <Link to={routes.newLocation()}>Add a Location</Link>
            </li>
            <li>
              <Link to={routes.newShift()}>Add a Shift</Link>
            </li>
            <li>
              <Link to={routes.newWorksite()}>Add a Worksite</Link>
            </li>
            <li>
              <Link to={routes.newShiftAssignment()}>
                Add a Shift Assignment
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default AdminLayout
