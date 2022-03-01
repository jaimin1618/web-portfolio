import React from 'react';

export const About = () => {
  return (
  <div>
    <h1 className='text-6xl md:text-4xl text-center m-6 underline'>About Me 🧑‍💻 </h1>

    <div className='flex justify-center relative'>

      <div className='h-3/4 w-full'>
        <lottie-player 
          src="https://assets7.lottiefiles.com/packages/lf20_gja1z1ru.json"  
          background="transparent"  
          speed="1"  
          loop 
          autoplay>
        </lottie-player>
      </div>  

      <div className='absolute inset-0 flex flex-col items-center justify-center'>
        <h1 className='text-4xl text-black md:text-xl'>Here, is my info!
        <hr />
          <pre className='text-xl md:text-xs font-mont font-semibold'>
            {
              JSON.stringify({
                Name: "Jaimin Chokhawala",
                University: "LD College of Engineering",
                Living: "Ahmedabad",
                Age: 20,
                Skills: [
                  "Full stack Web-development", 
                  "Robotics (Arduino / Atmel chips)",
                  "Embedded programming",
                  "IoT development"
                ],
                Intrests: [
                  "Technology, STEM more specifically. That's it"
                ]             
              }, null, 2)
            }
          </pre>
        </h1> 
      </div>

    </div>

  </div>
  );
};
