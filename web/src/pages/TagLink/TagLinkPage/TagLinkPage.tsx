import TagLinkCell from 'src/components/TagLink/TagLinkCell'

type TagLinkPageProps = {
  id: number
}

const TagLinkPage = ({ id }: TagLinkPageProps) => {
  return <TagLinkCell id={id} />
}

export default TagLinkPage
