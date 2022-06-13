import EditShiftCell from 'src/components/Shift/EditShiftCell'

type ShiftPageProps = {
  id: number
}

const EditShiftPage = ({ id }: ShiftPageProps) => {
  return <EditShiftCell id={id} />
}

export default EditShiftPage
