import type { FindTagLinkById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TagLink from 'src/components/TagLink/TagLink'

export const QUERY = gql`
  query FindTagLinkById($id: Int!) {
    tagLink: tagLink(id: $id) {
      id
      workerId
      tagId
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>TagLink not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ tagLink }: CellSuccessProps<FindTagLinkById>) => {
  return <TagLink tagLink={tagLink} />
}
