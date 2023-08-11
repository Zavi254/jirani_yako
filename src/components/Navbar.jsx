import { BiMenuAltLeft } from "react-icons/bi";
import LeftCanvas from "./LeftCanvas";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm">
      <ul className="navbar-nav flex-row justify-content-between container-fluid">
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
    </nav>
  );
};

export default Navbar;
