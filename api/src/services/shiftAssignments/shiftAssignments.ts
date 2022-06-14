import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  ShiftAssignmentResolvers,
} from 'types/graphql'

export const shiftAssignments: QueryResolvers['shiftAssignments'] = () => {
  return db.shiftAssignment.findMany()
}

export const shiftAssignment: QueryResolvers['shiftAssignment'] = ({ id }) => {
  return db.shiftAssignment.findUnique({
    where: { id },
  })
}

export const createShiftAssignment: MutationResolvers['createShiftAssignment'] =
  ({ input }) => {
    return db.shiftAssignment.create({
      data: input,
    })
  }

export const updateShiftAssignment: MutationResolvers['updateShiftAssignment'] =
  ({ id, input }) => {
    return db.shiftAssignment.update({
      data: input,
      where: { id },
    })
  }

export const deleteShiftAssignment: MutationResolvers['deleteShiftAssignment'] =
  ({ id }) => {
    return db.shiftAssignment.delete({
      where: { id },
    })
  }

export const ShiftAssignment: ShiftAssignmentResolvers = {
  worker: (_obj, { root }) =>
    db.shiftAssignment.findUnique({ where: { id: root.id } }).worker(),
  shift: (_obj, { root }) =>
    db.shiftAssignment.findUnique({ where: { id: root.id } }).shift(),
}
