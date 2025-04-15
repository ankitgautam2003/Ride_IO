import React from 'react';

const LocationSearchPanel = ({
  setVehiclePanel,
  setPickup,
  setDestination,
  activeField,
  setPanelOpen
}) => {
  const locations = [
    "Location_1",
    "Location_2",
    "Location_3",
    "Location_4",
    "Location_5",
  ];

  const handleLocationClick = (location) => {
    if (activeField === 'pickup') {
      setPickup(location);
    } else if (activeField === 'destination') {
      setDestination(location);
    }
    setPanelOpen(false);
    setVehiclePanel(true);
  };

  return (
    <div>
      {locations.map((elem,index) => (
        <div
          key={index}
          onClick={() => handleLocationClick(elem)}
          className='flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center m-4 justify-start cursor-pointer'
        >
          <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className='font-medium'>
            {elem}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
