import type { FindShiftAssignmentById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ShiftAssignment from 'src/components/ShiftAssignment/ShiftAssignment'

export const QUERY = gql`
  query FindShiftAssignmentById($id: Int!) {
    shiftAssignment: shiftAssignment(id: $id) {
      id
      workerId
      shiftId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ShiftAssignment not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  shiftAssignment,
}: CellSuccessProps<FindShiftAssignmentById>) => {
  return <ShiftAssignment shiftAssignment={shiftAssignment} />
}
