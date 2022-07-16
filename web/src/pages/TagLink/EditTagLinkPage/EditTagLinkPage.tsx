import EditTagLinkCell from 'src/components/TagLink/EditTagLinkCell'

type TagLinkPageProps = {
  id: number
}

const EditTagLinkPage = ({ id }: TagLinkPageProps) => {
  return <EditTagLinkCell id={id} />
}

export default EditTagLinkPage
