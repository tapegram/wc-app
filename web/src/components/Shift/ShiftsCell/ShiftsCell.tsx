import type { FindShifts } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Shifts from 'src/components/Shift/Shifts'

export const QUERY = gql`
  query FindShifts {
    shifts {
      id
      name
      locationId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No shifts yet. '}
      <Link
        to={routes.newShift()}
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

export const Success = ({ shifts }: CellSuccessProps<FindShifts>) => {
  return <Shifts shifts={shifts} />
}
