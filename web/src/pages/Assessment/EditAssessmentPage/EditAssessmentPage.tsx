import EditAssessmentCell from 'src/components/Assessment/EditAssessmentCell'

type AssessmentPageProps = {
  id: number
}

const EditAssessmentPage = ({ id }: AssessmentPageProps) => {
  return <EditAssessmentCell id={id} />
}

export default EditAssessmentPage
