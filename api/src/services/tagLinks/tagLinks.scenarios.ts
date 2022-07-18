import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TagLinkCreateArgs>({
  tagLink: {
    one: {
      data: {
        worker: { create: { firstName: 'String', lastName: 'String' } },
        tag: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        worker: { create: { firstName: 'String', lastName: 'String' } },
        tag: { create: { name: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
