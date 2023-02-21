import React from "react";
import { Link } from "react-router-dom";

export default function LeftNav() {
  return (
    <>
      <div className="list-group">
        <Link
          to="/admin-home"
          className="list-group-item list-group-item-action bg-secondary text-light ml-2 border border-light"
        >
          Home
        </Link>
        <Link
          to="/admin-user"
          className="list-group-item list-group-item-action bg-secondary text-light ml-2 border border-light"
        >
          User
        </Link>
        <Link
          to="/admin-maincategory"
          className="list-group-item list-group-item-action bg-secondary text-light ml-2 border border-light"
        >
          MainCatogary
        </Link>
        <Link
          to="/admin-subcategory"
          className="list-group-item list-group-item-action bg-secondary text-light ml-2 border border-light"
        >
          SubCatagory
        </Link>
        <Link
          to="/admin-brand"
          className="list-group-item list-group-item-action bg-secondary text-light ml-2 border border-light"
        >
          Brands
        </Link>
        <Link
          to="/admin-product"
          className="list-group-item list-group-item-action bg-secondary text-light ml-2 border border-light"
        >
          Product
        </Link>
        <Link
          to="/admin-contact"
          className="list-group-item list-group-item-action bg-secondary text-light ml-2 border border-light"
        >
          Contact Us
        </Link>
        {/* <Link
          to="/news-letter"
          className="list-group-item list-group-item-action bg-secondary text-light ml-2 border border-light"
        >
          News letter
        </Link> */}
        <Link
          to="/admin-checkout"
          className="list-group-item list-group-item-action bg-secondary text-light ml-2 border border-light"
        >
          Cheakout
        </Link>
      </div>
    </>
  );
}
