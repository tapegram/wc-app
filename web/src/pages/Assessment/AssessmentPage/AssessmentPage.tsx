import AssessmentCell from 'src/components/Assessment/AssessmentCell'

type AssessmentPageProps = {
  id: number
}

const AssessmentPage = ({ id }: AssessmentPageProps) => {
  return <AssessmentCell id={id} />
}

export default AssessmentPage
