import type { EditShiftAssignmentById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import ShiftAssignmentForm from 'src/components/ShiftAssignment/ShiftAssignmentForm'

export const QUERY = gql`
  query EditShiftAssignmentById($id: Int!) {
    shiftAssignment: shiftAssignment(id: $id) {
      id
      workerId
      shiftId
    }
  }
`
const UPDATE_SHIFT_ASSIGNMENT_MUTATION = gql`
  mutation UpdateShiftAssignmentMutation(
    $id: Int!
    $input: UpdateShiftAssignmentInput!
  ) {
    updateShiftAssignment(id: $id, input: $input) {
      id
      workerId
      shiftId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  shiftAssignment,
}: CellSuccessProps<EditShiftAssignmentById>) => {
  const [updateShiftAssignment, { loading, error }] = useMutation(
    UPDATE_SHIFT_ASSIGNMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('ShiftAssignment updated')
        navigate(routes.shiftAssignments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      workerId: parseInt(input.workerId),
      shiftId: parseInt(input.shiftId),
    })
    updateShiftAssignment({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ShiftAssignment {shiftAssignment.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ShiftAssignmentForm
          shiftAssignment={shiftAssignment}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
