import { useQuery } from "@tanstack/react-query";
import React from "react";
import "../../Styles/style.css";
import { Link } from "react-router-dom";

const AdvertisedProducts = () => {
  const { data: advertisedProducts = [], refetch } = useQuery({
    queryKey: ["advertisedProducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertisedProducts");
      const data = await res.json();
      console.log(data);
      refetch();
      return data;
    },
  });
  return (
    <div>
      {advertisedProducts.length ? (
        <div className="my-20">
          <div className="divider animate-bounce text-3xl my-8 mt-20 text-cyan-500">
            Advertised Products
          </div>

          <p className="text-center italic mb-10">
            Give your home a second chance & decorate the home
            <br />
            with the beautiful creation of wood
          </p>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {advertisedProducts.map((product) => (
              <div
                key={product._id}
                className="card w-auto bg-base-100 shadow-xl rounded-xl shadow-effect"
              >
                <div className="card-body bg-primary rounded">
                  <Link to={`/products/${product._id}`}>
                    <h2 className="text-2xl text-center font-semibold hover:text-accent hover:underline underline-offset-8">
                      {product.product_name}
                    </h2>
                  </Link>
                </div>
                <figure>
                  <img
                    src={product.img}
                    className="h-80 object-fill"
                    alt="Shoes"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AdvertisedProducts;
