import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import AssessmentForm from 'src/components/Assessment/AssessmentForm'

const CREATE_ASSESSMENT_MUTATION = gql`
  mutation CreateAssessmentMutation($input: CreateAssessmentInput!) {
    createAssessment(input: $input) {
      id
    }
  }
`

const NewAssessment = () => {
  const [createAssessment, { loading, error }] = useMutation(CREATE_ASSESSMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Assessment created')
      navigate(routes.assessments())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { workerId: parseInt(input.workerId), })
    createAssessment({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Assessment</h2>
      </header>
      <div className="rw-segment-main">
        <AssessmentForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAssessment
