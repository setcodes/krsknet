'use client';

import * as React from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import HowWeWork from '@/components/how-we-work';
import Price from '@/components/price';

export default function Main() {
	return (
		<>
			<div className="flex flex-col px-10 py-10 justify-center">
				<Header />
				<Hero />
				<HowWeWork />
				<Price />
			</div>
		</>
	);
}
