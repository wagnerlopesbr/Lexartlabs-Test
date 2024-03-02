import React from "react";
import styled from "styled-components";
import defaultProduct from "../../src/utils/images/default-product.png";
import Container from "./styledComponents/card/Container";

const Card = ({ product }) => {
  const formattedPrice = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <Container>
      <div>
        <img
          src={defaultProduct}
          alt={`${product.brand} ${product.model}`}
          style={{
            display: "flex",
            borderRadius: "4px 4px 0 0",
            maxWidth: "100%",
            height: "100%",
          }}
        />
      </div>
      <h3
        style={{
          color: "white",
          backgroundColor: "#B8860B",
          width: "100%",
          padding: "5px 0 5px 0",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        {product.name}
      </h3>
      <p>
        <strong>Brand: </strong>
        {product.brand}
      </p>
      <p>
        <strong>Model: </strong>
        {product.model}
      </p>
      <p>
        <strong>Color: </strong>
        {product.color}
      </p>
      <p
        style={{
          marginBottom: "20px",
        }}
      >
        {formattedPrice}
      </p>
    </Container>
  );
};

export default Card;
