import { Link, routes } from '@redwoodjs/router'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <>
      <div className="container">
        <header>
          <h1 className="header">
            <Link to={routes.home()}>Redwood WC App</Link>
          </h1>
          <nav>
            <ul className="navbar">
              <li>
                <Link to={routes.home()}>WallChart</Link>
              </li>
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
      </div>
    </>
  )
}

export default AdminLayout
