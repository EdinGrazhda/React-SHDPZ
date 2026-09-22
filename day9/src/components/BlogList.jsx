import { Link } from "react-router-dom";

const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;
  //Krjimi i props-it per butonin qe e kemi krijuar me poshte
  const deleteButton = props.deleteButton;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <h3>{blog.body}</h3>
            <p>{blog.instructor}</p>
          </Link>

          {/* Buttoni qe e kemi krjuar ne BlogList, i cili e perdor funksionin qe e keimi krijuar ne komponentin home. */}
          {/* Ky buton na mundeson te fshijme nje elemente brenda array duke e perdorur id e atije elementi */}
          {deleteButton && (
            <button onClick={() => deleteButton(blog.id)}>Delete blog</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
