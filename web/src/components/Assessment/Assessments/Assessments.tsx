import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Assessment/AssessmentsCell'

const DELETE_ASSESSMENT_MUTATION = gql`
  mutation DeleteAssessmentMutation($id: Int!) {
    deleteAssessment(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const AssessmentsList = ({ assessments }) => {
  const [deleteAssessment] = useMutation(DELETE_ASSESSMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Assessment deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete assessment ' + id + '?')) {
      deleteAssessment({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Rating</th>
            <th>Worker id</th>
            <th>Date</th>
            <th>Notes</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {assessments.map((assessment) => (
            <tr key={assessment.id}>
              <td>{truncate(assessment.id)}</td>
              <td>{truncate(assessment.rating)}</td>
              <td>{truncate(assessment.workerId)}</td>
              <td>{timeTag(assessment.date)}</td>
              <td>{truncate(assessment.notes)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.assessment({ id: assessment.id })}
                    title={'Show assessment ' + assessment.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAssessment({ id: assessment.id })}
                    title={'Edit assessment ' + assessment.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete assessment ' + assessment.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(assessment.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AssessmentsList
