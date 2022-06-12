import EditWorksiteCell from 'src/components/Worksite/EditWorksiteCell'

type WorksitePageProps = {
  id: number
}

const EditWorksitePage = ({ id }: WorksitePageProps) => {
  return <EditWorksiteCell id={id} />
}

export default EditWorksitePage
