import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/style.css";

const CategoryCards = ({ category }) => {
  const { category_name, image, _id } = category;
  // console.log(category);
  return (
    <div className="card w-auto bg-base-100 shadow-xl rounded-xl shadow-effect">
      <div className="card-body bg-primary rounded">
        <Link to={`/products/${_id}`}>
          <h2 className="text-2xl text-center font-semibold hover:text-accent hover:underline underline-offset-8">
            {category_name}
          </h2>
        </Link>
      </div>
      <figure>
        <img src={image} className="h-80 object-fill" alt="Shoes" />
      </figure>
    </div>
  );
};

export default CategoryCards;
