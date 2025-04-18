import React from "react";
import { Link } from "react-router-dom";

const CaptainHome = () => {
  return (
    <div className="h-screen">
      <div className="fixed  p-3 top-0 flex items-center justify-between w-screen">
        <div>
          <img
            className="w-20 mb-3"
            src="https://i.pinimg.com/736x/7f/62/86/7f62865b607e25760dd935ac4d79a8bc.jpg"
            alt=""
          />
        </div>

        <div>
          <Link
            to="/home"
            className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
          >
            <i className="ri-logout-box-r-line"></i>
          </Link>
        </div>
      </div>
      <div className="h=1/2">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="h-1/2 p-5">
        <div className="flex items-center justify-between">
          <img
            className="h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17feTdm9a5oYN2XjZ9XNfpvvGnotgAI9Jew&s"
            alt="Car"
          />
          <div className="text-right">
            <h2 className="text-lg font-semibold">Kumar</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">AK47 AP 8055</h4>
            <p className="text-sm text-gray-600">BMW</p>
          </div>
        </div>

        <div className="gap-2 flex justify-between flex-col items-center">
          <div className="w-full">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-map-pin-line"></i>
              <div>
                <h3 className="text-lg font-medium">4/931</h3>
                <p className="text-sm -mt-2 text-gray-600">Indranagar Unnao</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-3">
              <i className="text-lg ri-wallet-3-line"></i>
              <div>
                <h3 className="text-lg font-medium">$10.00</h3>
                <p className="text-sm -mt-2 text-gray-600">Cash</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            props.setVehicleFound(true);
            props.setConfirmRidePanel(false);
          }}
          className="w-full mt-5 bg-green-600 text-white p-2 rounded-full font-semibold text-lg"
        >
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default CaptainHome;
