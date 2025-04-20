import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import CaptainDetail from "../comopnents/CaptainDetail";
import RidePopUp from "../comopnents/RidePopUp";
import ConfirmRidePopUp from "../comopnents/ConfirmRidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainHome = () => {
  const [ridePopUpPanel, setridePopUpPanel] = useState(true);
  const [confirmRidePopUpPanel, setconfirmRidePopUpPanel] = useState(false);
  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopUpPanelRef = useRef(null);

  useGSAP(() => {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        transform: "translateY(0)", // or "100%"
      });
    } else {
      gsap.to(ridePopUpPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopUpPanel]);

  useGSAP(() => {
    if (confirmRidePopUpPanel) {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: "translateY(0)", // or "100%"
      });
    } else {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePopUpPanel]);

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
            to="/captain-login"
            className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
          >
            <i className="ri-logout-box-r-line"></i>
          </Link>
        </div>
      </div>
      <div className="h-3/5">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="h-2/5 p-6">
        <CaptainDetail />
      </div>
      <div
        ref={ridePopUpPanelRef}
        className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12 w-full"
      >
        <RidePopUp
          setridePopUpPanel={setridePopUpPanel}
          setconfirmRidePopUpPanel={setconfirmRidePopUpPanel}
        />
      </div>

      <div
        ref={confirmRidePopUpPanelRef}
        className="h-screen fixed z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12 w-full"
      >
        <ConfirmRidePopUp
          setconfirmRidePopUpPanel={setconfirmRidePopUpPanel}
          setridePopUpPanel={setridePopUpPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
