import type { FindAddresses } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Addresses from 'src/components/Address/Addresses'

export const QUERY = gql`
  query FindAddresses {
    addresses {
      id
      firstLine
      secondLine
      city
      state
      postal
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No addresses yet. '}
      <Link
        to={routes.newAddress()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ addresses }: CellSuccessProps<FindAddresses>) => {
  return <Addresses addresses={addresses} />
}
