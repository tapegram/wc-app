import ShiftCell from 'src/components/Shift/ShiftCell'

type ShiftPageProps = {
  id: number
}

const ShiftPage = ({ id }: ShiftPageProps) => {
  return <ShiftCell id={id} />
}

export default ShiftPage
