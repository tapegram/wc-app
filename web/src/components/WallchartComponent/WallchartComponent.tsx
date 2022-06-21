import ShiftAssignees from 'src/components/ShiftAssignees/ShiftAssignees'

export type Props = {
  locations: Location[]
}
type Location = {
  id: number
  name: string
  shifts: Shift[]
}
type Shift = {
  id: number
  name: string
  location: Location
  workers: Worker[]
}
type Worker = {
  id: number
  firstName: string
  lastName: string
}

const WallchartComponent = (props: Props) => {
  return (
    <div>
      <h2>{'Wallchart Component:'}</h2>
      <table className="styled-table">
        <thead>
          <th></th>
          {props.locations.map((loc) => (
            <th>{loc.name}</th>
          ))}
        </thead>
        <tbody>
          {props.locations.map((loc) =>
            loc.shifts.map((shift) => (
              <tr>
                <td>{shift.name}</td>
                {/* {shift.location.map((loc) => (
                  <td>
                    <ShiftAssignees workers={loc.workers} />
                  </td>
                ))} */}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* <h2>{'Wallchart Component:'}</h2>

      <table className="styled-table">
        <thead>
          <tr>
            <th></th>
            {props.shifts[0].locations.map((location) => (
              <th>{location.displayName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.shifts.map((shift) => (
            <tr>
              <td>{shift.displayName}</td>
              {shift.locations.map((location) => (
                <td>
                  <ShiftAssignees workers={location.workers} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  )
}

export default WallchartComponent

// {props.locations.map((loc) => {
//   return loc.shifts.map((shift) => <th>{shift.name}</th>)
// })}
