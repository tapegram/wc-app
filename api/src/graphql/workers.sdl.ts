export const schema = gql`
  type Worker {
    id: Int!
    firstName: String!
    lastName: String!
    phone: String
    email: String
    addressId: Int
    address: Address
    jobType: String
    employmentStatus: String!
  }

  type Query {
    workers: [Worker!]! @requireAuth
    worker(id: Int!): Worker @requireAuth
  }

  input CreateWorkerInput {
    firstName: String!
    lastName: String!
    phone: String
    email: String
    addressId: Int
    jobType: String
    employmentStatus: String!
  }

  input UpdateWorkerInput {
    firstName: String
    lastName: String
    phone: String
    email: String
    addressId: Int
    jobType: String
    employmentStatus: String
  }

  type Mutation {
    createWorker(input: CreateWorkerInput!): Worker! @requireAuth
    updateWorker(id: Int!, input: UpdateWorkerInput!): Worker! @requireAuth
    deleteWorker(id: Int!): Worker! @requireAuth
  }
`
