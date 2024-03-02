import React, { useEffect, useState } from "react";
import axios from "axios";

const handleSearch = (search, products) => {
  const formattedSearch = search.toLowerCase();
  return products.filter((value) =>
    value.name.toLowerCase().includes(formattedSearch)
  );
};

const SearchBar = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    onSearchChange(searchValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
