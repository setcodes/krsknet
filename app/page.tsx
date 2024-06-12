'use client';

import * as React from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';

export default function Main() {
	return (
		<>
			<div className="flex flex-col mx-10 my-10">
				<Header />
				<Hero />
			</div>
		</>
	);
}
