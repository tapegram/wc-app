import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type AddressLayoutProps = {
  children: React.ReactNode
}

const AddressesLayout = ({ children }: AddressLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.addresses()} className="rw-link">
            Addresses
          </Link>
        </h1>
        <Link to={routes.newAddress()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Address
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default AddressesLayout
