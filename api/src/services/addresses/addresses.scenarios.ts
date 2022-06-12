import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.AddressCreateArgs>({
  address: {
    one: {
      data: {
        firstLine: 'String',
        city: 'String',
        state: 'String',
        postal: 'String',
      },
    },
    two: {
      data: {
        firstLine: 'String',
        city: 'String',
        state: 'String',
        postal: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
