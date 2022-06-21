type Props = {
  workers: Worker[]
}
type Worker = {
  id: number
  firstName: string
  lastName: string
}
const ShiftAssignees = (props: Props) => {
  return (
    <table>
      {props.workers.map((worker) => {
        return <tr>{worker.firstName}</tr>
      })}
    </table>
  )
}

export default ShiftAssignees
