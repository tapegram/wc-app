type Props = {
  workers: Worker[]
}
type Worker = {
  id: number
  firstName: string
  lastName: string
  assessments: Assessment[]
}

export type Assessment = {
  id: number
  rating: number
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
        <tr key={worker.worker.id}>
          {buildName(worker) +
            ': ' +
            (worker.worker.assessments.length != 0
              ? worker.worker.assessments[0].rating
              : 0)}
        </tr>
      ))}
    </table>
  )
}

export default ShiftAssignees
