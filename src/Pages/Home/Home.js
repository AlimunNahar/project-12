import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import Loading from "../Shared/Loading/Loading";
import Navbar from "../Shared/Navbar/Navbar";
import AdvertisedProducts from "./AdvertisedProducts";
import Banner from "./Banner";
import CategoryCards from "./CategoryCards";
import ExtraHomeSection from "./ExtraHomeSection";

const Home = () => {
  useTitle("Home");

  const [categories, setCategories] = useState([]);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("https://puresnuggle-server.vercel.app/categories")
      .then((res) => setCategories(res.data))
      .catch((error) => console.error(error));
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Navbar />
      <div className="mx-5">
        <Banner />
        <div>
          <div className="divider text-3xl my-8 mt-20 text-cyan-500">
            Categories
          </div>

          <p className="text-center italic mb-10">
            Give your home a second chance & decorate the home
            <br />
            with the beautiful creation of wood
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {categories.map((category) => (
              <CategoryCards key={category._id} category={category} />
            ))}
          </div>

          {/* advertised section  */}
          <AdvertisedProducts />
        </div>
        <ExtraHomeSection />
      </div>
    </div>
  );
};

export default Home;
