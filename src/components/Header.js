import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
	const [showMenu, setShowMenu] = useState('md:hidden');
	const path = window.location.pathname;
	const [menuHover, setMenuHover] = useState(false);

	return (
		<div className={`fixed top-0 right-0 left-0 z-50 nav bg-neutral-900 text-white justify-between items-center p-2 shadow-lg ${showMenu==='md:hidden'?'flex':'flex-col'}`}>
			<div className='flex justify-between w-full'>
				<div className='w-1/4'>
					<Link to={"/"}>
						<img src="/images/1.png" alt="logo" className='bg-auto hover:p-4 transition duration-300 delay-150 hover:-rotate-3' />
					</Link>
				</div>
		
				
				<button
					onMouseOver={() => {
						setMenuHover(true);
					}}
					onMouseLeave={() => {
						setMenuHover(false);
					}}
					onClick={() => {
						if (showMenu === 'md:hidden') {
							setShowMenu('md:flex');
						} else {
							setShowMenu('md:hidden');
						}
					}}
					className='lg:hidden xl:hidden 2xl:hidden md:flex'
				> Menu
				</button>
			</div>

			<div className={`md:hidden flex`}>
				<li key="home"><Link to="/">Home</Link></li>
				<li key="projects"><Link to="/projects">Projects</Link></li>
				<li key="contact"><Link to="/contact">Contact</Link></li>
			</div>

			<div className={`flex-col lg:hidden items-center 2xl:hidden xl:hidden ${showMenu}`}>
				<Link className='w-full m-1 rounded-sm p-2 shadow-lg link' to="/" >Home</Link>
				<Link className='w-full m-1 rounded-sm p-2 shadow-lg link' to="/projects">Projects</Link>
				<Link className='w-full m-1 rounded-sm p-2 shadow-lg link' to="/contact">Contact</Link>
			</div>
		</div>
	);
}
