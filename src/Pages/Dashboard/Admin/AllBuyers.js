import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../../Hooks/useTitle";

const AllBuyers = () => {
  useTitle("AllBuyers");

  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allBuyers");
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  const handleDelete = (buyer) => {
    // console.log(buyer);
    fetch(`http://localhost:5000/buyer/${buyer._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Buyer deleted successfully!");
        }
      });
  };
  return (
    <div className="mx-5">
      <div className="divider text-4xl text-cyan-400 my-12">My Products</div>
      <div className="overflow-x-auto mb-12">
        {buyers.length ? (
          <table className="table w-full">
            <thead className="">
              <tr className="text-accent">
                <th></th>
                <th>Seller Name</th>
                <th>Email</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {buyers.map((buyer, idx) => (
                <tr className="hover" key={idx}>
                  <th>{idx + 1}</th>
                  <td>{buyer?.name}</td>
                  <td>{buyer?.email}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(buyer)}
                      className="btn btn-circle btn-outline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
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

export default AllBuyers;
