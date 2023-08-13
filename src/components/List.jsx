import countries from "../data/data";

const List = ({ input }) => {
  const filteredData = countries.filter((country) => {
    if (input === "") {
      return null;
    } else {
      return country.name.toLowerCase().includes(input);
    }
  });
  return (
    <div id="myDropdown" className="dropdown-content">
      {filteredData.map((country) => (
        <a href={country.name}>{country.name}</a>
      ))}
    </div>
  );
};

export default List;
