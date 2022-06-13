import { shifts, shift, createShift, updateShift, deleteShift } from './shifts'
import type { StandardScenario } from './shifts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('shifts', () => {
  scenario('returns all shifts', async (scenario: StandardScenario) => {
    const result = await shifts()

    expect(result.length).toEqual(Object.keys(scenario.shift).length)
  })

  scenario('returns a single shift', async (scenario: StandardScenario) => {
    const result = await shift({ id: scenario.shift.one.id })

    expect(result).toEqual(scenario.shift.one)
  })

  scenario('creates a shift', async (scenario: StandardScenario) => {
    const result = await createShift({
      input: { name: 'String', locationId: scenario.shift.two.locationId },
    })

    expect(result.name).toEqual('String')
    expect(result.locationId).toEqual(scenario.shift.two.locationId)
  })

  scenario('updates a shift', async (scenario: StandardScenario) => {
    const original = await shift({ id: scenario.shift.one.id })
    const result = await updateShift({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a shift', async (scenario: StandardScenario) => {
    const original = await deleteShift({ id: scenario.shift.one.id })
    const result = await shift({ id: original.id })

    expect(result).toEqual(null)
  })
})
