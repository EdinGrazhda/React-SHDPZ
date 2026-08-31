import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:4000/blogs");

  const deleteButton = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
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
