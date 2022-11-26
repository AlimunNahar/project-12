import React, { useContext, useState } from "react";
import { AiOutlineLock } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { GrCheckboxSelected } from "react-icons/gr";
import { BiLink, BiUser } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import "../../Styles/register.css";
import { AuthContext } from "../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SignUp = () => {
  useTitle("Signup");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { createUser, providerLogin, updateUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Create new user
  const handleSignUp = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        handleUpdateUserProfile(data.name, data.photoURL);

        // object to store to usersCollection
        const users = {
          name: data.name,
          email: data.email,
          role: data.role,
          image: data.photoURL,
        };

        if (user) {
          // send to DB
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(users),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("User created successfully");
              reset();
              navigate(from, { replace: true });
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // update displayName and photoURL
  const handleUpdateUserProfile = (name, photoURL) => {
    const userInfo = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUser(userInfo)
      .then(() => {})
      .catch((e) => console.log(e));
  };

  // google login
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = (event) => {
    event.preventDefault();

    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        if (user) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-gradient-to-r from-primary py-1">
      <div className="w-full text-center text-neutral-content">
        <div className="mx-10 md:mx-20 lg:w-6/12 lg:mx-auto sm:my-28 shadow-2xl bg-base-100 mix-blend-hard-light rounded-xl">
          <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider text-2xl">SIGN UP</div>
              <p className="text-indigo-300">
                Welcome to <span className="italic">Pure Snuggle</span>
              </p>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <div className="input-with-icon">
                <BiUser className="text-cyan-500 w-8 text-lg" />
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="full name"
                  className="input-box"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name?.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <div className="input-with-icon">
                <BiLink className="text-cyan-500 w-8 text-lg" />
                <input
                  type="text"
                  {...register("photoURL", {
                    required: "PhotoURL is required",
                  })}
                  placeholder="photo url"
                  className="input-box"
                />
              </div>
              {errors.photoURL && (
                <p className="text-red-500 text-sm">
                  {errors.photoURL?.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="input-with-icon">
                <MdAlternateEmail className="text-cyan-500 w-8 text-lg" />
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="example@gmail.com"
                  className="input-box"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="input-with-icon">
                <AiOutlineLock className="text-cyan-500 w-8 text-lg" />
                <input
                  type="password"
                  placeholder="password"
                  className="input-box"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longer",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        "Password must have uppercase, number and special characters",
                    },
                  })}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text">Are you a buyer or a seller?</span>
              </label>
              <div className="input-group">
                <div className="btn ">
                  <GrCheckboxSelected className="bg-cyan-500" />
                </div>
                <select
                  {...register("role")}
                  defaultValue="buyer"
                  className="w-11/12 select select-bordered"
                >
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
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
              <p className="text-left mt-4">
                Already have an account? &nbsp;
                <Link className="text-cyan-400 hover:underline" to="/login">
                  Login Now
                </Link>
              </p>
            </div>
          </form>
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">Other Sign up option</div>
          </div>
          <div className="form-control px-8">
            <button
              onClick={handleGoogleSignIn}
              className="btn glass my-5 active:bg-cyan-800"
            >
              Login With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
