import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [instructor, setInstructor] = useState("Arianit");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const blog = { title, body, instructor };

    setIsPending(true);
    setError(null);

    fetch("http://localhost:4000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not add the blog");
        }

        return res.json();
      })
      .then(() => {
        setIsPending(false);
        navigate("/");
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  };

  return (
    <div className="project">
      <h2> Add a New Blog</h2>
      <form onSubmit={submit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Instructor:</label>
        <select
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
        >
          <option value="Arianit">Arianit</option>
          <option value="Fatjona">Fatjona</option>
          <option value="Kebir">Kebir</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Project;
