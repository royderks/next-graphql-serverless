export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/post');
  const post = await res.json();

  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: blocking };
}
