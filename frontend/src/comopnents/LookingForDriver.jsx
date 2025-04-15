import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
          onClick={() => props.setVehicleFound(false)} 
          className='p-1 text-center w-[90%] absolute top-0'>
          <i className="text-3xl text-gray-200 ri-arrow-down-s-line"></i>
        </h5>

        <h3 className='text-2xl font-bold mb-5 mt-5'>
          Searching For Captain.
        </h3>

      <div className='gap-2 flex justify-between flex-col items-center'>
        <img className='h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17feTdm9a5oYN2XjZ9XNfpvvGnotgAI9Jew&s" alt="Car" />

        <div className='w-full'>
          

          <div className='flex items-center gap-5 p-3 border-b-2'>
          <i className="text-lg ri-map-pin-2-line"></i>
            <div>
              <h3 className='text-lg font-medium'>
                4/931
              </h3>
              <p className='text-sm -mt-2 text-gray-600'>
                Indranagar Unnao
              </p>
            </div>
          </div>

          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className='text-lg font-medium'>
                4/931
              </h3>
              <p className='text-sm -mt-2 text-gray-600'>
                Indranagar Unnao
              </p>
            </div>
          </div>

          <div className='flex items-center gap-5 p-3'>
          <i className="text-lg ri-wallet-3-line"></i>
            <div>
              <h3 className='text-lg font-medium'>
                $10.00
              </h3>
              <p className='text-sm -mt-2 text-gray-600'>
                Cash
              </p>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default LookingForDriver