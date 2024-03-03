import React, { useEffect, useState } from "react";
import defaultProduct from "../../src/utils/images/default-product.png";
import "../css/Card.css";
import Container from "./styledComponents/Card/Container";
import feather from "feather-icons";
import { useNavigate } from "react-router-dom";
import DeletePopup from "./DeletePopup";

const Card = ({ product }) => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const formattedPrice = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  useEffect(() => {
    feather.replace();
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <Container className="card-container">
      <div>
        <img
          src={defaultProduct}
          alt={`${product.brand} ${product.model}`}
          className="card-image"
        />
        <button
          className="card-edit-btn"
          onClick={() => {
            navigate(`/products/update/${product.id}`);
          }}
        >
          <i data-feather="menu" id="my-menu-icon"></i>
        </button>
        <button className="card-delete-btn" onClick={togglePopup}>
          <i data-feather="trash-2" id="my-trash-icon"></i>
        </button>
      </div>
      <h3 className="card-title">{product.name}</h3>
      <div className="card-info">
        <p>
          <strong>Brand: </strong>
          <span className="card-span">{product.brand}</span>
        </p>
        <p>
          <strong>Model: </strong>
          <span className="card-span">{product.model}</span>
        </p>
        <p>
          <strong>Color: </strong>
          <span className="card-span">{product.color}</span>
        </p>
      </div>
      <p className="card-info-center">
        <strong>{formattedPrice}</strong>
      </p>

      {showPopup && (
        <DeletePopup
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          product={product}
        />
      )}
    </Container>
  );
};

export default Card;
