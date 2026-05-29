// import React from "react";

import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Banner from "../components/Banner/Banner.jsx";
import RowList from "../components/Rows/RowList/RowList.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <RowList/>
      <Footer />
    </>
  );
};

export default Home;
