import React from "react";
import "./Mybanner.scss";
import WrapperSuggestJob from "../Wrapper/WrapperSuggestJob";
import FormSeachProduct from "../Form/FormSeachProduct";
const Mybanner = () => {
  return (
    <div className="">
      <div className="banner">
        <div className="container">
          <div className=" content">
            <h1>
              Find the perfect <i>freelance</i> services for your business
            </h1>
            <div className="search">
              <FormSeachProduct />
            </div>

            <div className="popular">
              <span>Trusted by:</span>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.ff37dd3.svg"
                alt="meta"
                width="70"
                height="14"
              ></img>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.e74f4d9.svg"
                alt="Google"
                width="53.41"
                height="17.87"
              ></img>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.b310314.svg"
                alt="NETFLIX"
                width="53.64"
                height="14.37"
              ></img>

              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pg.22fca85.svg"
                alt="P&amp;G"
                width="33.13"
                height="13.8"
              ></img>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.d398de5.svg"
                alt="PayPal"
                width="53.01"
                height="12.69"
              ></img>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/payoneer.7c1170d.svg"
                alt="Payoneer"
                width="82.42"
                height="16"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mybanner;
