import type { FindTagById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Tag from 'src/components/Tag/Tag'

export const QUERY = gql`
  query FindTagById($id: Int!) {
    tag: tag(id: $id) {
      id
      name
      color
      shape
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Tag not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ tag }: CellSuccessProps<FindTagById>) => {
  return <Tag tag={tag} />
}
