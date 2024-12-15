import React from 'react'

const Service = () => {
  return (
    <div id="services" className="mt-7 mx-auto min-h-screen bg-yellow-100">

      <div>
        <h1 className='text-red-500 font-space text-2xl uppercase 
        font-bold ml-9 mb-7 text-left'>
          Our Services</h1>
          <p className='font-space capitalize font-bold text-blue-800 text-6xl ml-9  mb-7 mt-4'> lift 
            solutions
            <br/> 
              <span className='font-protest text-lg font-light text-black'>Tailored Perfectly</span>
          </p>
      </div>

<div className='md:flex flex-row justify-between items-start'>
  {/* Left Content Section */}
  <div className='md:w-1/2 p-4'>
    {/* Content Blocks */}
    <div className='text-center '>
      <p className='text-red-500 opacity-50 text-8xl font-protest'>01</p>
      <h2 className='text-2xl mt-3 mb-3 font-bold font-roboto text-blue-800'>Design & Building</h2>
      <p className=' font-roboto text-gray-600'>"At Fujico Technologies, we specialize in designing and building state-of-the-art lifts that combine precision engineering with modern aesthetics."</p>
      
      <p className='text-red-300 opacity-50 text-8xl font-protest'>02</p>
      <h2 className='text-2xl font-roboto mt-3 mb-3 font-bold text-blue-800'>Remodelling</h2>
      <p className='font-roboto text-gray-600 '>We design, build, and remodel lifts with precision engineering and modern aesthetics. Our customized solutions deliver reliability and seamless performance for every project.</p>
      
      <p className='text-red-300 opacity-50 text-8xl font-protest'>03</p>
      <h2 className='text-2xl font-roboto mt-3 mb-3 font-bold text-blue-800'>Reliability</h2>
      <p className='font-roboto text-gray-600'>With our focus on precision and innovation, our solutions guarantee consistent performance and superior quality for every project.</p>
      
      <p className='text-red-300 opacity-50 text-8xl font-protest'>04</p>
      <h2 className='text-2xl font-roboto mt-3 mb-3 font-bold text-blue-800'>Safety</h2>
      <p className='font-roboto text-gray-600'>Our solutions prioritize top-tier safety standards and seamless performance in every project.</p>
      
      <p className='text-red-300 opacity-50 text-8xl font-protest'>05</p>
      <h2 className='text-2xl font-roboto mt-3 mb-3 font-bold text-blue-800'>Trusted Partner</h2>
      <p className='font-roboto text-gray-600'>Fujico Technologies is your trusted partner for lift design, construction, and remodeling. We bring innovation and precision to every project, ensuring quality you can rely on.</p>
    </div>
  </div>

  {/* Right Image Section */}
  <div className='md:w-full p-4 flex flex-col items-center'>
    <img src="/Generator.png" alt="Profile" className='max-w-full h-auto' />
    <img src="/Generator-2.png" alt="Profile" className='max-w-full h-auto' />
  </div>
</div>




    </div>
  )
}

export default Service
