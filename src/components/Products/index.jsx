import React, { useState } from "react";
import ProductCard from "../ProductCard";
import styled from "styled-components";
import { ProductsData } from "../../data/data";
import "./styles.css";

const ProductsList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  padding: 2rem 1rem;
  background-color: #ddd;
`;

const Products = () => {
  const [productsList] = useState([...ProductsData]);
  return (
    <ProductsList>
      {productsList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductsList>
  );
};

export default Products;
