import type { FindShiftAssignments } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import ShiftAssignments from 'src/components/ShiftAssignment/ShiftAssignments'

export const QUERY = gql`
  query FindShiftAssignments {
    shiftAssignments {
      id
      workerId
      shiftId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No shiftAssignments yet. '}
      <Link
        to={routes.newShiftAssignment()}
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

export const Success = ({ shiftAssignments }: CellSuccessProps<FindShiftAssignments>) => {
  return <ShiftAssignments shiftAssignments={shiftAssignments} />
}
