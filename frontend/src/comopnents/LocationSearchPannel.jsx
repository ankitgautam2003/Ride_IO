import React from 'react'

const LocationSearchPannel = (props) => {

  // SAMPLE ARRAY OF LOCATIONS

  const locations = [
    "Location_1",
    "Location_2",
    "Location_3",
    "Location_4",
    "Location_5",
  ]

  return (
    <div>
      {/* Sample Data */}

      {
  locations.map(function (elem, index) {
    return (
      <div
        key={elem + index} // <-- Add this line
        onClick={() => {
          props.setVehiclePannel(true);
        }}
        className='flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center m-4 justify-start'
      >
        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
          <i className="ri-map-pin-fill"></i>
        </h2>
        <h4 className='font-medium'>
          {elem}
        </h4>
      </div>
    );
  })
}
  
    </div>
  )
}

export default LocationSearchPannel