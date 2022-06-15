import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_SHIFT_ASSIGNMENT_MUTATION = gql`
  mutation DeleteShiftAssignmentMutation($id: Int!) {
    deleteShiftAssignment(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const ShiftAssignment = ({ shiftAssignment }) => {
  const [deleteShiftAssignment] = useMutation(DELETE_SHIFT_ASSIGNMENT_MUTATION, {
    onCompleted: () => {
      toast.success('ShiftAssignment deleted')
      navigate(routes.shiftAssignments())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete shiftAssignment ' + id + '?')) {
      deleteShiftAssignment({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">ShiftAssignment {shiftAssignment.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{shiftAssignment.id}</td>
            </tr><tr>
              <th>Worker id</th>
              <td>{shiftAssignment.workerId}</td>
            </tr><tr>
              <th>Shift id</th>
              <td>{shiftAssignment.shiftId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editShiftAssignment({ id: shiftAssignment.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(shiftAssignment.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ShiftAssignment
