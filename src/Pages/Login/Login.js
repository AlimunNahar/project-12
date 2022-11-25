import React from "react";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
  useTitle("Login");
  return (
    <div className="bg-[url('https://img.freepik.com/premium-photo/modern-home-decoration-mock-up-furniture-interior-design-minimal-living-room-black-wall-texture-background-3d-rendering_221619-942.jpg')] object-cover">
      <h2>Login</h2>
    </div>
  );
};

export default Login;
