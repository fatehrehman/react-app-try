function Blog(props) {
  const content = props.posts.map((post) => {
    return <Post key={post.id} post={post} />;
  });
  return <div>{content}</div>;
}

function Post(props) {
  const { id, title, content } = props.post;
  return (
    // <div key={id}> // it will show console error as id is required for post component
    <div>
      <div>ID: {id}</div>
      <div>Title: {title}</div>
      <div>Content: {content}</div>
      <br />
    </div>
  );
}
export default Blog;
