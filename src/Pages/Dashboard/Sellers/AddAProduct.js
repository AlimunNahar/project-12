import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import "../../../Styles/style.css";
import { useNavigate } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import Navbar from "../../Shared/Navbar/Navbar";

const AddAProduct = () => {
  useTitle("AddProduct");
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const date = new Date().toDateString().split(" ");
  const post_time = [date[2], date[1], date[3]].join(" ");

  const handleAddProduct = (data) => {
    const product = {
      category_name: data.category_name,
      product_name: data.product_name,
      img: data.img,
      location: data.location,
      resale_price: data.resale_price,
      original_price: data.original_price,
      use_time: data.use_time,
      post_time,
      seller_name: user?.displayName,
      seller_email: user?.email,
      description: data.description,
      code: data.code,
      notice: data.notice,
    };

    fetch("https://puresnuggle-server.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Product added successfully");
          reset();
          navigate("/myProducts");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div className="">
        <div className="divider text-cyan-400 text-3xl mt-8 mx-20">
          Add A New Product
        </div>
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="grid grid-cols-1 gap-3 py-10 lg:mx-auto w-full lg:w-6/12 background  px-8 my-10 rounded-lg"
        >
          <div className="divider text-primary font-bold text-lg -mb-2">
            Seller Info
          </div>
          <label className="text-sm text-black font-semibold -mb-2">
            Email
          </label>
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
            {...register("phone")}
            className="input w-full input-bordered rounded-lg add-product-input"
          />

          <div className="divider text-primary font-bold text-lg -mb-2">
            Product Info
          </div>

          <label className="text-black font-semibold -mb-2">
            Select a category <span className="text-red-700">*</span>
          </label>

          <select
            className="select select-bordered w-full add-product-input rounded-lg"
            {...register("category_name", {
              required: "Category name is required",
            })}
          >
            <option value="Antique Furniture">Antique Furniture</option>
            <option value="Vintage Furniture">Vintage Furniture</option>
            <option value="French Furniture">French Furniture</option>
            <option value="Industrial Furniture">Industrial Furniture</option>
          </select>
          <label>
            {errors.category_name && (
              <p className="text-red-500 text-sm">
                {errors.category_name?.message}
              </p>
            )}
          </label>

          <label className="text-black text-sm font-semibold -mb-2">
            Product code & name <span className="text-red-700">*</span>
          </label>
          <div className="flex gap-x-3">
            <input
              type="text"
              {...register("code", {
                required: "Code is required",
              })}
              placeholder="Code: SKU_HGRT-543"
              className="input w-2/5 rounded-lg input-bordered add-product-input"
            />
            <input
              type="text"
              {...register("product_name", {
                required: "Product name is required",
              })}
              placeholder="Product name"
              className="input w-full rounded-lg input-bordered add-product-input"
            />
          </div>
          <label>
            {errors.code && (
              <p className="text-red-500 text-sm">{errors.code?.message}</p>
            )}
          </label>
          <label>
            {errors.product_name && (
              <p className="text-red-500 text-sm">
                {errors.product_name?.message}
              </p>
            )}
          </label>
          <label className="text-black text-sm font-semibold -mb-2">
            Product Image link <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            {...register("img", {
              required: "Image URL is required",
            })}
            placeholder="Image URL"
            className="input w-full rounded-lg input-bordered add-product-input"
          />
          <label>
            {errors.img && (
              <p className="text-red-500 text-sm">{errors.img?.message}</p>
            )}
          </label>

          <label className="text-black text-sm font-semibold -mb-2">
            Price info <span className="text-red-700">*</span>
          </label>
          <div className="flex gap-x-3">
            <input
              type="text"
              {...register("resale_price", {
                required: "resale price is required",
              })}
              placeholder="Resale Price"
              className="input w-6/12 rounded-lg input-bordered add-product-input"
            />
            <input
              type="text"
              {...register("original_price", {
                required: "original price is required",
              })}
              placeholder="Original Price"
              className="input w-6/12 rounded-lg input-bordered add-product-input"
            />
          </div>
          <label>
            {errors.resale_price && (
              <p className="text-red-500 text-sm">
                {errors.resale_price?.message}
              </p>
            )}
          </label>
          <label>
            {errors.original_price && (
              <p className="text-red-500 text-sm">
                {errors.original_price?.message}
              </p>
            )}
          </label>

          <label className="text-black text-sm font-semibold -mb-2">
            Used time (in months) and product condition{" "}
            <span className="text-red-700">*</span>
          </label>
          <div className="flex gap-x-3">
            <input
              type="text"
              {...register("use_time", {
                required: "Use time price is required",
              })}
              placeholder="Used time"
              className="input w-6/12 rounded-lg input-bordered add-product-input"
            />

            <select
              className="select select-bordered w-6/12 add-product-input rounded-lg"
              {...register("condition", {
                required: "condition is required",
              })}
            >
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
            </select>
          </div>
          <label>
            {errors.use_time && (
              <p className="text-red-500 text-sm">{errors.use_time?.message}</p>
            )}
          </label>

          <label>
            {errors.condition && (
              <p className="text-red-500 text-sm">
                {errors.condition?.message}
              </p>
            )}
          </label>

          <label className="text-sm text-black font-semibold -mb-2">
            Select location <span className="text-red-700">*</span>
          </label>
          <select
            {...register("location", {
              required: "Location is required",
            })}
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
          <label>
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location?.message}</p>
            )}
          </label>

          <label className=" text-black font-semibold -mb-2">
            Description <span className="text-red-700">*</span>
          </label>

          <textarea
            type="text"
            {...register("description", {
              required: "description is required",
            })}
            placeholder="Please write a short description here about your product"
            className="input rounded-lg input-bordered add-product-input pt-3"
          />
          <label>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description?.message}
              </p>
            )}
          </label>

          <label className=" text-black font-semibold -mb-2">
            Notice (price included or excluded)
          </label>

          <input
            name="notice"
            type="text"
            {...register("notice")}
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
    </div>
  );
};

export default AddAProduct;
