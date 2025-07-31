function BlogDetails({ blogs }) {
  if (!blogs || blogs.length === 0) return <p>No blog posts yet!</p>;

  return (
    <ul>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p><b>{blog.author}</b></p>
          <p>{blog.content}</p>
        </div>
      ))}
    </ul>
  );
}

export default BlogDetails;
