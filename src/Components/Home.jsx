import React, {useState} from 'react';

import { IoChevronBackCircle } from "react-icons/io5";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { VscLaw } from "react-icons/vsc";
import { FaCogs } from 'react-icons/fa';
import { FaHelmetUn } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";

const Home = () => {

  const images = [
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsJTIwcHJvamVjdHN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwcHJvamVjdHN8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1661964178554-cb583b357dd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBwcm9qZWN0c3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvdGVsJTIwcHJvamVjdHN8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1661962950572-61c3b7b4d5ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnRzJTIwcHJvamVjdHN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1547630824-eed1be6a27b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVsZXZhdG9yJTIwcHJvamVjdHN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1684466198117-f589d2a4edde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxldmF0b3IlMjBwcm9qZWN0c3xlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661277672864-6a57b90858d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVsZXZhdG9yfGVufDB8fDB8fHww',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle previous image
  const goBack = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  // Handle next image
  const goForward = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex >= images.length - 3 ? 0 : prevIndex + 1
    );
  };


  return (
    <div className=''>
      <div className=''>
        {/* Image with opacity, shown on all screen sizes */}
        <img className='w-full h-auto md:h-1/2' src="/Fujico.jpg" alt="Description" />
        
        {/* Text over image (only visible on small screens) */}
        <div className='w-3/4 mx-auto flex flex-col justify-center mb-4 '>
        <img className='w-full h-auto md:hidden' src="/Image-2.jpg" alt="Description" />
          <h1 className='font-protest  text-6xl text-blue-800 mb-5 text-center'>Rising Higher</h1>
          <p className='font-protest mb-5 text-center'>Expert lift Installation, Service, and Maintenance</p>
        </div>
      </div>

      

      {/* Other content */}
      <div className='md:flex flex-row justify-between items-start'>
  {/* Left Content Section */}
  <div className='md:w-1/2 p-4'>
    {/* Content Blocks */}
    <div className='text-center '>
      <p className='text-red-300 opacity-50 text-8xl font-protest'>01</p>
      <h2 className='text-2xl mt-3 mb-3 font-bold font-roboto text-blue-800'>Design & Building</h2>
      <p className='font-light'>"At Fujico Technologies, we specialize in designing and building state-of-the-art lifts that combine precision engineering with modern aesthetics."</p>
      
      <p className='text-red-300 opacity-50 text-8xl font-protest'>02</p>
      <h2 className='text-2xl font-roboto mt-3 mb-3 font-bold text-blue-800'>Remodelling</h2>
      <p className='font-light'>We design, build, and remodel lifts with precision engineering and modern aesthetics. Our customized solutions deliver reliability and seamless performance for every project.</p>
      
      <p className='text-red-300 opacity-50 text-8xl font-protest'>03</p>
      <h2 className='text-2xl font-roboto mt-3 mb-3 font-bold text-blue-800'>Reliability</h2>
      <p className='font-light'>With our focus on precision and innovation, our solutions guarantee consistent performance and superior quality for every project.</p>
      
      <p className='text-red-300 opacity-50 text-8xl font-protest'>04</p>
      <h2 className='text-2xl font-roboto mt-3 mb-3 font-bold text-blue-800'>Safety</h2>
      <p className='font-light'>Our solutions prioritize top-tier safety standards and seamless performance in every project.</p>
      
      <p className='text-red-300 opacity-50 text-8xl font-protest'>05</p>
      <h2 className='text-2xl font-roboto mt-3 mb-3 font-bold text-blue-800'>Trusted Partner</h2>
      <p className='font-light'>Fujico Technologies is your trusted partner for lift design, construction, and remodeling. We bring innovation and precision to every project, ensuring quality you can rely on.</p>
    </div>
  </div>

  {/* Right Image Section */}
  <div className='md:w-full p-4 flex flex-col items-center'>
    <img src="/Generator.png" alt="Profile" className='max-w-full h-auto' />
    <img src="/Generator-2.png" alt="Profile" className='max-w-full h-auto' />
  </div>
</div>

<div className='mt-8 '>
  <div>
    <h1 className='text-6xl text-center  font-protest text-blue-800  mb-5'>Our Projects</h1>
    <p className='mb-7 font-protest text-center '>"We take pride in our rich experience, having successfully delivered 
      projects both locally and internationally—including in Mogadishu and 
      Ethiopia—demonstrating 
      our commitment to excellence and innovation on a global scale."</p>
  </div>
  <div className="relative w-full flex items-center justify-center">
      {/* Display only the current image */}
      <div className="flex overflow-hidden w-3/4 md:w-full justify-center">
          {images.slice(currentImageIndex, currentImageIndex + 3).map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index}`} className="w-full object-cover
             p-2   mb-8"/>
          ))}
        </div>

      {/* Navigation icons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-around md:justify-between transform -translate-y-1/2 px-4">
        <IoChevronBackCircle 
          className="text-yellow-300 text-6xl cursor-pointer hover:text-blue-600"
          onClick={goBack}
        />
        <IoChevronForwardCircleSharp 
          className="text-yellow-300 text-6xl cursor-pointer hover:text-blue-600"
          onClick={goForward}
        />
      </div>
  </div>
    </div>
    <div className='md:flex justify-around items-center'>
  <div className='md:w-1/2'>
    <h1 className='capitalize font-protest text-6xl  mb-6 mt-7 text-blue-800 text-center'>Why us</h1>
    <h4 className='text-3xl mb-6 text-center'>This is why you should <span className='text-red-300'>choose us</span></h4>
    
    <div className='flex flex-col gap-3 mb-6 text-xl w-3/4 mx-auto'>
      <div className='flex gap-3 mb-2'>
        <FaCheckCircle className='text-blue-800 text-3xl' />
        <p className='mt-1'>We deliver exceptional end results</p>
      </div>
      <div className='flex gap-3 mb-2'>
        <FaCheckCircle className='text-blue-800 text-3xl' />
        <p className='mt-1'>Personalized services</p>
      </div>
      <div className='flex gap-3 mb-2'>
        <FaCheckCircle className='text-blue-800 text-3xl' />
        <p className='mt-1'>100% client satisfaction rate</p>
      </div>
      <div className='flex gap-3 mb-2'>
        <FaCheckCircle className='text-blue-800 text-3xl' />
        <p className='mt-1'>Advanced technical expertise across all elevator manufacturers</p>
      </div>
      <div className='flex gap-3 mb-2'>
        <FaCheckCircle className='text-blue-800 text-3xl' />
        <p className='mt-1'>Distinctive 10-point customer-focused design process.</p>
      </div>
    </div>
  </div>

  {/* Image on the right for larger screens */}
  <div className='md:w-1/2   p-3'>
    <img className='w-3/4 mx-auto mt-4 md:w-1/2 mb-7 border rounded-lg' 
    src='Transparent-lift.jpg' alt="Lift" />
  </div>
</div>
<div className=''>
  <div>
  <h1 className='text-blue-800 text-5xl font-protest text-center mb-5'>Our Team</h1>
  </div>
   <div className=' w-3/4 mx-auto md:flex gap-4'>
   <div className=" flex flex-col bg-gray-100 mb-3  md:h-80  md:w-1/3 border rounded-lg ">
   <VscLaw className="text-6xl text-center mt-2" />
   <p className="font-bold mt-1 text-center">Everlyne Nereah</p>
   <h1 className="font-bold mt-2 mb-1 text-center">Legal Advisor/Company Secretary</h1>
 </div>
 
 <div className="flex flex-col bg-gray-100 mb-3 mx-auto md:mr-2 md:w-1/3 border rounded-lg ">
   <FaCogs className="text-6xl text-center mt-2" />
   <p className="font-bold mt-1 text-center">Collins Okeyo</p>
   <h1 className="font-bold mt-2 mb-1 text-center">Technical Operations</h1>
 </div>
   
 <div className="flex flex-col bg-gray-100 mb-3  mx-auto md:mr-2 md:w-1/3 border rounded-lg ">
   <FaPeopleGroup className="text-6xl text-center mt-2" />
   <p className="font-bold mt-1 text-center">Paul Nderitu</p>
   <h1 className="font-bold mt-2 mb-1 text-center">Sales and Marketing</h1>
 </div>

 <div className="flex flex-col bg-gray-100 mb-3  mx-auto md:mr-2 md:w-1/3 border rounded-lg ">
   < FaHelmetUn className="text-6xl text-center mt-2" />
   <p className="font-bold mt-1 text-center">Eric Alao</p>
   <h1 className="font-bold mt-2 mb-1 text-center">Installation supervisor</h1>
 </div>
  
</div>
</div>
</div>
  );
};

export default Home;