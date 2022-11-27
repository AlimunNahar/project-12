import React from "react";
import { Link } from "react-router-dom";

const ExtraHomeSection = () => {
  return (
    <div className="-mx-5">
      <div className="card lg:card-side bg-primary shadow-xl">
        <div className="py-8 md:my-auto lg:my-auto px-6 text-center lg:w-6/12">
          <h2 className="text-5xl mb-2 font-bold ">
            Furnish forward
            <br /> and sustain forests
          </h2>
          <p className="mt-6">
            We'll plant a tree through the National Forest
            <br /> Foundation for every order completed on Pure Snuggle.
          </p>
          <Link to="/blog">
            <button className="mt-8 btn btn-primary glass hover:btn-accent">
              Know More About Us
            </button>
          </Link>
        </div>
        <figure className="w-full lg:w-6/12">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/196/892/8/modern-green-sofa-wallpaper-preview.jpg"
            alt="home_image"
          />
        </figure>
      </div>
      <div className="bg-white text-black text-center py-5">
        <h2 className="text-5xl font-bold">4,001,419</h2>
        <p className="text-xl mt-3 font-semibold">
          pounds of furniture kept out of landfills, thanks to you{" "}
          <span>❤️</span>
        </p>
      </div>
    </div>
  );
};

export default ExtraHomeSection;
