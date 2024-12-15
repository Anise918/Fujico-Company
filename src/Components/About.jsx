
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration for the animation
    });
  }, []);

  return (
    <div id="about" className="min-h-screen">
      <div className='md:flex justify-around'>
        <div data-aos="fade-up">
          <h1 className='font-space font-bold text-red-500 text-2xl
           mb-7 uppercase sm: ml-8'data-aos="fade-right">
            About Us
          </h1>
          <h1 className='font-space font-bold text-6xl text-blue-800 mb-5 mt-4 sm: ml-8'>Rising Higher</h1>
          <p className='font-protest mb-5'>Expert lift Installation, Service, and Maintenance</p>
        </div>

        <p className=" md:w-1/2 text-center font-light font-roboto text-gray-600"
         data-aos="zoom-in"data-aos-delay="400">
          Founded in 2016 and officially registered as a business in 2019, 
          <span className="text-red-500 font-bold"> Fujico Technologies Limited </span>
          is a leading provider of comprehensive elevator and escalator solutions. 
          We specialize in the supply, installation, repair, and modernization of lifts and escalators, 
          catering to diverse sectors and industries.
          <br/><br/>
          Our expertise spans a wide range of specialized elevators, including systems for hospitals, nursing homes, 
          shopping centers, public buildings, and even vehicle elevators. This extensive experience allows us to tailor 
          solutions that meet the unique needs of each client, ensuring reliability and safety in every project.
        </p>
      </div>

      
      <div className=' md:flex flex-row justify-between mt-6 ' >
      <div className='flex flex-col text-center ml-7'>
        <h1 className='font-space text-2xl text-red-500 uppercase font-bold mb-7'>Our Mission</h1>
        <p className='font-roboto w-3/4 text-gray-600 sm: mb-5'data-aos="fade-left" >Our mission is to deliver safe, reliable, 
          and innovative vertical transportation solutions for people and goods. 
          We strive to simplify lives and enhance convenience through our commitment to quality,
           efficiency, and customer satisfaction. </p>
      </div>
      <div className='flex flex-col text-center ml-7'>
        <h1 className='font-space text-2xl text-red-500 uppercase font-bold mb-7'>our vision</h1>
        <p className='font-roboto text-gray-600  w-3/4' data-aos="fade-right">
          Our vision is to become the preferred lift company. If you are a customer, 
          potential employee or industry member, we want to be your first choice.
          Our aim is to grow our business and our people so that we can make a difference
          in the communities in which we work.

        </p>
      </div>
    </div>
    <div className='flex justify-center'>
        <button className='bg-red-500 text-white border rounded-full py-3 px-5
         hover:bg-yellow-600
        mt-5' data-aos="fade-up" data-aos-delay="400">
          Meet Our Team
        </button>
      </div>
    </div>
  );
};

export default About;
