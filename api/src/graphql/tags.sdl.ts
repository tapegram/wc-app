export const schema = gql`
  type Tag {
    id: Int!
    name: String!
    color: String!
    shape: String!
    date: DateTime!
    workers: [Worker]!
  }

  type Query {
    tags: [Tag!]! @requireAuth
    tag(id: Int!): Tag @requireAuth
  }

  input CreateTagInput {
    name: String!
    color: String!
    shape: String!
    date: DateTime!
  }

  input UpdateTagInput {
    name: String
    color: String
    shape: String
    date: DateTime
  }

  type Mutation {
    createTag(input: CreateTagInput!): Tag! @requireAuth
    updateTag(id: Int!, input: UpdateTagInput!): Tag! @requireAuth
    deleteTag(id: Int!): Tag! @requireAuth
  }
`
