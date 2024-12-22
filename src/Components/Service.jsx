import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

const Service = () => {
  return (
    <div id="services" className="mt-7 mx-auto min-h-screen scroll-mt-20 bg-purple-100 ">

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

<div>
    <h1 className='uppercase text-2xl text-red-500 mb-4 mt-5
    font-bold font-space text-center'>what we do</h1>
  </div>
  <div className="mx-auto w-3/4 md:w-full md:flex md:flex-row justify-between items-center gap-8">

  {/* Text Section */}
  {/* Service List - Cards */}
  
  <div className="md:grid grid-cols-3 gap-6 md:px-9 ">
        {/* Home Lifts Card */}
        <div className="service-card text-center bg-blue-900 p-6 
        rounded-lg shadow-xl sm: mb-2 md:mb-0" data-aos="fade-down" data-aos-delay="">
          <h3 className="text-2xl font-roboto font-bold text-white mb-3">Home Lifts</h3>
          <p className=" mb-4 text-white font-roboto">Enhance your living space with our custom-designed home lifts, combining convenience, style, and efficiency.</p>
        </div>

        {/* Goods Lifts Card */}
        <div className="service-card text-center bg-red-400 p-6 rounded-lg shadow-lg sm:
         mb-2 md:mb-0" data-aos="fade-up">
          <h3 className="text-2xl font-roboto text-blue-800 font-bold mb-3">Goods Lifts</h3>
          <p className="text-white mb-4 font-roboto">Reliable goods lifts designed to carry heavy items safely and efficiently, optimizing your operations.</p>
        </div>

        {/* Walkways Card */}
        <div className="service-card text-center bg-yellow-300 p-6 
        rounded-lg shadow-lg sm: mb-2 md:mb-0" data-aos="fade-up">
          <h3 className="text-2xl font-roboto text-blue-800 font-bold mb-3">Walkways</h3>
          <p className="text-gray-600 mb-4 font-roboto">Designing and building smooth and reliable walkways for convenience and safety in various environments.</p>
        </div>

        {/* Dumbwaiters Card */}
        <div className="service-card text-center bg-yellow-300 p-6 rounded-lg 
        shadow-lg sm: mb-2 md:mb-0" data-aos="fade-up">
          <h3 className="text-2xl font-roboto text-blue-800 font-bold mb-3">Dumbwaiters</h3>
          <p className="text-gray-600 mb-4 font-roboto">Simplify the movement of goods between floors with our easy-to-install and efficient dumbwaiters.</p>
        </div>

        {/* Lift Maintenance Card */}
        <div className="service-card text-center bg-red-400 p-6 rounded-lg shadow-lg 
        sm: mb-2 md:mb-0" data-aos="fade-up">
          <h3 className="text-2xl font-roboto text-white font-bold mb-3">Lift Maintenance</h3>
          <p className="text-white mb-4 font-roboto">Keep your lifts operating smoothly with our reliable maintenance services designed to ensure longevity and efficiency.</p>
        </div>

        {/* Lift Repair Card */}
        <div className="service-card text-center bg-yellow-300 p-6 rounded-lg shadow-lg 
        sm: mb-2 md:mb-0" data-aos="fade-up">
        
          <h3 className="text-2xl font-roboto text-blue-800 font-bold mb-3">Lift Repair</h3>
          <p className="text-gray-600 mb-4 font-roboto">Fast and efficient lift repair services to minimize downtime and ensure safety and functionality.</p>
        </div>

        {/* Lift Modernization Card */}
        <div className="service-card text-center bg-red-300  p-6 rounded-lg shadow-lg 
        sm: mb-2 md:mb-4" data-aos="fade-up">
          <h3 className="text-2xl font-roboto text-blue-800 font-bold mb-5">Lift Modernization</h3>
          <p className="text-white mb-4 font-roboto">Upgrade your existing lifts with the latest technology, enhancing performance, energy efficiency, and safety.</p>
        </div>
      </div>

  
  {/* Image Section *  <div className="w-full md:w-1/2 order-1 md:order-2">
  <img 
    src="/escalator.png" 
    alt="Profile" 
    className="max-w-full h-auto" 
    style={{
      filter:  "grayscale(100%) brightness(100%)"
    }}
  />
</div>*/}

</div>


    </div>
  )
}

export default Service
