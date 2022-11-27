import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const { data: bookedItems = [] } = useQuery({
    queryKey: ["bookedItems", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookedItems?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="mx-5">
      <div className="divider text-4xl text-cyan-400 my-12">My Orders</div>
    </div>
  );
};

export default MyOrders;
