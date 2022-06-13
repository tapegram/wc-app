export const schema = gql`
  type Worksite {
    id: Int!
    name: String!
    locations: [Location]!
  }

  type Query {
    worksites: [Worksite!]! @requireAuth
    worksite(id: Int!): Worksite @requireAuth
  }

  input CreateWorksiteInput {
    name: String!
  }

  input UpdateWorksiteInput {
    name: String
  }

  type Mutation {
    createWorksite(input: CreateWorksiteInput!): Worksite! @requireAuth
    updateWorksite(id: Int!, input: UpdateWorksiteInput!): Worksite!
      @requireAuth
    deleteWorksite(id: Int!): Worksite! @requireAuth
  }
`
