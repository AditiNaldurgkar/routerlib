import { Link } from "react-router-dom";
const stylenav={
    backgroundColor: "aqua",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
    height : "20px"
  
}
const linkstyle={
    borderRadius: "5px",
    backgroundColor: "white",
    padding: "5px",
    margin: " 5px 10px",
    fontWeight :"bold",
    textDecoration :"none",
    height : "15px"

}

function Navbar() {
  return (
    <nav style={stylenav}>
      <Link to="/" style={linkstyle}>Home</Link>
      <Link to="/cakes"  style={linkstyle} >Cakes</Link>
      <Link to="/cookies"  style={linkstyle}>Cookies</Link>
    </nav>
  );
}

export default Navbar;