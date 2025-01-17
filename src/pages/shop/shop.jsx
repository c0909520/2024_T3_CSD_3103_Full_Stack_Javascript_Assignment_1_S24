import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>StarTech Shop</h1>
      </div>

      <div className="products ">
        {PRODUCTS.map((product) => (
          //.map to iterate each product in the array using lists and keys
          <Product key={Product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
