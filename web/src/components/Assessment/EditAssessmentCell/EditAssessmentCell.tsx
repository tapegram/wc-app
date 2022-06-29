import type { EditAssessmentById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import AssessmentForm from 'src/components/Assessment/AssessmentForm'

export const QUERY = gql`
  query EditAssessmentById($id: Int!) {
    assessment: assessment(id: $id) {
      id
      rating
      workerId
      date
      notes
    }
  }
`
const UPDATE_ASSESSMENT_MUTATION = gql`
  mutation UpdateAssessmentMutation($id: Int!, $input: UpdateAssessmentInput!) {
    updateAssessment(id: $id, input: $input) {
      id
      rating
      workerId
      date
      notes
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ assessment }: CellSuccessProps<EditAssessmentById>) => {
  const [updateAssessment, { loading, error }] = useMutation(UPDATE_ASSESSMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Assessment updated')
      navigate(routes.assessments())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { workerId: parseInt(input.workerId), })
    updateAssessment({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Assessment {assessment.id}</h2>
      </header>
      <div className="rw-segment-main">
        <AssessmentForm assessment={assessment} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
