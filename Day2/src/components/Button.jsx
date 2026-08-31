import React from "react";

function Button() {
  var x = 10;
  let y = 20;
  const name = "Arianit";
  y = 20;
  //name = "Lis";

  return (
    <div>
      <button>Kliko</button>
      <p>{x++}</p>
      <p>{x}</p>
      <p>{y}</p>

      <p>{name}</p>
    </div>
  );
}

export default Button;
