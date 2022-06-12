import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  ShiftResolvers,
} from 'types/graphql'

export const shifts: QueryResolvers['shifts'] = () => {
  return db.shift.findMany()
}

export const shift: QueryResolvers['shift'] = ({ id }) => {
  return db.shift.findUnique({
    where: { id },
  })
}

export const createShift: MutationResolvers['createShift'] = ({ input }) => {
  return db.shift.create({
    data: input,
  })
}

export const updateShift: MutationResolvers['updateShift'] = ({
  id,
  input,
}) => {
  return db.shift.update({
    data: input,
    where: { id },
  })
}

export const deleteShift: MutationResolvers['deleteShift'] = ({ id }) => {
  return db.shift.delete({
    where: { id },
  })
}

export const Shift: ShiftResolvers = {
  location: (_obj, { root }) =>
    db.shift.findUnique({ where: { id: root.id } }).location(),
}
