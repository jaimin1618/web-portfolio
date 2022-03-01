import React from 'react';
import { AppLayout } from '../components/AppLayout';

export const Contact = () => {
	return (
		<div>
			<div className='h-screen md:h-2/3'>
			<lottie-player 
				src="https://assets7.lottiefiles.com/packages/lf20_5wljrtm0.json"  
				background="transparent"  
				speed="1"  
				style={{height:'650px'}}
				loop autoplay>
			</lottie-player>
			</div>

			<div className='mb-12 w-screen flex justify-center'>
				<div className='md:w-full w-1/2 p-8 m-2 md:m-0 shadow-2xl bg-slate-100'>
					<h1 className='text-2xl font-light w-full flex justify-center mb-3'>Contact Me</h1>
					<input placeholder='Name' type="text" className='shadow-md p-2 w-full border-1 border-gray-300 rounded py-2 m-1' />
					<input placeholder='Email' type="text" className='shadow-md p-2 w-full border-1 border-gray-300 rounded py-2 m-1' />
					<textarea placeholder='Message' type="text" className='shadow-md p-2 w-full border-1 border-gray-300 rounded py-4 m-1' />
					<button type="" className='bg-blue-500 p-2 m-1  rounded-md text-white w-full'>Submit</button>
				</div>		
			</div>
 


		</div>
	);
}
