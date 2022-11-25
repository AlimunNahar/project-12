import React from "react";
import { AiOutlineLock } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { GrCheckboxSelected } from "react-icons/gr";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import "../../Styles/register.css";

const SignUp = () => {
  useTitle("Signup");
  return (
    <div className="bg-gradient-to-r from-primary py-1">
      <div className="w-full text-center text-neutral-content">
        <div className="mx-10 md:mx-20 lg:w-6/12 lg:mx-auto sm:my-28 shadow-2xl bg-base-100 mix-blend-hard-light rounded-xl">
          <form className="card-body">
            <div className="mx-auto mb-2">
              <FaUserCircle className="text-5xl" />
            </div>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">Connect With Us</div>
              <p className="text-indigo-300">
                Welcome to <span className="italic">Pure Snuggle</span>
              </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="input-with-icon">
                <MdAlternateEmail className="text-cyan-500 w-8 text-lg" />
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  className="input-box"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="input-with-icon">
                <AiOutlineLock className="text-cyan-500 w-8 text-lg" />
                <input
                  type="text"
                  placeholder="password"
                  className="input-box"
                />
              </div>
            </div>
            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text">Are you a buyer or a seller?</span>
              </label>
              <div className="input-group">
                <div className="btn ">
                  <GrCheckboxSelected className="bg-cyan-500" />
                </div>
                <select className="w-11/12 select select-bordered">
                  <option disabled selected>
                    Buyer
                  </option>
                  <option>Seller</option>
                </select>
              </div>
              <label className="label">
                <Link to="/" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
              <p className="text-left my-4">
                Already have an account? &nbsp;
                <Link className="text-cyan-400 hover:underline" to="/login">
                  Login Now
                </Link>
              </p>
            </div>
          </form>
          <div className="form-control px-8">
            <hr className="divide-dashed" />
            <button className="btn glass my-5 active:bg-cyan-800">
              Login With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
