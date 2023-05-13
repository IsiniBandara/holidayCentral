import { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">HolidayCentral</span>
        </Link>
        {user ? (
          <div className="navItems">
            <p style={{ color: "#fff" }}>{user.slct_permission}</p>
            <p style={{ color: "#fff" }}>
              {user.fname} {user.lname}
            </p>
          </div>
        ) : (
          <div className="navItems">
            <Link to={"/login"}>
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
