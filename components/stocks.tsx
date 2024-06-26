import { Button } from './ui/button';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel';

import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import DialogWindow from './parts/DialogWindow';

export default function Stocks() {
	return (
		<>
			<div className="flex flex-col justify-center gap-5 mt-10 px-0 xl:px-20">
				<h3
					id="STOCKS"
					className="flex justify-center items-center text-2xl md:text-5xl my-20 font-bold"
				>
					АКЦИИ
				</h3>
				<div className="flex justify-center items-center">
					<Carousel
						plugins={[
							Autoplay({
								delay: 4000,
							}),
						]}
						orientation="horizontal"
						opts={{
							loop: true,
							align: 'center',
						}}
						className="flex justify-center items-center w-full lg:w-10/12 mx-auto"
					>
						<CarouselContent>
							<CarouselItem>
								<div className="flex flex-col justify-center px-10 lg:px-20 py-20 border-2 border-borderWhiteOrBlack rounded-xl ">
									<div className="flex flex-col lg:flex-row justify-center items-center text-center md:text-left gap-10 mb-10">
										<div>
											<Image
												src={'/img/handshake.png'}
												alt="logo"
												width={150}
												height={150}
											/>
										</div>
										<div className="text-3xl lg:text-5xl font-bold">
											{'"АКЦИЯ "ПРИВЕДИ ДРУГА"'}
										</div>
									</div>
									<div className="text-2xl font-light">
										Мы предлагаем вам участие в реферальной программе провайдера
										«Приведи друга» с возможностью получения бонуса в размере
										двух абонентских плат на счет за каждого вновь
										подключившегося абонента.
									</div>
									<div className="flex justify-center md:justify-end">
										<Button
											variant={'outline'}
											className="text-1xl  rounded-2xl uppercase  font-bold border-2 border-red-700 py-10 px-4 md:px-10 mt-10 "
										>
											ПОЛНЫЕ УСЛОВИЯ АКЦИИ
										</Button>
									</div>
								</div>
							</CarouselItem>
							<CarouselItem>
								<div className="flex flex-col justify-center px-10 lg:px-20 py-20 border-2 border-borderWhiteOrBlack rounded-xl ">
									<div className="flex flex-col lg:flex-row justify-center items-center text-center md:text-left gap-10 mb-10">
										<div>
											<Image
												src={'/img/handshake.png'}
												alt="logo"
												width={150}
												height={150}
											/>
										</div>
										<div className="text-3xl lg:text-5xl font-bold">
											{'"АКЦИЯ "ПЕРЕЕЗД"'}
										</div>
									</div>
									<div className="text-2xl font-light">
										Мы предлагаем вам участие в реферальной программе провайдера
										«Приведи друга» с возможностью получения бонуса в размере
										двух абонентских плат на счет за каждого вновь
										подключившегося абонента.
									</div>
									<div className="flex justify-center md:justify-end">
										<DialogWindow
											button={
												<Button
													variant={'outline'}
													className="text-1xl  rounded-2xl uppercase  font-bold border-2 border-red-700 py-10 px-4 md:px-10 mt-10 "
												>
													ПОЛНЫЕ УСЛОВИЯ АКЦИИ
												</Button>
											}
											content={
												<>
													<div className="flex flex-col mr-0 2xl:mr-3 w-3/3">
														<div className="text-2xl my-5 ">
															<span className="font-light">
																<span className="font-bold text-red-700 mr-5">
																	АКЦИЯ:
																</span>
																ПРИВЕДИ ДРУГА
															</span>
														</div>
														<div className="text-2xl uppercase mb-5 text-center">
															ПОЛНЫЕ УСЛОВИЯ АКЦИИ
														</div>
														<div className="text-2xl font-light mb-5">
															Lorem ipsum, dolor sit amet consectetur
															adipisicing elit. Quas, nostrum asperiores natus
															atque mollitia cumque et non perspiciatis
															laboriosam nihil, ullam maiores quisquam repellat
															laudantium deleniti quo similique eum ipsam.
														</div>
														<div className="text-2xl font-light">
															Lorem ipsum, dolor sit amet consectetur
															adipisicing elit. Quas, nostrum asperiores natus
															atque mollitia cumque et non perspiciatis
															laboriosam nihil, ullam maiores quisquam repellat
															laudantium deleniti quo similique eum ipsam.
														</div>
													</div>
												</>
											}
										></DialogWindow>
									</div>
								</div>
							</CarouselItem>
						</CarouselContent>
						<CarouselPrevious className="hidden lg:flex bg-red-700 text-white scale-150" />
						<CarouselNext className="hidden lg:flex bg-red-700 text-white scale-150" />
					</Carousel>
				</div>
			</div>
		</>
	);
}
