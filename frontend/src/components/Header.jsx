import linkedinIcon from "../utils/images/linkedin-icon.png";
import githubIcon from "../utils/images/github-icon.png";
import logoutIcon from "../utils/images/logout-icon.png";
import cellphonecataloglogo from "../utils/images/cellphone-catalog-logo.png";
import "../css/Header.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLogged(false);
    navigate("/");
  };

  return (
    <div className="header-container">
      <nav className="nav-bar">
        <div className="logo-container">
          <img
            src={cellphonecataloglogo}
            width="25%"
            alt="cellphone-catalog-logo"
          />
        </div>

        <div className="social-icons-container">
          <div style={{ marginRight: "10px" }}>
            <a
              href="https://www.linkedin.com/in/wagnerlopesbr"
              rel="noreferrer"
              target="_blank"
            >
              <img src={linkedinIcon} width="24px" alt="linkedin-icon" />
            </a>
          </div>
          <div>
            <a
              href="https://www.github.com/wagnerlopesbr"
              rel="noreferrer"
              target="_blank"
            >
              <img src={githubIcon} width="24px" alt="github-icon" />
            </a>
          </div>
        </div>

        <div className="logout-container">
          <button className="nav-btn" onClick={() => handleLogout(!setLogged)}>
            <img src={logoutIcon} width="22px" alt="logout icon" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
