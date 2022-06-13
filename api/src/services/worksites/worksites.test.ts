import {
  worksites,
  worksite,
  createWorksite,
  updateWorksite,
  deleteWorksite,
} from './worksites'
import type { StandardScenario } from './worksites.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('worksites', () => {
  scenario('returns all worksites', async (scenario: StandardScenario) => {
    const result = await worksites()

    expect(result.length).toEqual(Object.keys(scenario.worksite).length)
  })

  scenario('returns a single worksite', async (scenario: StandardScenario) => {
    const result = await worksite({ id: scenario.worksite.one.id })

    expect(result).toEqual(scenario.worksite.one)
  })

  scenario('creates a worksite', async () => {
    const result = await createWorksite({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a worksite', async (scenario: StandardScenario) => {
    const original = await worksite({ id: scenario.worksite.one.id })
    const result = await updateWorksite({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a worksite', async (scenario: StandardScenario) => {
    const original = await deleteWorksite({ id: scenario.worksite.one.id })
    const result = await worksite({ id: original.id })

    expect(result).toEqual(null)
  })
})
