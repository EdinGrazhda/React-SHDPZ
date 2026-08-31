import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Array from "./components/Array";

function App() {
  const num = [1, 2, 3, 4];

  const person = {
    name: "Arianit",
    age: 29,
    country: "Kosova",
  };
  return (
    <>
      <Home name="React" message="Best library" />
      <Home name="React Name" message="Best mobile library" />
      <About name="Arianit" age="29" emoji="✋" />
      <Array name={num} person={person} />
    </>
  );
}

export default App;
