import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MobileSearch from "../components/MobileSearch";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleDirect = () => {
    navigate("/search-middle");
  };

  return (
    <>
      <Navbar />
      <Banner />
      <MobileSearch
        className={'mobile_search_input mt-4'}
        iconClass={"mobile_search_icon_container"}
        direct={handleDirect}
      />
    </>
  );
};

export default Home;
