import {
  assessments,
  assessment,
  createAssessment,
  updateAssessment,
  deleteAssessment,
} from './assessments'
import type { StandardScenario } from './assessments.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('assessments', () => {
  scenario('returns all assessments', async (scenario: StandardScenario) => {
    const result = await assessments()

    expect(result.length).toEqual(Object.keys(scenario.assessment).length)
  })

  scenario(
    'returns a single assessment',
    async (scenario: StandardScenario) => {
      const result = await assessment({ id: scenario.assessment.one.id })

      expect(result).toEqual(scenario.assessment.one)
    }
  )

  scenario('creates a assessment', async (scenario: StandardScenario) => {
    const result = await createAssessment({
      input: {
        rating: 7677922,
        workerId: scenario.assessment.two.workerId,
        notes: 'String',
      },
    })

    expect(result.rating).toEqual(7677922)
    expect(result.workerId).toEqual(scenario.assessment.two.workerId)
    expect(result.notes).toEqual('String')
  })

  scenario('updates a assessment', async (scenario: StandardScenario) => {
    const original = await assessment({ id: scenario.assessment.one.id })
    const result = await updateAssessment({
      id: original.id,
      input: { rating: 8466298 },
    })

    expect(result.rating).toEqual(8466298)
  })

  scenario('deletes a assessment', async (scenario: StandardScenario) => {
    const original = await deleteAssessment({ id: scenario.assessment.one.id })
    const result = await assessment({ id: original.id })

    expect(result).toEqual(null)
  })
})
