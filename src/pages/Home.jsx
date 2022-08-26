import React from "react";
import Announcment from "../components/Announcment";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";



const Home = () => {
  return (
    <div>
      <Announcment />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer/>
    </div>
  );
};

export default Home;
