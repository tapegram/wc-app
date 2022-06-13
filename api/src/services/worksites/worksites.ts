import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  WorksiteResolvers,
} from 'types/graphql'

export const worksites: QueryResolvers['worksites'] = () => {
  return db.worksite.findMany()
}

export const worksite: QueryResolvers['worksite'] = ({ id }) => {
  return db.worksite.findUnique({
    where: { id },
  })
}

export const createWorksite: MutationResolvers['createWorksite'] = ({
  input,
}) => {
  return db.worksite.create({
    data: input,
  })
}

export const updateWorksite: MutationResolvers['updateWorksite'] = ({
  id,
  input,
}) => {
  return db.worksite.update({
    data: input,
    where: { id },
  })
}

export const deleteWorksite: MutationResolvers['deleteWorksite'] = ({ id }) => {
  return db.worksite.delete({
    where: { id },
  })
}

export const Worksite: WorksiteResolvers = {
  locations: (_obj, { root }) =>
    db.worksite.findUnique({ where: { id: root.id } }).locations(),
}
