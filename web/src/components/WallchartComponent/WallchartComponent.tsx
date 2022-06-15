import ShiftAssignees from 'src/components/ShiftAssignees/ShiftAssignees'
type Props = {
  shifts: Shift[]
}
type Shift = {
  displayName: string
  time: string
  locations: Location[]
}
type Location = {
  displayName: string
  workers: Worker[]
}
type Worker = {
  name: string
}

const WallchartComponent = (props: Props) => {
  return (
    <div>
      <h2>{'WallchartComponent'}</h2>
      <p>
        {
          'Find me in ./web/src/components/WallchartComponent/WallchartComponent.tsx'
        }
      </p>
      <table>
        <tr>
          <th></th>
          {props.shifts[0].locations.map((location) => (
            <th>{location.displayName}</th>
          ))}
        </tr>
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
      </table>
    </div>
  )
}

export default WallchartComponent
