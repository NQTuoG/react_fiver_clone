import React from "react";
import { Link } from "react-router-dom";

const CategoryMenu = () => {
  return (
    <div className="pt-3">
      <div className="px-8 pb-3">
        <ul className="flex items-center gap-[25px] text-black font-semibold ml-[65px] pr-[32px] cursor-pointer">
          <li>
            <Link
              className="border-b-2 border-transparent hover:border-green-500 pb-1"
              to="/"
            >
              Graphics & Design
            </Link>
          </li>
          <li>
            <Link
              className="border-b-2 border-transparent hover:border-green-500 pb-1"
              to="/"
            >
              Digital Marketing
            </Link>
          </li>
          <li>
            <Link
              className="border-b-2 border-transparent hover:border-green-500 pb-1"
              to="/"
            >
              Writing & Translation
            </Link>
          </li>
          <li>
            <Link
              className="border-b-2 border-transparent hover:border-green-500 pb-1"
              to="/"
            >
              Video & Animation
            </Link>
          </li>
          <li>
            <Link
              className="border-b-2 border-transparent hover:border-green-500 pb-1"
              to="/"
            >
              Music & Audio
            </Link>
          </li>
          <li>
            <Link
              className="border-b-2 border-transparent hover:border-green-500 pb-1"
              to="/"
            >
              Programming & Tech
            </Link>
          </li>
          <li>
            <Link
              className="border-b-2 border-transparent hover:border-green-500 pb-1"
              to="/"
            >
              Business
            </Link>
          </li>
          <li>
            <Link
              className="border-b-2 border-transparent hover:border-green-500 pb-1"
              to="/"
            >
              Lifestyle
            </Link>
          </li>
          <li>
            <Link
              className="border-b-2 border-transparent hover:border-green-500 pb-1"
              to="/"
            >
              AI Services <span className="menu-new">New</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryMenu;
