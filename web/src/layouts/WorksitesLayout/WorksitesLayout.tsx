import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type WorksiteLayoutProps = {
  children: React.ReactNode
}

const WorksitesLayout = ({ children }: WorksiteLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.worksites()} className="rw-link">
            Worksites
          </Link>
        </h1>
        <Link to={routes.newWorksite()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Worksite
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default WorksitesLayout
