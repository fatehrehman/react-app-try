function Blog(props) {
  const content = props.posts.map((post) => {
    return (
      <div key={post.id}>
        <li>{post.id}</li>
        <li>{post.title}</li>
        <li>{post.content}</li>
      </div>
    );
  });
  return <div>{content}</div>;
}
export default Blog;
