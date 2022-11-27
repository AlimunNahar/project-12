import { useEffect, useState } from "react";

const useBuyer = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/seller/${email}`)
        .then((res) => res.send())
        .then((data) => {
          // console.log(data);
          setIsSeller(data.isBuyer);
          setIsSellerLoading(false);
        });
    }
  }, [email]);

  return [isSeller, isSellerLoading];
};

export default useBuyer;
