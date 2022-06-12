import type { FindAddressById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Address from 'src/components/Address/Address'

export const QUERY = gql`
  query FindAddressById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Address not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ address }: CellSuccessProps<FindAddressById>) => {
  return <Address address={address} />
}
