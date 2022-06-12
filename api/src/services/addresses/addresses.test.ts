import {
  addresses,
  address,
  createAddress,
  updateAddress,
  deleteAddress,
} from './addresses'
import type { StandardScenario } from './addresses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('addresses', () => {
  scenario('returns all addresses', async (scenario: StandardScenario) => {
    const result = await addresses()

    expect(result.length).toEqual(Object.keys(scenario.address).length)
  })

  scenario('returns a single address', async (scenario: StandardScenario) => {
    const result = await address({ id: scenario.address.one.id })

    expect(result).toEqual(scenario.address.one)
  })

  scenario('creates a address', async () => {
    const result = await createAddress({
      input: {
        firstLine: 'String',
        city: 'String',
        state: 'String',
        postal: 'String',
      },
    })

    expect(result.firstLine).toEqual('String')
    expect(result.city).toEqual('String')
    expect(result.state).toEqual('String')
    expect(result.postal).toEqual('String')
  })

  scenario('updates a address', async (scenario: StandardScenario) => {
    const original = await address({ id: scenario.address.one.id })
    const result = await updateAddress({
      id: original.id,
      input: { firstLine: 'String2' },
    })

    expect(result.firstLine).toEqual('String2')
  })

  scenario('deletes a address', async (scenario: StandardScenario) => {
    const original = await deleteAddress({ id: scenario.address.one.id })
    const result = await address({ id: original.id })

    expect(result).toEqual(null)
  })
})
