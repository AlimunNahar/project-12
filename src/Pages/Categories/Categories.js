import React from "react";
import { useLoaderData } from "react-router-dom";

const Categories = () => {
  const products = useLoaderData();
  // const [category, setCategoryName] = useState([]);
  const category = products.map((cat) => cat.category_name)[0];
  // console.log(category);
  return (
    <div>
      <div className="divider text-3xl text-cyan-500 my-16">{category}</div>
      <div className="col-span-2 mx-8 mt-5">
        {products.map((product) => (
          <>
            <div className="card lg:card-side bg-base-100 shadow-xl mb-8  rounded-xl ">
              <div className="card w-full md:w-full lg:w-6/12 image-full">
                <figure>
                  <img src={product?.img} alt="Shoes" />
                </figure>
                <div className="card-body my-auto hidden lg:block">
                  <h2 className="card-title text-4xl text-accent">
                    {product.product_name}
                  </h2>
                  <p className="text-justify">{product?.description}</p>
                </div>
              </div>
              <div className="card-body">
                <div className="block lg:hidden">
                  <h2 className="card-title text-4xl text-accent mb-8">
                    {product.product_name}
                  </h2>
                  <h2 className="card-title">Description</h2>
                  <p className="text-justify">{product?.description}</p>
                </div>

                <h2 className="card-title">Item Code</h2>
                <p className="">{product?.code}</p>

                <h2 className="card-title">Location</h2>
                <p className="">{product?.location}</p>

                <h2 className="card-title">Use Time</h2>
                <p className="">{product?.use_time} months</p>

                <h2 className="card-title">Post Time</h2>
                <p className="">{product?.post_time}</p>

                <div className="flex gap-x-20">
                  <div>
                    <h2 className="card-title">Resale Price</h2>
                    <p className="text-cyan-400">{product?.resale_price} tk</p>
                  </div>
                  <div>
                    <h2 className="card-title">Original Price</h2>
                    <p className="">{product?.original_price} tk</p>
                  </div>
                </div>
                <p className="text-red-400">{product?.notice}</p>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary rounded hover:bg-accent">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="divider mb-8"></div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Categories;
