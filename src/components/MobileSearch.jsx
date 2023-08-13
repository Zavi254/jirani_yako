import { FaSearch } from "react-icons/fa";

const MobileSearch = ({ direct, handleChange, className, iconClass }) => {
  return (
    <div className={className}>
      <input
        type="text"
        className="form-control w-75"
        placeholder="Search"
        onFocus={direct}
        onClick={handleChange}
      />
      <div className={iconClass}>
        <FaSearch className="fa-search" onClick={direct} />
      </div>
    </div>
  );
};

export default MobileSearch;

