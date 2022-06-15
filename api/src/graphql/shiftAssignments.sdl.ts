export const schema = gql`
  type ShiftAssignment {
    id: Int!
    workerId: Int!
    worker: Worker!
    shiftId: Int!
    shift: Shift!
  }

  type Query {
    shiftAssignments: [ShiftAssignment!]! @requireAuth
    shiftAssignment(id: Int!): ShiftAssignment @requireAuth
  }

  input CreateShiftAssignmentInput {
    workerId: Int!
    shiftId: Int!
  }

  input UpdateShiftAssignmentInput {
    workerId: Int
    shiftId: Int
  }

  type Mutation {
    createShiftAssignment(input: CreateShiftAssignmentInput!): ShiftAssignment!
      @requireAuth
    updateShiftAssignment(
      id: Int!
      input: UpdateShiftAssignmentInput!
    ): ShiftAssignment! @requireAuth
    deleteShiftAssignment(id: Int!): ShiftAssignment! @requireAuth
  }
`
