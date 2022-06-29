import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_ASSESSMENT_MUTATION = gql`
  mutation DeleteAssessmentMutation($id: Int!) {
    deleteAssessment(id: $id) {
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

const Assessment = ({ assessment }) => {
  const [deleteAssessment] = useMutation(DELETE_ASSESSMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Assessment deleted')
      navigate(routes.assessments())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete assessment ' + id + '?')) {
      deleteAssessment({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Assessment {assessment.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{assessment.id}</td>
            </tr><tr>
              <th>Rating</th>
              <td>{assessment.rating}</td>
            </tr><tr>
              <th>Worker id</th>
              <td>{assessment.workerId}</td>
            </tr><tr>
              <th>Date</th>
              <td>{timeTag(assessment.date)}</td>
            </tr><tr>
              <th>Notes</th>
              <td>{assessment.notes}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAssessment({ id: assessment.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(assessment.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Assessment
