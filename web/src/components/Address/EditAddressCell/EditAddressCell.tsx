import type { EditAddressById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import AddressForm from 'src/components/Address/AddressForm'

export const QUERY = gql`
  query EditAddressById($id: Int!) {
    address: address(id: $id) {
      id
      firstLine
      secondLine
      city
      state
      postal
    }
  }
`
const UPDATE_ADDRESS_MUTATION = gql`
  mutation UpdateAddressMutation($id: Int!, $input: UpdateAddressInput!) {
    updateAddress(id: $id, input: $input) {
      id
      firstLine
      secondLine
      city
      state
      postal
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ address }: CellSuccessProps<EditAddressById>) => {
  const [updateAddress, { loading, error }] = useMutation(
    UPDATE_ADDRESS_MUTATION,
    {
      onCompleted: () => {
        toast.success('Address updated')
        navigate(routes.addresses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateAddress({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Address {address.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AddressForm
          address={address}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
