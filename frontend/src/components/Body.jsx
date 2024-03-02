import React, { useEffect, useState } from "react";
import Grid from "./Grid";
import SearchBar from "./SearchBar";
import axios from "axios";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

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

  const handleSearchChange = (searchValue) => {
    setSearch(searchValue);
  };

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <SearchBar data={products} onSearchChange={handleSearchChange} />
      <Grid data={products} search={search} />
    </div>
  );
};

export default Body;
