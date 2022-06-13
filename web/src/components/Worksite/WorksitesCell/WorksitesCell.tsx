import type { FindWorksites } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Worksites from 'src/components/Worksite/Worksites'

export const QUERY = gql`
  query FindWorksites {
    worksites {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No worksites yet. '}
      <Link
        to={routes.newWorksite()}
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

export const Success = ({ worksites }: CellSuccessProps<FindWorksites>) => {
  return <Worksites worksites={worksites} />
}
