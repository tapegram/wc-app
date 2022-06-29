export const schema = gql`
  type Assessment {
    id: Int!
    rating: Int!
    workerId: Int!
    worker: Worker!
    date: DateTime!
    notes: String!
  }

  type Query {
    assessments: [Assessment!]! @requireAuth
    assessment(id: Int!): Assessment @requireAuth
  }

  input CreateAssessmentInput {
    rating: Int!
    workerId: Int!
    date: DateTime
    notes: String!
  }

  input UpdateAssessmentInput {
    rating: Int
    workerId: Int
    date: DateTime
    notes: String
  }

  type Mutation {
    createAssessment(input: CreateAssessmentInput!): Assessment! @requireAuth
    updateAssessment(id: Int!, input: UpdateAssessmentInput!): Assessment!
      @requireAuth
    deleteAssessment(id: Int!): Assessment! @requireAuth
  }
`
