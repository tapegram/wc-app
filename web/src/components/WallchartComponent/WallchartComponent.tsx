import ShiftAssignees from 'src/components/ShiftAssignees/ShiftAssignees'

export type Props = {
  name: string
  locations: Location[]
  shiftNames: string[]
}

export type Location = {
  id: number
  name: string
  // Key is the shift name. Maybe in the future this should be ID (after updating the db model)
  shifts: { string: Shift }
}
export type Shift = {
  id: number
  name: string
  workers: Worker[]
}
export type Worker = {
  id: number
  firstName: string
  lastName: string
  assessments: Assessment[]
}
export type Assessment = {
  id: number
  rating: number
}

const WallchartComponent = (props: Props) => {
  return (
    <div className="flex justify-center mt-12 w-screen h-screen">
      <table className="table p-4 bg-white shadow rounded-lg w-3/5 h-2/5">
        <caption className="text-xl text-left">
          Name of the worksite:
          <span className="font-bold">
            {' ' + JSON.stringify(props.name).replaceAll('"', '')}
          </span>
        </caption>

        <thead>
          <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900"></th>
          {props.shiftNames.map((name) => (
            <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              {name}
            </th>
          ))}
        </thead>
        <tbody>
          {props.locations.map((loc) => (
            <tr className="text-gray-700">
              <td className="border p-4 dark:border-dark-5">{loc.name}</td>
              {props.shiftNames.map((name) => (
                <td className="border p-4 dark:border-dark-5">
                  <ShiftAssignees workers={getWorkers(loc.shifts[name])} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WallchartComponent

const getWorkers = (shift?: Shift): Worker[] => shift?.workers ?? []
