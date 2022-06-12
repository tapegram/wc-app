import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  LocationResolvers,
} from 'types/graphql'

export const locations: QueryResolvers['locations'] = () => {
  return db.location.findMany()
}

export const location: QueryResolvers['location'] = ({ id }) => {
  return db.location.findUnique({
    where: { id },
  })
}

export const createLocation: MutationResolvers['createLocation'] = ({
  input,
}) => {
  return db.location.create({
    data: input,
  })
}

export const updateLocation: MutationResolvers['updateLocation'] = ({
  id,
  input,
}) => {
  return db.location.update({
    data: input,
    where: { id },
  })
}

export const deleteLocation: MutationResolvers['deleteLocation'] = ({ id }) => {
  return db.location.delete({
    where: { id },
  })
}

export const Location: LocationResolvers = {
  shifts: (_obj, { root }) =>
    db.location.findUnique({ where: { id: root.id } }).shifts(),
  worksite: (_obj, { root }) =>
    db.location.findUnique({ where: { id: root.id } }).worksite(),
}
