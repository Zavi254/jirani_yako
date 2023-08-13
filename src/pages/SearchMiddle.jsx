import MobileSearch from "../components/MobileSearch";
import { LiaLessThanSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const SearchMiddle = () => {
  const navigate = useNavigate();

  return (
    <div className="mobile_search_middle d-flex justify-content-around mt-2 align-items-center">
      <LiaLessThanSolid onClick={() => navigate(-1)} />
      <MobileSearch className={"mobile_middle_input d-flex w-100"} />
    </div>
  );
};

export default SearchMiddle;
