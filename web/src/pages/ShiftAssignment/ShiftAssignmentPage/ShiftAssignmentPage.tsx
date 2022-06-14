import ShiftAssignmentCell from 'src/components/ShiftAssignment/ShiftAssignmentCell'

type ShiftAssignmentPageProps = {
  id: number
}

const ShiftAssignmentPage = ({ id }: ShiftAssignmentPageProps) => {
  return <ShiftAssignmentCell id={id} />
}

export default ShiftAssignmentPage
