import type { EditTagLinkById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import TagLinkForm from 'src/components/TagLink/TagLinkForm'

export const QUERY = gql`
  query EditTagLinkById($id: Int!) {
    tagLink: tagLink(id: $id) {
      id
      workerId
      tagId
      date
    }
  }
`
const UPDATE_TAG_LINK_MUTATION = gql`
  mutation UpdateTagLinkMutation($id: Int!, $input: UpdateTagLinkInput!) {
    updateTagLink(id: $id, input: $input) {
      id
      workerId
      tagId
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ tagLink }: CellSuccessProps<EditTagLinkById>) => {
  const [updateTagLink, { loading, error }] = useMutation(UPDATE_TAG_LINK_MUTATION, {
    onCompleted: () => {
      toast.success('TagLink updated')
      navigate(routes.tagLinks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { workerId: parseInt(input.workerId), tagId: parseInt(input.tagId), })
    updateTagLink({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit TagLink {tagLink.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TagLinkForm tagLink={tagLink} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
