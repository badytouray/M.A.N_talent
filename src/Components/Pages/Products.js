import React from "react";
import "../../App.css";
// import CardItem from "../CardItem";
import Cards from "../Cards/Cards";
import "../Cards/Cards.css";
import Footer from "../Footer/Footer";

export default function Products() {
  return (
    <>
      <h1 className="products">PRODUCTS</h1>
      <Cards />
      <Footer />
    </>
  );
}
