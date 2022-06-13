import EditAddressCell from 'src/components/Address/EditAddressCell'

type AddressPageProps = {
  id: number
}

const EditAddressPage = ({ id }: AddressPageProps) => {
  return <EditAddressCell id={id} />
}

export default EditAddressPage
