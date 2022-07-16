import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import TagLinkForm from 'src/components/TagLink/TagLinkForm'

const CREATE_TAG_LINK_MUTATION = gql`
  mutation CreateTagLinkMutation($input: CreateTagLinkInput!) {
    createTagLink(input: $input) {
      id
    }
  }
`

const NewTagLink = () => {
  const [createTagLink, { loading, error }] = useMutation(CREATE_TAG_LINK_MUTATION, {
    onCompleted: () => {
      toast.success('TagLink created')
      navigate(routes.tagLinks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { workerId: parseInt(input.workerId), tagId: parseInt(input.tagId), })
    createTagLink({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New TagLink</h2>
      </header>
      <div className="rw-segment-main">
        <TagLinkForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTagLink
