import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  AddressResolvers,
} from 'types/graphql'

export const addresses: QueryResolvers['addresses'] = () => {
  return db.address.findMany()
}

export const address: QueryResolvers['address'] = ({ id }) => {
  return db.address.findUnique({
    where: { id },
  })
}

export const createAddress: MutationResolvers['createAddress'] = ({
  input,
}) => {
  return db.address.create({
    data: input,
  })
}

export const updateAddress: MutationResolvers['updateAddress'] = ({
  id,
  input,
}) => {
  return db.address.update({
    data: input,
    where: { id },
  })
}

export const deleteAddress: MutationResolvers['deleteAddress'] = ({ id }) => {
  return db.address.delete({
    where: { id },
  })
}

export const Address: AddressResolvers = {
  worker: (_obj, { root }) =>
    db.address.findUnique({ where: { id: root.id } }).worker(),
}
