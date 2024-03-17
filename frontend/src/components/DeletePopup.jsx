import React, { useEffect } from "react";
import feather from "feather-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/DeletePopup.css";
import BASE_URL from "../utils/BASE_URL.jsx";

export default function DeletePopup({
  showPopup,
  setShowPopup,
  product,
  updateProducts,
}) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    feather.replace();
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleDelete = async (product) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/products/delete/${product.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response:", response);
      updateProducts();
      setShowPopup(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={showPopup ? "popup-container" : "popup-container hidden"}>
      <div className="popup-content">
        <h2 className="popup-title">CONFIRM DELETION?</h2>
        <div className="popup-buttons">
          <button className="popup-delete-button" onClick={handleClosePopup}>
            <i data-feather="x" className="popup-icon"></i>
          </button>
          <button
            className="popup-confirm-button"
            onClick={() => {
              handleDelete(product);
              navigate("/home");
            }}
          >
            <i data-feather="check" className="popup-icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
