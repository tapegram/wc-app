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
  shifts: {string: Shift}
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
}

const WallchartComponent = (props: Props) => {
  return (
    <div>
      <table className="styled-table">
        <caption>
          Name of the worksite:
          <span style={{ fontWeight: 'bold' }}>
            {' ' + JSON.stringify(props.name).replaceAll('"', '')}
          </span>
        </caption>

        <thead>
          <th></th>
          {props.shiftNames.map((name) => (
            <th>{name}</th>
          ))}
        </thead>
        <tbody>
          {props.locations.map((loc) => (
            <tr>
              <td>{loc.name}</td>
              {props.shiftNames.map(
                (name) => (<td>
                  <ShiftAssignees workers={getWorkers(loc.shifts[name])} />
                </td>)
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WallchartComponent

const getWorkers = (shift?: Shift): Worker[] =>
  shift?.workers ?? []
