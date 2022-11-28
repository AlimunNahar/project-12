import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import "../../../Styles/style.css";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);

  // const newProduct = {
  //   seller_email: user?.email,
  //   seller_name: user?.displayName,
  //   product_name,
  //   category_name,
  //   img,
  //   location,
  //   resale_price,
  //   original_price,
  //   use_time,
  //   post_time,
  //   description,
  //   code,
  //   notice,
  // };

  // const handleAddProduct = (event) = {
  //   event.preventDefault();
  //   const form = event.target;
  // }
  return (
    <div className="">
      <div className="divider text-cyan-400 text-3xl mt-8 mx-20">
        Add A New Product
      </div>
      <form
        // onSubmit={handleAddProduct}
        className="grid grid-cols-1 gap-3 py-10 lg:mx-auto w-full lg:w-6/12 background  px-8 my-10 rounded-lg"
      >
        <div className="divider text-primary font-bold text-lg -mb-2">
          Seller Info
        </div>
        <label className="text-sm text-black font-semibold -mb-2">Email</label>
        <input
          type="email"
          disabled
          defaultValue={user?.email}
          className="input w-full input-bordered rounded-lg add-product-input"
        />
        <label className="text-sm text-black font-semibold -mb-2">
          Phone number
        </label>
        <input
          type="text"
          name="phone"
          className="input w-full input-bordered rounded-lg add-product-input"
        />

        <div className="divider text-primary font-bold text-lg -mb-2">
          Product Info
        </div>

        <label className="text-black font-semibold -mb-2">
          Select a category <span className="text-red-700">*</span>
        </label>

        <select
          name="category_name"
          className="select select-bordered w-full add-product-input rounded-lg"
          required
        >
          <option value="Antique Furniture">Antique Furniture</option>
          <option value="Vintage Furniture">Vintage Furniture</option>
          <option value="French Furniture">French Furniture</option>
          <option value="Industrial Furniture">Industrial Furniture</option>
        </select>

        <label className="text-black text-sm font-semibold -mb-2">
          Product code & name <span className="text-red-700">*</span>
        </label>
        <div className="flex gap-x-3">
          <input
            type="text"
            name="code"
            required
            placeholder="Code: SKU_HGRT-543"
            className="input w-2/5 rounded-lg input-bordered add-product-input"
          />
          <input
            type="text"
            name="product_name"
            required
            placeholder="Product name"
            className="input w-full rounded-lg input-bordered add-product-input"
          />
        </div>
        <label className="text-black text-sm font-semibold -mb-2">
          Product Image link <span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          name="img"
          required
          placeholder="Image URL"
          className="input w-full rounded-lg input-bordered add-product-input"
        />

        <label className="text-black text-sm font-semibold -mb-2">
          Price info <span className="text-red-700">*</span>
        </label>
        <div className="flex gap-x-3">
          <input
            type="text"
            name="resale_price"
            required
            placeholder="Resale Price"
            className="input w-6/12 rounded-lg input-bordered add-product-input"
          />
          <input
            type="text"
            name="original_price"
            required
            placeholder="Original Price"
            className="input w-6/12 rounded-lg input-bordered add-product-input"
          />
        </div>

        <label className="text-black text-sm font-semibold -mb-2">
          Used time (in months) and product condition{" "}
          <span className="text-red-700">*</span>
        </label>
        <div className="flex gap-x-3">
          <input
            type="text"
            name="use_time"
            required
            placeholder="Used time"
            className="input w-6/12 rounded-lg input-bordered add-product-input"
          />
          <select
            name="condition"
            className="select select-bordered w-6/12 add-product-input rounded-lg"
            required
          >
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
          </select>
        </div>

        <label className="text-sm text-black font-semibold -mb-2">
          Select location <span className="text-red-700">*</span>
        </label>
        <select
          name="location"
          className="select select-bordered w-full add-product-input rounded-lg"
          required
        >
          <option value="Dhaka">Dhaka</option>
          <option value="Chattogram">Chattogram</option>
          <option value="Barishal">Barishal</option>
          <option value="Khulna">Khulna</option>
          <option value="Rajshahi">Rajshahi</option>
          <option value="Rangpur">Rangpur</option>
          <option value="Mymensingh">Mymensingh</option>
          <option value="Sylhet">Sylhet</option>
        </select>

        <label className=" text-black font-semibold -mb-2">
          Description <span className="text-red-700">*</span>
        </label>

        <textarea
          name="textarea"
          type="text"
          required
          placeholder="Please write a short description here about your product"
          className="input rounded-lg input-bordered add-product-input pt-3"
        />
        <label className=" text-black font-semibold -mb-2">
          Notice (price included or excluded)
        </label>

        <input
          name="textarea"
          type="text"
          defaultValue="Amount Inclusive of all applicable taxes!"
          placeholder="Give a short info if your resale amount is inclusive of all other expenses"
          className="input rounded-lg input-bordered add-product-input"
        />
        <br />
        <input
          className="mx-auto btn btn-primary hover:glass hover:text-primary w-3/12 rounded-full"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddAProduct;
