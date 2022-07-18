import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/TagLink/TagLinksCell'

const DELETE_TAG_LINK_MUTATION = gql`
  mutation DeleteTagLinkMutation($id: Int!) {
    deleteTagLink(id: $id) {
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

const TagLinksList = ({ tagLinks }) => {
  const [deleteTagLink] = useMutation(DELETE_TAG_LINK_MUTATION, {
    onCompleted: () => {
      toast.success('TagLink deleted')
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
    if (confirm('Are you sure you want to delete tagLink ' + id + '?')) {
      deleteTagLink({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Worker id</th>
            <th>Tag id</th>
            <th>Date</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tagLinks.map((tagLink) => (
            <tr key={tagLink.id}>
              <td>{truncate(tagLink.id)}</td>
              <td>{truncate(tagLink.workerId)}</td>
              <td>{truncate(tagLink.tagId)}</td>
              <td>{timeTag(tagLink.date)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.tagLink({ id: tagLink.id })}
                    title={'Show tagLink ' + tagLink.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTagLink({ id: tagLink.id })}
                    title={'Edit tagLink ' + tagLink.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete tagLink ' + tagLink.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(tagLink.id)}
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

export default TagLinksList
