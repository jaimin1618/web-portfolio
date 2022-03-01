import React from 'react';
import {
	FaBootstrap,
	FaCss3,
	FaHtml5,
	FaJsSquare,
	FaLaravel,
	FaNodeJs,
	FaPhp,
	FaReact
} from 'react-icons/fa';
import AOS from 'aos';
AOS.init();
  
export const TechStack = () => {
  return (
  <div>
    <div className='text-center bg-cyan-900 text-white shadow-md p-12'>
      <h1 className='text-4xl font-bold mb-3'>Technologies I use for fullstack development</h1>
      <small>frontend UI and backend Rest-API/functionality development</small>
    </div>
    
    <div className='grid md:grid-cols-2 grid-cols-4 mt-8'>
      <div className='p-2 m-2' data-aos="fade-left">
        <FaReact size={125} color='cyan' className='w-full text-center p-2 m-2' />
        <h1 className='text-center w-full font-bold mt-1'>React.js</h1>
      </div>
      <div className='p-2 m-2' data-aos="fade-right">
        <FaNodeJs size={125} color='green' className='w-full text-center p-2 m-2'/>
        <h1 className='text-center w-full font-bold mt-1'>Node.js (API)</h1>
      </div>
      <div className='p-2 m-2' data-aos="fade-left">
        <FaLaravel size={125} color='red' className='w-full text-center p-2 m-2'/>
        <h1 className='text-center w-full font-bold mt-1'>PHP-Laravel (API)</h1>
      </div>
      <div className='p-2 m-2' data-aos="fade-right">
      <FaPhp size={125} color='purple' className='w-full text-center p-2 m-2'/>
        <h1 className='text-center w-full font-bold mt-1'>PHP (API)</h1>
      </div>
      <div className='p-2 m-2' data-aos="fade-left">
        <FaBootstrap size={125} color='purple' className='w-full text-center p-2 m-2' />
        <h1 className='text-center w-full font-bold mt-1'>Bootstrap js/css</h1>
      </div>
      <div className='p-2 m-2' data-aos="fade-right">
        <FaJsSquare  size={125} color='darkyellow' className='w-full text-center p-2 m-2' />
        <h1 className='text-center w-full font-bold mt-1'>JavaScript (ES6)</h1>
      </div>
      <div className='p-2 m-2' data-aos="fade-left">
        <FaHtml5 size={125} color='orange' className='w-full text-center p-2 m-2' />
        <h1 className='text-center w-full font-bold mt-1'>HTML5</h1>
      </div>
      <div className='p-2 m-2' data-aos="fade-right">
        <FaCss3 size={125} color='#1E90FF' className='w-full text-center p-2 m-2' />
        <h1 className='text-center w-full font-bold mt-1'>CSS3</h1>
      </div>
    </div>
  </div>
  )
}
