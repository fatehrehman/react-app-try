function Blog(props) {
  const content = props.posts.map((post) => {
    return <Post post={post} />;
  });
  return <div>{content}</div>;
}

function Post(props) {
  const { id, title, content } = props.post;
  return (
    <div key={id}>
      <div>ID: {id}</div>
      <div>Title: {title}</div>
      <div>Content: {content}</div>
      <br />
    </div>
  );
}
export default Blog;
