import React from "react";

const Banner = () => {
  return (
    <div className="carousel h-[35rem]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="http://admin.hatimfurniturebd.com/images/others/hatim-furniture-offer.jpg"
          className="w-full object-fill"
          alt="banner_image"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://hatil.com/sites/default/files/Best-Furniture-Dining-Hatil_1.jpg"
          className="w-full object-fill"
          alt="banner_image"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://craftykart.in/wp-content/uploads/2022/06/Lumii_20200330_1344533791.jpg"
          className="w-full object-fill"
          alt="banner_image"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://cdn.shopify.com/s/files/1/1990/4055/products/sidevg_2000x.jpg?v=1624272088"
          className="w-full object-fill"
          alt="banner_image"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
