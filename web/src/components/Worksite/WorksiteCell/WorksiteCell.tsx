import type { FindWorksiteById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Worksite from 'src/components/Worksite/Worksite'

export const QUERY = gql`
  query FindWorksiteById($id: Int!) {
    worksite: worksite(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Worksite not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ worksite }: CellSuccessProps<FindWorksiteById>) => {
  return <Worksite worksite={worksite} />
}
