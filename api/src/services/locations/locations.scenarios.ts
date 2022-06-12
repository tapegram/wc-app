import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.LocationCreateArgs>({
  location: {
    one: { data: { name: 'String', worksite: { create: { name: 'String' } } } },
    two: { data: { name: 'String', worksite: { create: { name: 'String' } } } },
  },
})

export type StandardScenario = typeof standard
