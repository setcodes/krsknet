'use client';

import * as React from 'react';
// import Header from '@/components/header';
// import Hero from '@/components/hero';
// import HowWeWork from '@/components/how-we-work';
// import Price from '@/components/price';
// import VideoControl from '@/components/video-control';
// import VideoControl2 from '@/components/video-control2';
// import News from '@/components/news';
import Stocks from '@/components/stocks';
import Services from '@/components/services';
import QA from '@/components/qa';
import Footer from '@/components/footer';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('@/components/header'), { ssr: false });
const Hero = dynamic(() => import('@/components/hero'), { ssr: false });
const HowWeWork = dynamic(() => import('@/components/how-we-work'), {
	ssr: false,
});
const Price = dynamic(() => import('@/components/price'), { ssr: false });
const VideoControl2 = dynamic(() => import('@/components/video-control2'), {
	ssr: false,
});
const News = dynamic(() => import('@/components/news'), {
	ssr: false,
});

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
				<QA />
			</div>
			<Footer />
		</>
	);
}
