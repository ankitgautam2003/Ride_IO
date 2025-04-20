import React from "react";

const CaptainDetail = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-start justify-start gap-3">
          <img
            className="h-10 w-10 mb-3 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9NVBIOk_blWPFbW7lJfwX3FNO6jMIsDdZg&s"
            alt="Captain Pic"
          />
          <h4 className="text-lg font-medium">Kumar</h4>
        </div>
        <div>
          <h4 className="text-lg font-semibold">10$</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>

      <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-10 items-start">
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-timer-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-speed-up-fill"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetail;
