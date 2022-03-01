import React, { useEffect } from 'react';

// compo
import { Banner } from '../components/Banner';
import { StackCombo } from '../components/StackCombo';
import { TechStack } from '../components/TechStack';
import { About } from '../components/About';

export const Home = () => {

	return (
		<React.Fragment>
			<Banner />
			<TechStack />
			<StackCombo />
			<About />
		</React.Fragment>
	);
}
