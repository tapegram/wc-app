import EditShiftAssignmentCell from 'src/components/ShiftAssignment/EditShiftAssignmentCell'

type ShiftAssignmentPageProps = {
  id: number
}

const EditShiftAssignmentPage = ({ id }: ShiftAssignmentPageProps) => {
  return <EditShiftAssignmentCell id={id} />
}

export default EditShiftAssignmentPage
