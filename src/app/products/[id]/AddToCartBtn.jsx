import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const AddToCartBtn = ({ id }) => {
  return (
    <button className="btn btn-primary mt-4">
      <MdOutlineAddShoppingCart />
      Add To Cart
    </button>
  );
};

export default AddToCartBtn;
