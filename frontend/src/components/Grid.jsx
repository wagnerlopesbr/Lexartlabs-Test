import feather from "feather-icons";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Grid = ({ data, search, updateProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    feather.replace();
  }, []);

  useEffect(() => {
    if (search === "lowerprice") {
      setFilteredProducts([...data].sort((a, b) => a.price - b.price));
      console.log("lowerprice");
      return;
    } else if (search === "higherprice") {
      setFilteredProducts([...data].sort((a, b) => b.price - a.price));
      console.log("higherprice");
      return;
    }

    const filteredData = data.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filteredData);
  }, [data, search]);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gridGap: "30px",
        }}
      >
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            product={product}
            updateProducts={updateProducts}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
