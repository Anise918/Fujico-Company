import React from 'react';
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact" className=" w-full">
      <div className="md:flex flex-row justify-evenly items-center ml-8 ">
        {/* Left Section */}
        <div className="w-1/2">
          <h1 className="text-2xl font-space text-red-600 uppercase font-bold mb-5">
            Contact us
          </h1>
          <h4 className="font-space font-bold text-6xl text-blue-800 mb-5 mt-4">
            Reach Out
          </h4>
          <p className="font-protest mb-5">
            We are here for you 24/7
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2">
          <p className="text-gray-600 leading-relaxed text-center font-roboto">
            Our team is always ready to assist you. Whether you have questions, 
            need support, or want to discuss your specific requirements, 
            we are just a message or call away.<br /> At Fujico Limited, we prioritize 
            clear communication and quick responses to ensure your needs are met 
            with professionalism and care. Let’s connect and create solutions together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
