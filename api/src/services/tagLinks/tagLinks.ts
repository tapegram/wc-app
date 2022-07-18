import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  TagLinkResolvers,
} from 'types/graphql'

export const tagLinks: QueryResolvers['tagLinks'] = () => {
  return db.tagLink.findMany()
}

export const tagLink: QueryResolvers['tagLink'] = ({ id }) => {
  return db.tagLink.findUnique({
    where: { id },
  })
}

export const createTagLink: MutationResolvers['createTagLink'] = ({
  input,
}) => {
  return db.tagLink.create({
    data: input,
  })
}

export const updateTagLink: MutationResolvers['updateTagLink'] = ({
  id,
  input,
}) => {
  return db.tagLink.update({
    data: input,
    where: { id },
  })
}

export const deleteTagLink: MutationResolvers['deleteTagLink'] = ({ id }) => {
  return db.tagLink.delete({
    where: { id },
  })
}

export const TagLink: TagLinkResolvers = {
  worker: (_obj, { root }) =>
    db.tagLink.findUnique({ where: { id: root.id } }).worker(),
  tag: (_obj, { root }) =>
    db.tagLink.findUnique({ where: { id: root.id } }).tag(),
}
