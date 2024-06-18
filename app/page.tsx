'use client';

import * as React from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import HowWeWork from '@/components/how-we-work';
import Price from '@/components/price';
import VideoControl from '@/components/video-control';
import VideoControl2 from '@/components/video-control2';
import News from '@/components/news';
import Stocks from '@/components/stocks';
import Services from '@/components/services';

export default function Main() {
	return (
		<>
			<div className="flex flex-col px-10 py-10 justify-center">
				<Header />
				<Hero />
				<HowWeWork />
				<Price />
				<VideoControl2 />
				<News />
				<Stocks />
				<Services />
			</div>
		</>
	);
}
