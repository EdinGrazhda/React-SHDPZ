import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const deleteButton = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:4000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);
  return (
    <div className="home">
      {/* <BlogList blogs={blogs}/> */}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="Arianit Blogs"
          deleteButton={deleteButton}
        />
      )}
    </div>
  );
};

export default Home;
