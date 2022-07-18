import {
  tagLinks,
  tagLink,
  createTagLink,
  updateTagLink,
  deleteTagLink,
} from './tagLinks'
import type { StandardScenario } from './tagLinks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tagLinks', () => {
  scenario('returns all tagLinks', async (scenario: StandardScenario) => {
    const result = await tagLinks()

    expect(result.length).toEqual(Object.keys(scenario.tagLink).length)
  })

  scenario('returns a single tagLink', async (scenario: StandardScenario) => {
    const result = await tagLink({ id: scenario.tagLink.one.id })

    expect(result).toEqual(scenario.tagLink.one)
  })

  scenario('creates a tagLink', async (scenario: StandardScenario) => {
    const result = await createTagLink({
      input: {
        workerId: scenario.tagLink.two.workerId,
        tagId: scenario.tagLink.two.tagId,
      },
    })

    expect(result.workerId).toEqual(scenario.tagLink.two.workerId)
    expect(result.tagId).toEqual(scenario.tagLink.two.tagId)
  })

  scenario('updates a tagLink', async (scenario: StandardScenario) => {
    const original = await tagLink({ id: scenario.tagLink.one.id })
    const result = await updateTagLink({
      id: original.id,
      input: { workerId: scenario.tagLink.two.workerId },
    })

    expect(result.workerId).toEqual(scenario.tagLink.two.workerId)
  })

  scenario('deletes a tagLink', async (scenario: StandardScenario) => {
    const original = await deleteTagLink({ id: scenario.tagLink.one.id })
    const result = await tagLink({ id: original.id })

    expect(result).toEqual(null)
  })
})
