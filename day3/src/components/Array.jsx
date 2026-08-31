import React from "react";

export default function Array(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <hr />
      <h1>{props.person.name}</h1>
      <h1>{props.person.age}</h1>
      <h1>{props.person.country}</h1>
    </div>
  );
}
