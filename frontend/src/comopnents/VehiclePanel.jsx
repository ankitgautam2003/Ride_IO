import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setVehiclePanel(false)}
        className="p-1 text-center w-[90%] absolute top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-s-line"></i>
      </h5>

      <h3 className="text-2xl font-bold mb-5">Select Vehicle</h3>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanel(false);
        }}
        className="flex border-2 mb-2 active:border-black bg-gray-100 rounded-xl w-full p-3 items-center justify-between "
      >
        <img
          className="h-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17feTdm9a5oYN2XjZ9XNfpvvGnotgAI9Jew&s"
          alt="Car"
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-lg">
            Car
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">
            2 Min away
            <p className="font-normal text-xs text-gray-600">
              Comfortable ride.
            </p>
          </h5>
        </div>
        <h2 className="text-xl font-semibold">$10.00</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanel(false);
        }}
        className="flex border-2 mb-2 active:border-black bg-gray-100 rounded-xl w-full p-3 items-center justify-between "
      >
        <img
          className="h-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNWvhbkBYGxCl11RrwJz6ODzDeEx8D3mFHtQ&s"
          alt="Bike"
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-lg">
            Bike
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">
            3 Min away
            <p className="font-normal text-xs text-gray-600">
              Affordable and Mot1r ride.
            </p>
          </h5>
        </div>
        <h2 className="text-xl font-semibold">$5.00</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanel(false);
        }}
        className="flex border-2 mb-2 active:border-black bg-gray-100 rounded-xl w-full p-3 items-center justify-between "
      >
        <img
          className="h-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGB32WvG3IcEMl95g3Fc91JLGtdPX9KVcmw&s"
          alt="Auto"
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-lg">
            Auto
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">
            2 Min away
            <p className="font-normal text-xs text-gray-600">
              Affordable and comfortable ride.
            </p>
          </h5>
        </div>
        <h2 className="text-xl font-semibold">$7.00</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
