import React, {useState} from 'react';
import './index.css';
import { ImMenu } from 'react-icons/im';
import { SiInstagram } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";


import Home from './Components/Home';



const App = () => {
  // State to toggle the menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <div className='relative'>
      
       

      <div className='md:hidden'>
      {/* Header for smaller screens */}
      <header className=' fixed top-0 left-0 block lg:hidden md:hidden w-full shadow-xl z-50  '>
        <div className='flex items-center justify-around text-2xl bg-white border
         rounded-full shadow-xl'>
          <h1 className='font-space font-extrabold mt-2 mb-4 text-red-600'>FUJICO</h1>
          <ImMenu
            className='block lg:hidden md:hidden text-blue-800 mt-2 mb-4 cursor-pointer'
            onClick={toggleMenu} // Toggle the menu when clicked
          />
        </div>
        {/* Conditionally render the menu on small screens */}
        {isMenuOpen && (
          <nav className="fixed top-0 left-0 w-1/2 h-full bg-blue-950 text-white z-50">

          
          <ul className="flex flex-col items-center">
          
          <li className="py-3 text-2xl hover:text-red-600">
      <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
    </li>
    <li className="py-3 text-2xl hover:text-red-600">
      <a href="#about" onClick={() => setIsMenuOpen(false)}>About us</a>
    </li>
    <li className="py-3 text-2xl hover:text-red-600">
      <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
    </li>
    <li className="py-3 text-2xl hover:text-red-600">
      <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact us</a>
    </li>

</ul>

          
          </nav>
        )}
      </header>
      </div>
      {/* Header for larger screens */}
      <header className=' header fixed top-0 left-0 hidden md:block lg:block p-4 z-50
font-sans border rounded-full w-full bg-white'> 
  <div className='flex justify-around items-center text-2xl mt-4 '>
    <h1 className='font-manrope mb-4 text-red-600'>FUJICO</h1>
    <ul className="flex mb-4">
      <li className="px-3 hover:text-red-600">
        <a href="#home">Home</a>
      </li>
      <li className="px-3 hover:text-red-600">
        <a href="#about">About us</a>
      </li>
      <li className="px-3 hover:text-red-600">
        <a href="#services">Services</a>
      </li>
      <li className="px-3 hover:text-red-600">
        <a href="#contact">Contact us</a>
      </li>
    </ul>
  </div>
</header>

  
      <Home/>
      
      
      <div>
  <footer className='bg-blue-950'>
    {/* Main footer container */}
    <div className='flex flex-col md:flex-row md:justify-evenly items-center'>
      {/* Left section with company details */}
      <div className='text-center md:text-left mb-6 md:mb-0'>
        <h1 className='font-space text-white text-4xl mt-10 mb-7'>Our Company</h1>
        <p className='text-white mb-6 md:w-1/2'>
          Fujico Technologies Ltd is a trusted leader in elevator solutions, specializing in design, installation, and maintenance. We deliver precision, safety, and innovation tailored to your needs.
        </p>
      </div>

      {/* Social media icons */}
      <div className='flex justify-center gap-3 mb-6 md:mb-0'>
        <SiInstagram className='text-white text-3xl' />
        <ImFacebook2 className='text-white text-3xl' />
        <FaXTwitter className='text-white text-3xl' />
      </div>

      {/* Footer navigation links */}
      <div className="md:flex md:justify-center w-full">
        <ul className="flex flex-col items-center">
          <li className="py-3 text-white text-xl hover:text-red-600">
            <a href="#home">Home</a>
          </li>
          <li className="py-3 text-white text-xl hover:text-red-600">
            <a href="#about">About us</a>
          </li>
          <li className="py-3 text-white text-xl hover:text-red-600">
            <a href="#services">Services</a>
          </li>
          <li className="py-3 text-white text-xl hover:text-red-600">
            <a href="#contact">Contact us</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</div>

      
    </div>
  );
};

export default App;
