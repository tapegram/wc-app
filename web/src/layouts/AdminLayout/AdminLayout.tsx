import { Link, routes } from '@redwoodjs/router'
import DropDownMenu from 'src/components/DropDownMenu/DropDownMenu'
import Navbar from 'src/components/Navbar'
type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <>
      {/* Here we put the navbar component from components/navbar/navbar */}
      <Navbar />
      {/* <DropDownMenu
          items={[
            { label: 'Add a worker', link: routes.newWorker() },
            { label: 'Add a Location', link: routes.newLocation() },
            { label: 'Add a Shift', link: routes.newShift() },
            { label: 'Add a worksite', link: routes.newWorksite() },
            {
              label: 'Add a shift assignment',
              link: routes.newShiftAssignment(),
            },
          ]}
        /> */}
      {/* And the children */}
      <main>{children}</main>
      <header>
          <nav>
            <ul className="navbar">
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
              <li>
                <Link to={routes.newTag()}>
                    Add a Tag
                </Link>
              </li>
              <li>
                <Link to={routes.newTagLink()}>
                    Add a Tag Link
                </Link>
              </li>
            </ul>
          </nav>
        </header>
    </>
  )
}

export default AdminLayout
