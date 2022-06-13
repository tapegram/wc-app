import AddressCell from 'src/components/Address/AddressCell'

type AddressPageProps = {
  id: number
}

const AddressPage = ({ id }: AddressPageProps) => {
  return <AddressCell id={id} />
}

export default AddressPage
