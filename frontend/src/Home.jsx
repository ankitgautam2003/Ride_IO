import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPannel from './comopnents/LocationSearchPannel';

function Home() {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePannelRef = useRef(null)
  const panelref = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePannel, setVehiclePannel] = useState(false);

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
  
  useGSAP (function (){
    if (vehiclePannel) {
      gsap.to(vehiclePannelRef.current, {
        transform: 'translateY(0)',
      })
    }
    else{
      gsap.to(vehiclePannelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }),[vehiclePannel]

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
            ref={panelCloseRef} onClick={() => {
              setPanelOpen(false)
            }} 
            className='absolute opacity-0 right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          
          <h4 className="text-xl font-bold pb-5">
            Find your ride with us!
          </h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[42%] left-7 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mb-2"
              type="text"
              placeholder="Add a PickUp Location"
            />
            <input
              onClick={() => setPanelOpen(true)}
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
          <LocationSearchPannel 
            vehiclePannel={vehiclePannel} 
            setVehiclePannel={setVehiclePannel}
          />
        </div>

      </div>

      <div ref={vehiclePannelRef} className='fixed z-10 bottom-0 translate-y-full bg-white px-3 py-8 w-full'>
        <h3 className='text-2xl font-bold mb-5'>
          Select Vehicle
        </h3>
        <div className='flex border-2 mb-2 active:border-black bg-gray-100 rounded-xl w-full p-3 items-center justify-between '>
            <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17feTdm9a5oYN2XjZ9XNfpvvGnotgAI9Jew&s" alt="Car" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>
                Car
                <span>
                  <i className="ri-user-3-fill"></i>
                  4
                </span>
              </h4>
              <h5 className='font-medium text-sm'>
                2 Min away
                <p className='font-normal text-xs text-gray-600'>
                  Comfortable ride.
                </p>
              </h5>
            </div>
            <h2 className='text-xl font-semibold'>
              $10.00
            </h2>
        </div>

        <div className='flex border-2 mb-2 active:border-black bg-gray-100 rounded-xl w-full p-3 items-center justify-between '>
            <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNWvhbkBYGxCl11RrwJz6ODzDeEx8D3mFHtQ&s" alt="Bike" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>
                Bike
                <span>
                  <i className="ri-user-3-fill"></i>
                  1
                </span>
              </h4>
              <h5 className='font-medium text-sm'>
                3 Min away
                <p className='font-normal text-xs text-gray-600'>
                  Affordable and Mot1r ride.
                </p>
              </h5>
            </div>
            <h2 className='text-xl font-semibold'>
              $5.00
            </h2>
        </div>

        <div className='flex border-2 mb-2 active:border-black bg-gray-100 rounded-xl w-full p-3 items-center justify-between '>
            <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGB32WvG3IcEMl95g3Fc91JLGtdPX9KVcmw&s" alt="Auto" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>
                Auto
                <span>
                  <i className="ri-user-3-fill"></i>
                  3
                </span>
              </h4>
              <h5 className='font-medium text-sm'>
                2 Min away
                <p className='font-normal text-xs text-gray-600'>
                  Affordable and comfortable ride.
                </p>
              </h5>
            </div>
            <h2 className='text-xl font-semibold'>
              $7.00
            </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
