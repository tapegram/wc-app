export const schema = gql`
  type Location {
    id: Int!
    name: String!
    shifts: [Shift]!
    worksiteId: Int!
    worksite: Worksite!
  }

  type Query {
    locations: [Location!]! @requireAuth
    location(id: Int!): Location @requireAuth
  }

  input CreateLocationInput {
    name: String!
    worksiteId: Int!
  }

  input UpdateLocationInput {
    name: String
    worksiteId: Int
  }

  type Mutation {
    createLocation(input: CreateLocationInput!): Location! @requireAuth
    updateLocation(id: Int!, input: UpdateLocationInput!): Location!
      @requireAuth
    deleteLocation(id: Int!): Location! @requireAuth
  }
`
