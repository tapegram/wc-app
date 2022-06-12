import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Worker/WorkersCell'

const DELETE_WORKER_MUTATION = gql`
  mutation DeleteWorkerMutation($id: Int!) {
    deleteWorker(id: $id) {
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

const WorkersList = ({ workers }) => {
  const [deleteWorker] = useMutation(DELETE_WORKER_MUTATION, {
    onCompleted: () => {
      toast.success('Worker deleted')
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
    if (confirm('Are you sure you want to delete worker ' + id + '?')) {
      deleteWorker({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address id</th>
            <th>Job type</th>
            <th>Employment status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((worker) => (
            <tr key={worker.id}>
              <td>{truncate(worker.id)}</td>
              <td>{truncate(worker.firstName)}</td>
              <td>{truncate(worker.lastName)}</td>
              <td>{truncate(worker.phone)}</td>
              <td>{truncate(worker.email)}</td>
              <td>{truncate(worker.addressId)}</td>
              <td>{truncate(worker.jobType)}</td>
              <td>{truncate(worker.employmentStatus)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.worker({ id: worker.id })}
                    title={'Show worker ' + worker.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editWorker({ id: worker.id })}
                    title={'Edit worker ' + worker.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete worker ' + worker.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(worker.id)}
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

export default WorkersList
