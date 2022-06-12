import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Address/AddressesCell'

const DELETE_ADDRESS_MUTATION = gql`
  mutation DeleteAddressMutation($id: Int!) {
    deleteAddress(id: $id) {
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

const AddressesList = ({ addresses }) => {
  const [deleteAddress] = useMutation(DELETE_ADDRESS_MUTATION, {
    onCompleted: () => {
      toast.success('Address deleted')
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
    if (confirm('Are you sure you want to delete address ' + id + '?')) {
      deleteAddress({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First line</th>
            <th>Second line</th>
            <th>City</th>
            <th>State</th>
            <th>Postal</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((address) => (
            <tr key={address.id}>
              <td>{truncate(address.id)}</td>
              <td>{truncate(address.firstLine)}</td>
              <td>{truncate(address.secondLine)}</td>
              <td>{truncate(address.city)}</td>
              <td>{truncate(address.state)}</td>
              <td>{truncate(address.postal)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.address({ id: address.id })}
                    title={'Show address ' + address.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAddress({ id: address.id })}
                    title={'Edit address ' + address.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete address ' + address.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(address.id)}
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

export default AddressesList
