import React from 'react';
import AOS from 'aos';
AOS.init({
    duration: 500
});

export const Banner = () => {
  return (
    <div className='h-screen bg-theme'>
      <div className='grid ss:grid-cols-1 grid-cols-2 h-screen items-center border-4 border-orange-100 rotate-6 ss:p-2 ss:rotate-0 md:border-0 bg-theme'>
        <div className='h-1/2 m-2' data-aos="slide-left">
          <lottie-player
            style={{height: '500px', marginTop: '-120px', padding: '20px'}}
            src="https://assets4.lottiefiles.com/packages/lf20_jtbfg2nb.json"
            background="transparent"
            speed="1"
            loop autoplay>
          </lottie-player>
        </div>
        <div className='font-bold md:px-5'>
          <h1 className='text-7xl text-yellow-400 md:text-4xl' data-aos="slide-right">
            Hello! This is <b className='text-white'>Jaimin Chokhawala</b>
          </h1>
          <h1 className='text-4xl text-red-500 md:text-xl'>A Technology enthusiast! <br /><span className='text-white text-xl'>Welcome to my <span className='bg-orange-700 p-2 md:p-0.5 m-0.5'>full stack developer</span> profile</span></h1>
        </div>
      </div>
    </div>
  )
}
