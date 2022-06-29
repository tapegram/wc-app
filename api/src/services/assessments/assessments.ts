import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  AssessmentResolvers,
} from 'types/graphql'

export const assessments: QueryResolvers['assessments'] = () => {
  return db.assessment.findMany()
}

export const assessment: QueryResolvers['assessment'] = ({ id }) => {
  return db.assessment.findUnique({
    where: { id },
  })
}

export const createAssessment: MutationResolvers['createAssessment'] = ({
  input,
}) => {
  return db.assessment.create({
    data: input,
  })
}

export const updateAssessment: MutationResolvers['updateAssessment'] = ({
  id,
  input,
}) => {
  return db.assessment.update({
    data: input,
    where: { id },
  })
}

export const deleteAssessment: MutationResolvers['deleteAssessment'] = ({
  id,
}) => {
  return db.assessment.delete({
    where: { id },
  })
}

export const Assessment: AssessmentResolvers = {
  worker: (_obj, { root }) =>
    db.assessment.findUnique({ where: { id: root.id } }).worker(),
}
