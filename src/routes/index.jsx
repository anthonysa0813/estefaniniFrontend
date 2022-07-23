import React from "react";
import { Routes, Route } from "react-router-dom";
import FormProduct from "../components/FormProduct";
import Header from "../components/Header";
import { ProductsContainer } from "../styles/main";
import Products from "./Products";

const RoutesPage = () => {
  return (
    <ProductsContainer>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/newProduct" element={<FormProduct />} />
        </Routes>
      </div>
    </ProductsContainer>
  );
};

export default RoutesPage;
