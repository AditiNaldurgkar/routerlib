import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cakes">Cakes</Link>
      <Link to="/cookies">Cookies</Link>
    </nav>
  );
}

export default Navbar;