import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="bg cover bg-center bg-[url(https://png.pngtree.com/png-clipart/20240312/original/pngtree-car-location-3d-illustration-png-image_14567605.png)] bg-red-500 pt-8 h-screen flex justify-between flex-col">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40skIAtoMk1RZDs3klI55FtdCNeiinRc_VQ&s"
          alt="Logo"
          className="ml-8 w-16"
        />
        <div className="bg-white py-4 px-4 pb-7">
          <h2 className="flex items-center justify-center text-3xl font-bold">
            Get Start
          </h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 mt-5 rounded"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
