//Ketu e kemi krijuar nje komponente te re BlogList per te na mundesuar qe vlerat e arrys ti thirrim ne disa file pa pasur nevoje qe te i krijojme ne secilin file qe deshirojme te i perdorim.

//Per kete duhet qe komponenti qe e krijojme te kete edhe nje parameter 'props'
//Props eshte nje parameter qe na mundeson qe vlerat te i nxjerrim prej nje komponeti dhe te i vendosim ne nje file te caktuar.
const BlogList = (props) => {
  //Krijimi i nje const per nxjerrjen e nje elementi qe e kemi perdor kete rast si array.
  const blogs = props.blogs;
  const title = props.title;
  const deleteButton = props.deleteButton;
  return (
    <div className="blog-list">
      {/* Kete pjese eshte qe kemi perdor ne  komponentin Home*/}
      <h2>{title}</h2>
      {/* Metoden 'map()' qe jemi duke e perdor, duhet te nxjerren vlerat nje nga nje duke e perdorur nje key si vlere unike. */}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <h3>{blog.body}</h3>
          <p>{blog.instructor}</p>
          <button onClick={() => deleteButton(blog.id)}>Delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
