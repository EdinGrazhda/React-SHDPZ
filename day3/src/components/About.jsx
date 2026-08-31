import React from "react";

export default function About(props) {
  const { name, age, emoji } = props;
  return (
    <div>
      <h1>
        {name} is {age}, {emoji}
      </h1>
    </div>
  );
}
