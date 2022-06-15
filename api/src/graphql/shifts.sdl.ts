export const schema = gql`
  type Shift {
    id: Int!
    name: String!
    locationId: Int!
    location: Location!
    workers: [ShiftAssignment]!
  }

  type Query {
    shifts: [Shift!]! @requireAuth
    shift(id: Int!): Shift @requireAuth
  }

  input CreateShiftInput {
    name: String!
    locationId: Int!
  }

  input UpdateShiftInput {
    name: String
    locationId: Int
  }

  type Mutation {
    createShift(input: CreateShiftInput!): Shift! @requireAuth
    updateShift(id: Int!, input: UpdateShiftInput!): Shift! @requireAuth
    deleteShift(id: Int!): Shift! @requireAuth
  }
`
