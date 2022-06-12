import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WorkerCreateArgs>({
  worker: {
    one: { data: { firstName: 'String', lastName: 'String' } },
    two: { data: { firstName: 'String', lastName: 'String' } },
  },
})

export type StandardScenario = typeof standard
