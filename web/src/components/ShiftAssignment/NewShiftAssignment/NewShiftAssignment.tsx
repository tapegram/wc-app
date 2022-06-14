import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ShiftAssignmentForm from 'src/components/ShiftAssignment/ShiftAssignmentForm'

const CREATE_SHIFT_ASSIGNMENT_MUTATION = gql`
  mutation CreateShiftAssignmentMutation($input: CreateShiftAssignmentInput!) {
    createShiftAssignment(input: $input) {
      id
    }
  }
`

const NewShiftAssignment = () => {
  const [createShiftAssignment, { loading, error }] = useMutation(CREATE_SHIFT_ASSIGNMENT_MUTATION, {
    onCompleted: () => {
      toast.success('ShiftAssignment created')
      navigate(routes.shiftAssignments())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { workerId: parseInt(input.workerId), shiftId: parseInt(input.shiftId), })
    createShiftAssignment({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ShiftAssignment</h2>
      </header>
      <div className="rw-segment-main">
        <ShiftAssignmentForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewShiftAssignment
