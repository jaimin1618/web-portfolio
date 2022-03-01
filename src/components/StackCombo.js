import React from 'react';
import AOS from 'aos';
AOS.init();

export const StackCombo = () => {
  return (
    <div className='pb-12' data-aos="fade-up">
      <div className='h-44 bg-custom_one text-center mt-10'>
        <h1 className='text-white font-semibold text-4xl md:text-2xl py-6 md:px-2'>Combinations I use, <br /> for full stack development <b className='text-4xl bg-red-600 rounded-full font-bold'>😁</b></h1>
      </div>
      <div className='bg-slate-50 mx-24 -mt-9 -mb-2 shadow-lg md:mx-0 md:p-0 p-6 rounded-sm transition duration-300 ease-in-out hover:bg-black'>
        <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_KmtjWu.json"
          background="transparent"
          speed="1"
          style={{height: '280px', padding: '10px', margin: '0px'}}
          loop autoplay>
        </lottie-player>
        <div className='w-full flex justify-center p-6 md:p-0'>
          <div className="shadow-sm grid grid-cols-3 w-5/6 gap-0.5 md:gap-0 md:w-full p-4 bg-white rounded-sm text-white text-center">
            <div className='p-6 m-2 bg-cyan-900 rounded-md md:text-xs md:m-1 md:p-1 font-bold hover:font-semibold hover:cursor-pointer'>Stack name <hr /></div>
            <div className='p-6 m-2 bg-cyan-900 rounded-md md:text-xs md:m-1 md:p-1 font-bold hover:font-semibold hover:cursor-pointer'>Frontend technologies <hr /></div>
            <div className='p-6 m-2 bg-cyan-900 rounded-md md:text-xs md:m-1 md:p-1 font-bold hover:font-semibold hover:cursor-pointer'>Backend technologies <hr /></div>

            <div className='p-6 m-2 bg-sky-100 text-black rounded-sm md:text-xs md:m-1 md:p-1 hover:font-semibold hover:cursor-pointer'>PHP-MySQL</div>
            <div className='p-6 m-2 bg-sky-100 text-black rounded-sm md:text-xs md:m-1 md:p-1 hover:font-semibold hover:cursor-pointer'>HTML5 | CSS3 | JavaScript <br /> JQuery3 | Bootstrap5</div>
            <div className='p-6 m-2 bg-sky-100 text-black rounded-sm md:text-xs md:m-1 md:p-1 hover:font-semibold hover:cursor-pointer'>PHP (API) | MySQL</div>

            <div className='p-6 m-2 bg-sky-100 text-black rounded-sm md:text-xs md:m-1 md:p-1 hover:font-semibold hover:cursor-pointer'>Laravel-React</div>
            <div className='p-6 m-2 bg-sky-100 text-black rounded-sm md:text-xs md:m-1 md:p-1 hover:font-semibold hover:cursor-pointer'>React | Redux | Tailwind CSS</div>
            <div className='p-6 m-2 bg-sky-100 text-black rounded-sm md:text-xs md:m-1 md:p-1 hover:font-semibold hover:cursor-pointer'>Laravel-PHP (API) <br /> MySQL / Postgre</div>

            <div className='p-6 m-2 bg-sky-100 text-black rounded-sm md:text-xs md:m-1 md:p-1 hover:font-semibold hover:cursor-pointer'>MERN</div>
            <div className='p-6 m-2 bg-sky-100 text-black rounded-sm md:text-xs md:m-1 md:p-1 hover:font-semibold hover:cursor-pointer'>React | Redux | Tailwind CSS</div>
            <div className='p-6 m-2 bg-sky-100 text-black rounded-sm md:text-xs md:m-1 md:p-1 hover:font-semibold hover:cursor-pointer'>Node.js | Express.js (API) <br /> MongoDB / MySQL</div>
          </div>
        </div>
      </div>
    </div>
  )
}