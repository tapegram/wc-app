import {
  shiftAssignments,
  shiftAssignment,
  createShiftAssignment,
  updateShiftAssignment,
  deleteShiftAssignment,
} from './shiftAssignments'
import type { StandardScenario } from './shiftAssignments.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('shiftAssignments', () => {
  scenario(
    'returns all shiftAssignments',
    async (scenario: StandardScenario) => {
      const result = await shiftAssignments()

      expect(result.length).toEqual(
        Object.keys(scenario.shiftAssignment).length
      )
    }
  )

  scenario(
    'returns a single shiftAssignment',
    async (scenario: StandardScenario) => {
      const result = await shiftAssignment({
        id: scenario.shiftAssignment.one.id,
      })

      expect(result).toEqual(scenario.shiftAssignment.one)
    }
  )

  scenario('creates a shiftAssignment', async (scenario: StandardScenario) => {
    const result = await createShiftAssignment({
      input: {
        workerId: scenario.shiftAssignment.two.workerId,
        shiftId: scenario.shiftAssignment.two.shiftId,
      },
    })

    expect(result.workerId).toEqual(scenario.shiftAssignment.two.workerId)
    expect(result.shiftId).toEqual(scenario.shiftAssignment.two.shiftId)
  })

  scenario('updates a shiftAssignment', async (scenario: StandardScenario) => {
    const original = await shiftAssignment({
      id: scenario.shiftAssignment.one.id,
    })
    const result = await updateShiftAssignment({
      id: original.id,
      input: { workerId: scenario.shiftAssignment.two.workerId },
    })

    expect(result.workerId).toEqual(scenario.shiftAssignment.two.workerId)
  })

  scenario('deletes a shiftAssignment', async (scenario: StandardScenario) => {
    const original = await deleteShiftAssignment({
      id: scenario.shiftAssignment.one.id,
    })
    const result = await shiftAssignment({ id: original.id })

    expect(result).toEqual(null)
  })
})
