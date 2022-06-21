import ShiftAssignees from 'src/components/ShiftAssignees/ShiftAssignees'

export type Props = {
  name: string
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

// const constructTable = (list: Array, selector: string) => {
//   // Getting the all column names
//   const cols = Headers(list, selector)

//   // Traversing the JSON data
//   for (let i = 0; i < list.length; i++) {
//     const row = $('<tr/>')
//     for (let colIndex = 0; colIndex < cols.length; colIndex++) {
//       let val = list[i][cols[colIndex]]

//       // If there is any key, which is matching
//       // with the column name
//       if (val == null) val = ''
//       row.append($('<td/>').html(val))
//     }

//     // Adding each row to the table
//     $(selector).append(row)
//   }
// }

// const Headers = (list, selector) => {
//   const columns = []
//   const header = $('<tr/>')

//   for (let i = 0; i < list.length; i++) {
//     const row = list[i]

//     for (const k in row) {
//       if ($.inArray(k, columns) == -1) {
//         columns.push(k)

//         // Creating the header
//         header.append($('<th/>').html(k))
//       }
//     }
//   }

//   // Appending the header to the table
//   $(selector).append(header)
//   return columns
// }

// // returns a distinct list of all possible shifts
// const getUniqueShifts = (array: Array<number>): Array<number> => {
//   return [...new Set(array)]
// }

const WallchartComponent = (props: Props) => {
  return (
    <div>
      <div>
        {console.log(
          'Hello' +
            JSON.stringify(props.locations[0].shifts[0].name).replaceAll(
              '"',
              ''
            )
        )}
      </div>
      <table className="styled-table">
        <caption>
          Name of the worksite:
          <span style={{ fontWeight: 'bold' }}>
            {' ' + JSON.stringify(props.name).replaceAll('"', '')}
          </span>
        </caption>

        <thead>
          {/* do the shift types hardcoded because I couldnt figure out how to automatically do it,
          with shifts(distinct) from graphql or something*/}
          <th></th>
          <th>Day</th>
          <th>Night</th>
        </thead>
        <tbody>
          {/* the rows are going to be the locations*/}
          {props.locations.map((loc) => (
            <tr>
              <td>{loc.name}</td>
              {JSON.stringify(loc.shifts[0].name).replaceAll('"', '') ==
                'Night' && <td></td>}
              {loc.shifts.map((shift) => (
                <td>
                  {console.log(shift.workers)}
                  <ShiftAssignees workers={shift.workers} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    // <div>
    //   <h2>{'Wallchart Component:'}</h2>
    //   <button onClick="constructTable(props.locations, '#table')">click here</button>
    //   <table id="table" className="styled-table"></table>
    // </div>
  )
}

export default WallchartComponent

// {props.locations.map((loc) => {
//   return loc.shifts.map((shift) => <th>{shift.name}</th>)
// })}
