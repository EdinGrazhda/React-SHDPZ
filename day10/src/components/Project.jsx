import { useState } from "react";

const Project = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [instructor, setInstructor] = useState("Arianit");

  const submit = (e) => {
    e.preventDefault();
    const blog = { title, body, instructor };

    fetch("http://localhost:4000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
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
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Project;
