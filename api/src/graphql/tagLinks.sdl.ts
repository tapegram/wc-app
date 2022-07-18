export const schema = gql`
  type TagLink {
    id: Int!
    workerId: Int!
    worker: Worker!
    tagId: Int!
    tag: Tag!
    date: DateTime!
  }

  type Query {
    tagLinks: [TagLink!]! @requireAuth
    tagLink(id: Int!): TagLink @requireAuth
  }

  input CreateTagLinkInput {
    workerId: Int!
    tagId: Int!
    date: DateTime!
  }

  input UpdateTagLinkInput {
    workerId: Int
    tagId: Int
    date: DateTime
  }

  type Mutation {
    createTagLink(input: CreateTagLinkInput!): TagLink! @requireAuth
    updateTagLink(id: Int!, input: UpdateTagLinkInput!): TagLink! @requireAuth
    deleteTagLink(id: Int!): TagLink! @requireAuth
  }
`
