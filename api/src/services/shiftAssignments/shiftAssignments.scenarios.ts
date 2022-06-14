import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ShiftAssignmentCreateArgs>({
  shiftAssignment: {
    one: {
      data: {
        worker: { create: { firstName: 'String', lastName: 'String' } },
        shift: {
          create: {
            name: 'String',
            location: {
              create: {
                name: 'String',
                worksite: { create: { name: 'String' } },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        worker: { create: { firstName: 'String', lastName: 'String' } },
        shift: {
          create: {
            name: 'String',
            location: {
              create: {
                name: 'String',
                worksite: { create: { name: 'String' } },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
