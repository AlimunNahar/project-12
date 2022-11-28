import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);

  // const handleAddProduct = (event) = {
  //   event.preventDefault();
  //   const form = event.target;
  // }
  return <div>Hellondjendi3h</div>;
};

export default AddAProduct;
