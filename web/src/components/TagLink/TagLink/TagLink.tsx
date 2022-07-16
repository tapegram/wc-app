import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_TAG_LINK_MUTATION = gql`
  mutation DeleteTagLinkMutation($id: Int!) {
    deleteTagLink(id: $id) {
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

const TagLink = ({ tagLink }) => {
  const [deleteTagLink] = useMutation(DELETE_TAG_LINK_MUTATION, {
    onCompleted: () => {
      toast.success('TagLink deleted')
      navigate(routes.tagLinks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete tagLink ' + id + '?')) {
      deleteTagLink({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">TagLink {tagLink.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{tagLink.id}</td>
            </tr><tr>
              <th>Worker id</th>
              <td>{tagLink.workerId}</td>
            </tr><tr>
              <th>Tag id</th>
              <td>{tagLink.tagId}</td>
            </tr><tr>
              <th>Date</th>
              <td>{timeTag(tagLink.date)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTagLink({ id: tagLink.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(tagLink.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default TagLink
