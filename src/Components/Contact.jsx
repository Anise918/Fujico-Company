import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className=" w-full scroll-mt-20">
      <div className=" items-center ml-8 ">
        {/* Left Section */}
        <div className="w-1/2">
          <h1 className="text-2xl font-space text-red-600 uppercase font-bold mb-5">
            Contact us
          </h1>
          <h4 className="font-space font-bold text-6xl text-blue-800 mb-5 mt-4">
            Reach Out
          </h4>
          <p className="font-protest mb-9">
            We are here for you 24/7
          </p>
        </div>

        {/* Right Section */}
        <div className=" flex items-center justify-center">
          <p className="text-gray-600 leading-relaxed  font-roboto mb-8 sm:w-full md:w-3/4">
            Our team is always ready to assist you. Whether you have questions, 
            need support, or want to discuss your specific requirements, 
            we are just a message or call away.<br /> At Fujico Limited, we prioritize 
            clear communication and quick responses to ensure your needs are met 
            with professionalism and care. Let’s connect and create solutions together.
          </p>
        </div>  
      </div>
      <div className="w-3/4 mx-auto md:w-full md:mx-0 md:flex flex-row justify-evenly mb-9">


       <div className="flex flex-col ">
  <h1 className="font-space text-gray-600 text-lg md:text-xl mb-4">Telephone:</h1>
  <a href="tel:+254723747687" className="font-roboto text-blue-600 text-lg md:text-xl mb-2
   hover:underline">
    +254723747687
  </a>
  <a 
  href="https://wa.me/+254731575481" 
  target="_blank" 
  className="flex items-center mb-3 text-green-500 hover:text-green-600 text-lg space-x-2"
>
  <FaWhatsapp className="text-2xl" />
  <span>Contact us on WhatsApp</span>
</a>
</div>

        <div className='flex flex-col'>
          <h1 className="font-space text-gray-600 text-xl mb-4">Address</h1>
          <p className='mb-2 '>
          <a
          href="mailto:fujicotechkenya@gmail.com"
          className="text-blue-600 hover:underline text-xl "
        >
          fujicotechkenya@gmail.com
        </a>

          </p>
          <p className="font-roboto  text-blue-600 mb-4 text-lg md:text-xl">Mlima House 2nd Floor Outering Road</p>
        </div>
        <div className='flex flex-col'>
        <h1 className="font-space text-gray-600 text-xl mb-4">Opening Hours</h1>
        <p className='text-red-600 text-lg md:text-xl mb-2 font-roboto'>Monday - Friday:<br/><span className=''>8.00 a.m to 6.00 p.m</span> 
        </p>
        <p className='text-red-600 text-lg md:text-xl mb-2 font-roboto'>Public Holidays & Saturdays:<br/> Closed</p>
        <p className='text-red-600 text-lg md:text-xl mb-2 font-roboto'>Sundays:<br/> 10.00 a.m to 4.00 p.m</p>
      </div>
       </div>
      
    </div>
  );
};

export default Contact;
