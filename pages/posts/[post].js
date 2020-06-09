const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' });
  const posts = await res.json();

  const paths = posts.map(p => `/posts/${p.id}`);

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.post}`, { method: 'GET' });
  const post = await res.json();

  return {
    props: { post }
  }
}

export default Post;