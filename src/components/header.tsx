import * as React from 'react';

import MobileMenu from './parts/MobileMenu';
import Navigation from './parts/Navigation';
import Personal from './parts/Personal';
import ToggleTheme from './parts/ToggleTheme';
import Contact from './parts/Contact';
import Logo from './parts/Logo';

export default function Header() {
	return (
		<div className="flex justify-between items-center  sticky top-0 py-5 bg-background z-50">
			<div className="flex w-[150px] md:w-[200px]">
				<Logo />
			</div>
			<div className="hidden xl:flex">
				<Navigation />
			</div>
			<div className="hidden xl:flex items-center">
				<Contact />
			</div>
			<div className="hidden xl:flex items-center gap-5">
				<Personal />
				<ToggleTheme />
			</div>
			<MobileMenu />
		</div>
	);
}
