import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
