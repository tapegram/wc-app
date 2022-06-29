import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.AssessmentCreateArgs>({
  assessment: {
    one: {
      data: {
        rating: 6086682,
        notes: 'String',
        worker: { create: { firstName: 'String', lastName: 'String' } },
      },
    },
    two: {
      data: {
        rating: 3392710,
        notes: 'String',
        worker: { create: { firstName: 'String', lastName: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
