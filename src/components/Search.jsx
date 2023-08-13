import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import List from "./List";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputHandler = (e) => {
    // convert text to lowercase
    const lowercase = e.target.value.toLowerCase();
    setSearchTerm(lowercase);
    console.log(lowercase);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search">
      <FaSearch onClick={handleSearch} className="fa-search" />
      <input
        type="text"
        className="form-control"
        placeholder="Search Products..."
        value={searchTerm}
        onChange={inputHandler}
      />
      <List input={searchTerm} />
    </div>
    
  );
};

export default Search;
