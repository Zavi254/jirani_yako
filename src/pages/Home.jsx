import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MobileSearch from "../components/MobileSearch";
import { useNavigate } from "react-router-dom";
import MobileCategorySection from "../components/MobileCategorySection";
import useFetch from "../components/useFetch";

const categoryUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Home = () => {
  const navigate = useNavigate();
  const { data: categories, isLoading } = useFetch(
    `${categoryUrl}/categories`
  );


  const handleDirect = () => {
    navigate("/search-middle");
  };

  return (
    <>
      <Navbar />
      <Banner />
      <MobileSearch
        className={"mobile_search_input mt-4"}
        iconClass={"mobile_search_icon_container"}
        direct={handleDirect}
      />
      <div className="mobile_category_section container-fluid overflow-scroll mt-4">
        {categories.map((category) => (
          <MobileCategorySection key={category._id} title={category.name} />
        ))}
      </div>
    </>
  );
};

export default Home;
