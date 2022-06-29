import type { FindAssessments } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Assessments from 'src/components/Assessment/Assessments'

export const QUERY = gql`
  query FindAssessments {
    assessments {
      id
      rating
      workerId
      date
      notes
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No assessments yet. '}
      <Link
        to={routes.newAssessment()}
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

export const Success = ({ assessments }: CellSuccessProps<FindAssessments>) => {
  return <Assessments assessments={assessments} />
}
