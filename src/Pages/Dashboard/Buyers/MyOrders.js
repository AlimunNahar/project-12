import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
import Navbar from "../../Shared/Navbar/Navbar";

const MyOrders = () => {
  useTitle("MyOrders");
  const { user } = useContext(AuthContext);

  const { data: bookedItems = [] } = useQuery({
    queryKey: ["bookedItems", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://puresnuggle-server.vercel.app/bookedItems?email=${user?.email}`
      );
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });

  return (
    <div>
      <Navbar />
      <div className="mx-5">
        <div className="divider text-4xl text-cyan-400 my-12">My Orders</div>
        <div className="overflow-x-auto mb-12">
          {bookedItems.length ? (
            <table className="table w-full">
              <thead className="">
                <tr className="text-accent">
                  <th></th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Meeting Location</th>
                  <th>Resale Price</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {bookedItems.map((item, idx) => (
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
                    <td>{item?.location}</td>
                    <td>{item?.resale_price}</td>
                    <td>
                      <Link to="/payment">
                        <button className="btn btn-sm btn-primary hover:glass">
                          Pay
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h2 className="text-lg text-center my-5">
              You haven't booked any products yet!
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
