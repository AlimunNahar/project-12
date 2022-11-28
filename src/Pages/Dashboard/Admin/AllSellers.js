import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllSellers = () => {
  const { data: sellers = [] } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allSellers");
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  return <div>ALl Sellers</div>;
};

export default AllSellers;
