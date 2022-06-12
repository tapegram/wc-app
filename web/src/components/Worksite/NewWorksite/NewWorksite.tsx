import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import WorksiteForm from 'src/components/Worksite/WorksiteForm'

const CREATE_WORKSITE_MUTATION = gql`
  mutation CreateWorksiteMutation($input: CreateWorksiteInput!) {
    createWorksite(input: $input) {
      id
    }
  }
`

const NewWorksite = () => {
  const [createWorksite, { loading, error }] = useMutation(CREATE_WORKSITE_MUTATION, {
    onCompleted: () => {
      toast.success('Worksite created')
      navigate(routes.worksites())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createWorksite({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Worksite</h2>
      </header>
      <div className="rw-segment-main">
        <WorksiteForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewWorksite
