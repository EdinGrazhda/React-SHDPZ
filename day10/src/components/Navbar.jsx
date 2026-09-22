import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/project", label: "Project" },
  ];

  return (
    <nav className="navbar">
      <h1>Shkolla Digjitale</h1>
      <div className="links">
        {links.map((link) => (
          <Link key={link.path} to={link.path}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
