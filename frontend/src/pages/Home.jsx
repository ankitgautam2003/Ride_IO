import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../comopnents/LocationSearchPanel';
import ConfirmedRide from '../comopnents/ConfirmedRide';
import VehiclePanel from '../comopnents/VehiclePanel';
import LookingForDriver from '../comopnents/LookingForDriver';
import WaitngForDriver from '../comopnents/WaitingForDriver';

function Home() {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [activeField, setActiveField] = useState(null); // NEW STATE
  const vehiclePanelRef = useRef(null);
  const confirmRideRef = useRef(null);
  const panelref = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const WaitingForDriverRef = useRef(null);

  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [ConfirmRidePanel, setConfirmRidePanel] = useState(false)
  const [VehicleFound, setVehicleFound] = useState(false)
  const [WaitingForDriver, setWaitingForDriver] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelref.current, {
        height: '70%',
        duration: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
        duration: 0,
      });
    } else {
      gsap.to(panelref.current, {
        height: '0%',
        duration: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
        duration: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (ConfirmRidePanel) {
      gsap.to(confirmRideRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(confirmRideRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [ConfirmRidePanel]);

  useGSAP(() => {
    if (VehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [VehicleFound]);

  useGSAP(() => {
    if (WaitingForDriver) {
      gsap.to(WaitingForDriverRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(WaitingForDriverRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [WaitingForDriver]);


  return (
    <div className='h-screen w-screen relative overflow-hidden'>

      {/* Background image / GIF */}
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Logo */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40skIAtoMk1RZDs3klI55FtdCNeiinRc_VQ&s"
        alt="Logo"
        className="w-16 absolute left-5 top-5 z-10"
      />

      {/* Foreground Content */}
      <div className="absolute top-0 w-full h-full z-10 flex flex-col justify-end">
        <div className="h-[30%] bg-white p-5 relative">
          <h5 
            ref={panelCloseRef} 
            onClick={() => setPanelOpen(false)}
            className='absolute opacity-0 right-6 top-6 text-2xl cursor-pointer'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          
          <h4 className="text-xl font-bold pb-5">
            Find your ride with us!
          </h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[42%] left-7 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {
                setActiveField('pickup');
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mb-2"
              type="text"
              placeholder="Add a PickUp Location"
            />
            <input
              onClick={() => {
                setActiveField('destination');
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-2"
              type="text"
              placeholder="Add Destination"
            />
          </form>
        </div>

        <div
          ref={panelref}
          className="bg-white overflow-hidden transition-all duration-500"
        >
          <LocationSearchPanel 
            vehiclePanel={vehiclePanel}
            setVehiclePanel={setVehiclePanel}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
            setPanelOpen={setPanelOpen}
          />
        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12 w-full'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>

      <div ref={confirmRideRef} className='fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12 w-full'>
        <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={vehicleFoundRef} className='fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12 w-full'>
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={WaitingForDriverRef} className='fixed z-10 bottom-0 bg-white px-3 py-6 pt-12 w-full'>
        <WaitngForDriver WaitingForDriver={WaitingForDriver}/>
      </div>
    </div>
  );
}

export default Home;
