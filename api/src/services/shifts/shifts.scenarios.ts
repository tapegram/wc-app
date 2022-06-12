import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ShiftCreateArgs>({
  shift: {
    one: {
      data: {
        name: 'String',
        location: {
          create: { name: 'String', worksite: { create: { name: 'String' } } },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        location: {
          create: { name: 'String', worksite: { create: { name: 'String' } } },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
