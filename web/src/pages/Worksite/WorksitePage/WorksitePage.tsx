import WorksiteCell from 'src/components/Worksite/WorksiteCell'

type WorksitePageProps = {
  id: number
}

const WorksitePage = ({ id }: WorksitePageProps) => {
  return <WorksiteCell id={id} />
}

export default WorksitePage
