import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  //Krijimi i nje liste duke e perdorur metoden Hook 'useState',
  //Ne kete rast e kemi perdorur per te krijuar nje Array me tri elemente.
  //Mirepo elementet brenda array jane objekte
  const [blogs, setBlogs] = useState([
    {
      title: "Shkolla Digjitale Prizren",
      body: "Kurs i programimit",
      instructor: "Arianit Tershnjaku",
      id: 1,
    },
    {
      title: "Shkolla Digjitale Prizren",
      body: "Kurs i programimit",
      instructor: "Fatjona Hoxhaj",
      id: 2,
    },
    {
      title: "Shkolla Digjitale Prizren",
      body: "Kurs i programimit",
      instructor: "Kebir Cesko",
      id: 3,
    },
  ]);
  const [name, setName] = useState("Arianit");

  //Nje funksion mund te perdoret edhe si props
  //Ketu e kemi krijuar nje funksion qe do ta perdorim permes props, qe e kemi krijuar si button ne komponentin BlogList
  const deleteButton = (id) => {
    //const duke e perdorur per ta fshire nje element brenda array duke e perdorur id e seciles vlere.
    const newBlogs = blogs.filter((blog) => blog.id !== id);

    //ndryshimi i array duke e perdorur metoden qe e kemi krijuar
    setBlogs(newBlogs);
  };
  //useEffect() eshte nje metode (Hook) qe na mundeson te krijojme efekte me elementet e ndryshme qe i kemi krijue me heret
  useEffect(() => {
    console.log("use effect ran");
    console.log(blogs);
    console.log(name);
  });
  return (
    <div className="home">
      {/* Nxjerrja e vlerave te array duke e perdor metoden 'map()', kjo metode eshte e ngjashme me loop-en foreach */}

      {/* {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <h3>{blog.body}</h3>
          <p>{blog.instructor}</p>
        </div>
      ))} */}

      {/* Menyra se si e thirrim nje komponent me nje parameter props  */}
      <BlogList
        blogs={blogs}
        title="Instruktorat"
        deleteButton={deleteButton}
      />
      {/* Riperdorimi i nje komponenti disa here */}
      {/* <BlogList blogs={blogs} title="Arianit Blogs" /> */}

      <p>Lis gjumashi</p>
    </div>
  );
};

export default Home;
