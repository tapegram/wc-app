import type { FindShiftById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Shift from 'src/components/Shift/Shift'

export const QUERY = gql`
  query FindShiftById($id: Int!) {
    shift: shift(id: $id) {
      id
      name
      locationId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Shift not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ shift }: CellSuccessProps<FindShiftById>) => {
  return <Shift shift={shift} />
}
