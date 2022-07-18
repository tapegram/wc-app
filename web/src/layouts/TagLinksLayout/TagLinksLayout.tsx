import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type TagLinkLayoutProps = {
  children: React.ReactNode
}

const TagLinksLayout = ({ children }: TagLinkLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.tagLinks()}
            className="rw-link"
          >
            TagLinks
          </Link>
        </h1>
        <Link
          to={routes.newTagLink()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New TagLink
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default TagLinksLayout
