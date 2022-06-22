import type {
  FindWallChartQuery,
  FindWallChartQueryVariables,
  Worksite,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import WallchartComponent, {
  Props,
} from '../WallchartComponent/WallchartComponent'

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

// const toProps = (worksite: Worksite): Props => ({
//   shifts: worksite.locations.map((location) => {
//     return location.shifts.map((shift) => {
//       return shift
//     })
//   }),
// })

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
    // <div>{JSON.stringify(wallChart)}</div>
    // <div>{console.log(wallChart)}</div>
    <div>
      <WallchartComponent
        name={wallChart.name}
        locations={wallChart.locations}
      />
    </div>
  )
}
