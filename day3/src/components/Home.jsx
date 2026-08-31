import React from "react";

function Home(props) {
  console.log(props);
  return (
    <div className="container">
      <h1>Welcome to {props.name}</h1>
      <p>{props.message}</p>
    </div>
  );
}
export default Home;
