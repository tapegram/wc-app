type Props = {
  workers: Worker[]
}
type Worker = {
  id: number
  firstName: string
  lastName: string
}

const buildName = (worker: Worker) => {
  const fullName =
    '' +
    JSON.stringify(worker.worker.firstName).replaceAll('"', ' ') +
    JSON.stringify(worker.worker.lastName).replaceAll('"', ' ')
  return fullName
}

const ShiftAssignees = (props: Props) => {
  return (
    <table>
      {props.workers.map((worker) => (
        <tr>{buildName(worker)}</tr>
      ))}
    </table>
  )
}

export default ShiftAssignees
