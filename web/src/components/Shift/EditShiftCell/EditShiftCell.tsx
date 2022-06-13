import type { EditShiftById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import ShiftForm from 'src/components/Shift/ShiftForm'

export const QUERY = gql`
  query EditShiftById($id: Int!) {
    shift: shift(id: $id) {
      id
      name
      locationId
    }
  }
`
const UPDATE_SHIFT_MUTATION = gql`
  mutation UpdateShiftMutation($id: Int!, $input: UpdateShiftInput!) {
    updateShift(id: $id, input: $input) {
      id
      name
      locationId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ shift }: CellSuccessProps<EditShiftById>) => {
  const [updateShift, { loading, error }] = useMutation(UPDATE_SHIFT_MUTATION, {
    onCompleted: () => {
      toast.success('Shift updated')
      navigate(routes.shifts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { locationId: parseInt(input.locationId), })
    updateShift({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Shift {shift.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ShiftForm shift={shift} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
