import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import useTitle from "../../../Hooks/useTitle";

const MyProducts = () => {
  useTitle("MyProducts");
  const { user } = useContext(AuthContext);
  // console.log(disable);

  const { data: items = [] } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://puresnuggle-server.vercel.app/products?email=${user?.email}`
      );
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });

  const handleAdd = (item, event) => {
    // console.log(item);

    const product = {
      product_name: item.product_name,
      img: item.img,
    };

    fetch("https://puresnuggle-server.vercel.app/advertise", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Your product will advertise to home page");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div className="mx-5">
      <div className="divider text-4xl text-cyan-400 my-12">My Products</div>
      <div className="overflow-x-auto mb-12">
        {items.length ? (
          <table className="table w-full">
            <thead className="">
              <tr className="text-accent">
                <th></th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Availability</th>
                <th>Availability</th>
                <th>Advertise</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr className="hover" key={idx}>
                  <th>{idx + 1}</th>
                  <td>
                    {item?.img ? (
                      <div className="avatar">
                        <div className="w-16 rounded-full">
                          <img src={item?.img} alt="" />
                        </div>
                      </div>
                    ) : (
                      "No image"
                    )}
                  </td>
                  <td>{item?.product_name}</td>
                  <td>
                    <button className="btn btn-sm btn-primary hover:glass">
                      Available
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-accent hover:glass">
                      Sold
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleAdd(item)}
                      className="btn btn-sm btn-primary hover:glass"
                    >
                      Advertise
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2 className="text-lg text-center my-5">
            You haven't started selling yet!
          </h2>
        )}
      </div>
    </div>
  );
};

export default MyProducts;
