import React, { useState } from 'react';
import { projects } from '../data/projects';
import AOS from 'aos';
AOS.init();

export const Projects = () => {
	console.log(projects);

	return (
		<>
		<div className='mt-20 grid grid-cols-2 md:grid-cols-1 gap-2 mb-6'>
			<div className='p-3 -mt-1 flex justify-center md:w-full md:h-1/4' data-aos="fade-down-right">
				<lottie-player
						src="https://assets8.lottiefiles.com/packages/lf20_skyp6jah.json"
						background="transparent"
						speed="1"
						style={{height:'400px', width:'400px', borderRadius: '100%', backgroundColor: 'red'}}
						loop
						autoplay>
				</lottie-player>
			</div>
			<div className='flex justify-center p-10 md:p-0 lg:-ml-20 md:m-0'  data-aos="fade-down-left">
				<div className='text-center m-3 md:m-0 bg-slate-100 p-3 rounded-sm shadow-md'>
					<p>My understand about entire information technology or programming since the beginning, in single quote, <br /></p>
					<div className="p-2 m-2"><br />
						<b className='text-4xl md:text-4xl'>&ldquo;</b><span className='font-semibold text-lg'>Know something about everything <span className='text-xl md:text-3xl'>&#38;</span><br />Now everything about something.</span><b className='text-4xl md:text-4xl'>&rdquo;</b>
					</div>
				</div>
			</div>
		</div>

		<div className='flex flex-col justify-center m-5 py-8'>
			<h1 className='text-center text-6xl font-semibold m-5 underline md:text-4xl'>My Projects</h1>
			<div className='grid md:grid-cols-1 md:gap-3 grid-cols-3 gap-12 mx-20 md:mx-5 items-center justify-center'>
				{projects.map(
					(item, i) => (

						<div className='shadow-md relative p-10 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400'>
							<img src={"https://picsum.photos/200"} height="240" alt="image" className='w-full h-52 rounded-md' />
						
							<div className='opacity-0 hover:bg-black rounded-tr-3xl rounded-bl-3xl transition delay-100 hover:opacity-80 hover:cursor-pointer absolute inset-0 flex items-center justify-center flex-col text-white'>
								<h1 className='font-semibold text-3xl uppercase text-white'>{item.title}</h1>
								<button className='text-white border-2 rounded-lg border-white py-2 px-8 my-2 hover:bg-green-800' type="submit">See</button>
							</div>
						</div>

					)
				)}
			</div>
		</div>

		</>
	);
}
