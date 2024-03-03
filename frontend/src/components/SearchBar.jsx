import React, { useEffect, useState } from "react";
import axios from "axios";
import feather from "feather-icons";
import "../css/SearchBar.css";
import BASE_URL from "../utils/BASE_URL.jsx";

const SearchBar = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");
  const [brands, setBrands] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const token = localStorage.getItem("token");

  const fetchBrands = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/brand`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBrands(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    feather.replace();
    fetchBrands();
  }, []);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value);
  };

  const handleFilter = (e) => {
    setSelectedFilter(e.target.value);
    onSearchChange(e.target.value);
  };

  const handleClear = () => {
    setSearch("");
    setSelectedFilter("");
    onSearchChange("");
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleInputChange}
      />
      <div className="search-bar-inside-container">
        <div>
          <select
            className="filter-select"
            value="brand"
            name="brand"
            onChange={handleFilter}
          >
            <option value="">Brands</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.name}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button onClick={handleClear} className="clear-button">
            <i data-feather="rotate-ccw" id="my-rotate-icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
