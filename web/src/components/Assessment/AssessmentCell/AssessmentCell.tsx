import type { FindAssessmentById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Assessment from 'src/components/Assessment/Assessment'

export const QUERY = gql`
  query FindAssessmentById($id: Int!) {
    assessment: assessment(id: $id) {
      id
      rating
      workerId
      date
      notes
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Assessment not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ assessment }: CellSuccessProps<FindAssessmentById>) => {
  return <Assessment assessment={assessment} />
}
