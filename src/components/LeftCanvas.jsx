import { BiHomeAlt, BiCategory, BiMoon } from "react-icons/bi";
import { GoStack } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPerson, BsBrightnessHigh } from "react-icons/bs";
import { FiLogOut, FiEdit } from "react-icons/fi";
import { FaGreaterThan } from "react-icons/fa";

const LeftCanvas = () => {
  return (
    <div className="offcanvas offcanvas-start" id="hidden_nav">
      <div className="offcanvas-header">
        <div className="hidden_nav_contact_info">
          <img
            src="https://res.cloudinary.com/dogmqg8to/image/upload/v1691686323/pexels-pixabay-220453_odprff.jpg"
            alt=""
            className="hidden_nav_image"
          />
          <FiEdit className="hidden_nav_edit_icon" />
          <p className="hidden_nav_name mt-3">John Doe</p>
          <p className="hidden_nav_email">example@gmail.com</p>
        </div>
        <div className="hidden_dark_theme_icon">
          <BiMoon />
          <BsBrightnessHigh />
          <div className="hidden_theme_toggler"></div>
        </div>
      </div>
      <div className="offcanvas-body">
        <div className="menu d-flex justify-content-between">
          <div>
            <BiHomeAlt className="hidden_nav_icon" /> <span>Home</span>
          </div>
          <FaGreaterThan className="greater_icon" />
        </div>
        <div className="menu d-flex justify-content-between">
          <div>
            <GoStack className="hidden_nav_icon" /> <span>Products</span>
          </div>
          <FaGreaterThan className="greater_icon" />
        </div>
        <div className="menu d-flex justify-content-between">
          <div>
            <BiCategory className="hidden_nav_icon" /> <span>Categories</span>
          </div>
          <FaGreaterThan className="greater_icon" />
        </div>
        <div className="menu d-flex justify-content-between">
          <div>
            <AiOutlineHeart className="hidden_nav_icon" /> <span>Wishlist</span>
          </div>
          <FaGreaterThan className="greater_icon" />
        </div>
        <div className="menu d-flex justify-content-between">
          <div>
            <BsPerson className="hidden_nav_icon" /> <span>Profile</span>
          </div>
          <FaGreaterThan className="greater_icon" />
        </div>
        <div className="menu d-flex justify-content-between">
          <div>
            <FiLogOut className="hidden_nav_icon" /> <span>Logout</span>
          </div>
          <FaGreaterThan className="greater_icon" />
        </div>
      </div>
      <h2 className="text-center">Jirani yako Store</h2>
      <p className="text-center">App Version 1.0</p>
    </div>
  );
};

export default LeftCanvas;
