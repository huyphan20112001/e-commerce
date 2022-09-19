import "./Products.scss";
import React from "react";
import ProductsItem from "../../../components/ProductsItem/ProductsItem";

function Products() {
  return (
    <div id="product" className="product">
      <div className="container">
        <h3 className="product-heading">Products</h3>
        <div className="product-list">
          <ProductsItem />
        </div>
      </div>
    </div>
  );
}

export default Products;
