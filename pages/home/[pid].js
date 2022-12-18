import { useRouter } from 'next/router'

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/books');
  const posts = await res.json();
  console.log(posts);

  return {
    props: {
      posts,
    },
  }
}

const Post = ({posts}) => {
  const router = useRouter()
  const { pid } = router.query
  return <li>post: {posts}</li>
}

export default Post