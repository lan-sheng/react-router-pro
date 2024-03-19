import { useParams, useSearchParams } from 'react-router-dom'

const Article = () => {
  // const [params] = useSearchParams()
  // const id = params.get('id')
  // const name = params.get('name')
  const params = useParams()
  const { id, name } = params
  return (
    <div>
      文章{id}--{name}
    </div>
  )
}
export default Article
