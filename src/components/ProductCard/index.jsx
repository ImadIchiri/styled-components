import React from "react";
import styled from "styled-components";
import { Audi, Golf, Mercedes, Seat } from "../../assets/images";
import "./styles.css";

const ImagesObject = {
  Audi,
  Golf,
  Mercedes,
  Seat,
};

const ImageHolder = styled.div`
  width: 100%;
  padding: 0.5rem;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  min-height: 125px;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 0.25rem;
  transition: 0.35s ease-in-out;
`;
const StyledProductCard = styled.article`
  width: 100%;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 0px 5px #bfbfbf;
  &:hover ${Image} {
    transform: scale(1.25);
  }
`;
const TextContent = styled.div`
  text-align: center;
  padding: 1.15rem 1rem;
`;
const ProductTitle = styled.h3`
  color: #14161f;
`;
const Price = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NewPrice = styled.h4`
  font-size: 1.5rem;
  margin: 0 0.25rem;
`;
const OldPrice = styled.p`
  font-size: 0.85rem;
  text-decoration: line-through;
  margin: 0 0.25rem;
`;
const Button = styled.button`
  border: 2px solid #14161f;
  padding: 0.25rem 0.5rem;
  background-color: #fff;
  border-radius: 0.25rem;
  margin-top: 1.5rem;
  transition: 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #14161f;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <StyledProductCard>
      <ImageHolder>
        <Image src={ImagesObject[product.image]} alt="" />
      </ImageHolder>

      <TextContent>
        <ProductTitle>{product.title}</ProductTitle>
        <Price>
          {Boolean(product.price.oldPrice) && (
            <OldPrice>${product.price?.oldPrice}</OldPrice>
          )}
          <NewPrice>${product.price.newPrice}</NewPrice>
        </Price>

        <Button>Add To cart</Button>
      </TextContent>
    </StyledProductCard>
  );
};

export default ProductCard;
