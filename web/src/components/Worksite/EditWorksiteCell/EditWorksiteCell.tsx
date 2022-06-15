import type { EditWorksiteById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import WorksiteForm from 'src/components/Worksite/WorksiteForm'

export const QUERY = gql`
  query EditWorksiteById($id: Int!) {
    worksite: worksite(id: $id) {
      id
      name
    }
  }
`
const UPDATE_WORKSITE_MUTATION = gql`
  mutation UpdateWorksiteMutation($id: Int!, $input: UpdateWorksiteInput!) {
    updateWorksite(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ worksite }: CellSuccessProps<EditWorksiteById>) => {
  const [updateWorksite, { loading, error }] = useMutation(
    UPDATE_WORKSITE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Worksite updated')
        navigate(routes.worksites())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateWorksite({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Worksite {worksite.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <WorksiteForm
          worksite={worksite}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
