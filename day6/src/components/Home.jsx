import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import databaseUrl from "../../data/db.json?url";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const deleteButton = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    const controller = new AbortController();

    fetch(databaseUrl, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not load blogs.");
        }
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data.blogs)) {
          throw new Error("The database must contain a blogs array.");
        }
        setBlogs(data.blogs);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, []);
  return (
    <div className="home">
      {isLoading && <p>Loading blogs...</p>}
      {error && <p role="alert">{error}</p>}
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
