import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type LocationLayoutProps = {
  children: React.ReactNode
}

const LocationsLayout = ({ children }: LocationLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.locations()} className="rw-link">
            Locations
          </Link>
        </h1>
        <Link to={routes.newLocation()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Location
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default LocationsLayout
