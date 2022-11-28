import React, { useContext } from "react";
import useTitle from "../../Hooks/useTitle";
import "../../Styles/style.css";
import { FaUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useForm } from "react-hook-form";

const Login = () => {
  useTitle("Login");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn, providerLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Login with email/password
  const handleLogin = (data) => {
    // console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // google signin
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = (event) => {
    event.preventDefault();
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        const socialUser = {
          name: user.displayName,
          email: user.email,
          role: "buyer",
          image: user.photoURL,
        };
        if (user) {
          fetch("https://puresnuggle-server.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(socialUser),
          })
            .then((res) => res.json())
            .then((result) => {
              // console.log(result);
              navigate(from, { replace: true });
            });
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/004/365/884/original/empty-white-wooden-wall-on-wooden-floor-interior-design-3d-rendering-free-photo.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="w-full text-center text-neutral-content">
        <div className="mx-10 md:mx-20 lg:w-6/12 lg:mx-auto sm:my-28 shadow-2xl bg-base-100 rounded-xl">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <div className="mx-auto mb-2">
              <FaUserCircle className="text-5xl" />
            </div>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">Login</div>
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
              <label>
                {errors.email && (
                  <p className="text-red-500 text-sm">
                    {errors.email?.message}
                  </p>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="input-with-icon">
                <AiOutlineLock className="text-cyan-500 w-8 text-lg" />
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longer",
                    },
                  })}
                  placeholder="password"
                  className="input-box"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password?.message}
                </p>
              )}

              <label className="label">
                <Link href="/login" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
              <p className="text-left my-4">
                Don't have an account? &nbsp;
                <Link className="text-cyan-400 hover:underline" to="/signup">
                  Sign up now
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

export default Login;
