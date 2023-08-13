import { BiMenuAltLeft } from "react-icons/bi";
import LeftCanvas from "./LeftCanvas";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm shadow">
      <ul
        className="navbar-nav flex-row justify-content-between container-fluid"
        id="mobile_navbar"
      >
        <li
          className="nav-item left_toggle_icon"
          data-bs-toggle="offcanvas"
          data-bs-target="#hidden_nav"
        >
          <BiMenuAltLeft />
        </li>
        <li className="nav-item mt-2">
          <img
            src="https://res.cloudinary.com/dogmqg8to/image/upload/v1691686323/pexels-pixabay-220453_odprff.jpg"
            alt=""
            className="contact_image"
          />
        </li>
      </ul>
      <LeftCanvas />
      <ul className="navbar-nav w-100 container-fluid" id="desktop_navbar">
        <img
          width={300}
          height={100}
          className="logo_image"
          src="https://res.cloudinary.com/dogmqg8to/image/upload/v1691843328/Minimalist_Simple_Brand_Initial_Logo-removebg-preview_qeka3g.png"
        />
        <li>SELL FASTER, BUY SMARTER</li>
        <li>
          <Link to={"/users/login"}>Log In</Link> |{" "}
          <Link to={"/users/register"}>Register</Link>{" "}
        </li>
        <button className="btn btn-primary">SELL</button>
      </ul>
    </nav>
  );
};

export default Navbar;
