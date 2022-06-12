export const schema = gql`
  type Address {
    id: Int!
    firstLine: String!
    secondLine: String
    city: String!
    state: String!
    postal: String!
    worker: Worker
  }

  type Query {
    addresses: [Address!]! @requireAuth
    address(id: Int!): Address @requireAuth
  }

  input CreateAddressInput {
    firstLine: String!
    secondLine: String
    city: String!
    state: String!
    postal: String!
  }

  input UpdateAddressInput {
    firstLine: String
    secondLine: String
    city: String
    state: String
    postal: String
  }

  type Mutation {
    createAddress(input: CreateAddressInput!): Address! @requireAuth
    updateAddress(id: Int!, input: UpdateAddressInput!): Address! @requireAuth
    deleteAddress(id: Int!): Address! @requireAuth
  }
`
