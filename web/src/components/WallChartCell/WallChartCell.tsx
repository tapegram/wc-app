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
              assessments {
                id
                date
                rating
              }
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
        shiftNames={getUniqueShiftNames(wallChart.locations)}
      />
    </div>
  )
}

const getUniqueShiftNames = (locations: Location[]): string[] =>
  /*
    This could be broken out more into smaller more readable functions, but it basically:
    1) gets all the shift names from each location
    2) flattens the list from string[][] -> string[]
    3) dedups shift names by sticking them into a set
  */
  [
    ...new Set(
      locations
        .map((location) => location.shifts.map((shift) => shift.name))
        .flat()
    ),
  ]

const toLocationsProps = (locations: Location[]): PLocation[] =>
  locations.map(toLocationProp)

const toLocationProp = (location: Location): PLocation => ({
  id: location.id,
  name: location.name,
  shifts: toShiftDict(location.shifts),
})

const toShiftDict = (shifts: Shift[]): { string: PShift } => {
  const pairs = shifts.map((shift) => [shift.name, shift])
  return Object.fromEntries(pairs)
}
