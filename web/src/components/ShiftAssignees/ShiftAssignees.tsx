type Props = {
  workers: Worker[]
}
type Worker = {
  name: string
}
const ShiftAssignees = (props: Props) => {
  return (
    <table>
      {props.workers.map((worker) => {
        return <tr>{worker.name}</tr>
      })}
    </table>
  )
}

export default ShiftAssignees
