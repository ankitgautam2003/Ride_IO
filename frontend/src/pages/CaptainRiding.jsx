import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import FinishRidePopUP from "../comopnents/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const CaptainRiding = () => {
  const [finishRidePanel, setfinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0%)",
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [finishRidePanel]);

  return (
    <div className="h-screen">
      {/* Top Nav */}
      <div className="fixed p-3 top-0 flex items-center justify-between w-screen z-20">
        <div>
          <img
            className="w-20 mb-3"
            src="https://i.pinimg.com/736x/7f/62/86/7f62865b607e25760dd935ac4d79a8bc.jpg"
            alt="Logo"
          />
        </div>
        <div>
          <Link
            to="/captain-home"
            className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
          >
            <i className="ri-home-2-line text-xl"></i>
          </Link>
        </div>
      </div>

      {/* Map / Image Section */}
      <div className="h-4/5">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Panel Trigger */}
      <div
        className="h-1/5 p-6 relative bg-yellow-400 flex items-center justify-between"
        onClick={() => setfinishRidePanel(true)}
      >
        <h5
          onClick={(e) => {
            e.stopPropagation();
            console.log("Arrow clicked");
          }}
          className="p-1 text-center w-full absolute top-0"
        >
          <i className="text-3xl text-gray-200 ri-arrow-up-s-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM Away</h4>
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log("Complete Ride clicked");
          }}
          className="bg-green-600 text-white p-3 px-8 rounded-full font-semibold text-lg"
        >
          Complete Ride.
        </button>
      </div>

      {/* Slide-Up Panel */}
      <div
        ref={finishRidePanelRef}
        className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12 w-full"
      >
        <FinishRidePopUP setfinishRidePanel={setfinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
