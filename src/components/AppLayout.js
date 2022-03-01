import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const AppLayout = ({children}) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
		
	return (
		<div>
			<Header />
				<div className='content overflow-hidden'>{children}</div>
			<Footer />
		</div>
	);
}
