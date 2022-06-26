import React from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaGithub,
	FaLinkedin,
	FaMailBulk
} from 'react-icons/fa';
import AOS from 'aos';
AOS.init();

export const Footer = () => {
	return (
		<div data-aos="fade-up">
		<svg class="w-screen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2A2A2A" fill-opacity="1" d="M0,64L24,101.3C48,139,96,213,144,218.7C192,224,240,160,288,112C336,64,384,32,432,26.7C480,21,528,43,576,85.3C624,128,672,192,720,186.7C768,181,816,107,864,101.3C912,96,960,160,1008,176C1056,192,1104,160,1152,160C1200,160,1248,192,1296,186.7C1344,181,1392,139,1416,117.3L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320, 288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
		</svg>
		<div className='bg-theme w-screen text-gray-400 p-10 flex justify-center text-center'>
			<div className='md:w-full w-1/2'>
				<p className='text-white md:text-xs'>You're currently looking at portfolio website of,</p>
				<div className="flex text-white w-full justify-between my-3">
				<a target="_blank" href="https://github.com/jaimin1618"><FaGithub size={35} className='hover:cursor-pointer' /></a>
				<a target="_blank" href="https://www.linkedin.com/in/jaimin1618/"><FaLinkedin size={35} className='hover:cursor-pointer' /></a>
				<a target="_blank" href="mailto:jaimin.chokhawala@gmail.com"><FaMailBulk size={35} className='hover:cursor-pointer' /></a>
				</div>
				<p className='mt-1'>Jaimin Chokhawala</p>
			</div>
		</div>
	</div>
	);
};
