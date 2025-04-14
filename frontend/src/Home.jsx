import React from 'react'

function Home() {
  return (
    <div className='h-screen relative'>
      <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40skIAtoMk1RZDs3klI55FtdCNeiinRc_VQ&s" 
          alt="Logo" 
          className='w-16 absolute left-5, top-5' 
        />

        <div>
          <img src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="temp" 
          className='h-screen w-screen'
          />
        </div>

        <div className='bg-white absolute bottom-0 w-full p-5'>
          <h4 className='text-2xl font-semibold'>
              Find your perfect ride with us!
          </h4>
          <form >
              <input className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mb-2' type="text" placeholder='Add a PickUp Location' />
              <input className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-2' type="text" placeholder='Add Destination'/>
          </form>
        </div>
    </div>
  )
}

export default Home