import type { FindTagLinks } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import TagLinks from 'src/components/TagLink/TagLinks'

export const QUERY = gql`
  query FindTagLinks {
    tagLinks {
      id
      workerId
      tagId
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tagLinks yet. '}
      <Link
        to={routes.newTagLink()}
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

export const Success = ({ tagLinks }: CellSuccessProps<FindTagLinks>) => {
  return <TagLinks tagLinks={tagLinks} />
}
