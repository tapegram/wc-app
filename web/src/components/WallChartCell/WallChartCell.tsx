import type {
  FindWallChartQuery,
  FindWallChartQueryVariables,
  Worksite,
  Location,
  Worker,
  Shift,
  ShiftAssignment,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import WallchartComponent, {
  Props,
  Location as PLocation,
  Shift as PShift,
  Worker as PWorker,
} from '../WallchartComponent/WallchartComponent'
import LocationsCell from '../Location/LocationsCell'

export const QUERY = gql`
  query FindWallChartQuery($id: Int!) {
    wallChart: worksite(id: $id) {
      name
      locations {
        id
        name
        shifts {
          id
          name
          location {
            id
            name
          }
          workers {
            worker {
              id
              firstName
              lastName
            }
          }
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindWallChartQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  wallChart,
}: CellSuccessProps<FindWallChartQuery, FindWallChartQueryVariables>) => {
  return (
    <div>
      <WallchartComponent
        name={wallChart.name}
        locations={toLocationsProps(wallChart.locations)}
        shiftNames={["Day", "Night"]}
      />
    </div>
  )
}

const toLocationsProps = (locations: Location[]): PLocation[] =>
  locations.map(toLocationProp)

const toLocationProp = (location: Location): PLocation => ({
  id: location.id,
  name: location.name,
  shifts: toShiftDict(location.shifts),
})

const toShiftDict = (shifts: Shift[]): {string: PShift} => {
  const pairs = shifts.map(
    (shift) => [shift.name, shift]
  )
  return Object.fromEntries(pairs)
}


