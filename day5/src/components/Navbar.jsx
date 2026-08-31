import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Shkolla Digjitale</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/project">Project</a>
      </div>
    </nav>
  );
};

export default Navbar;
