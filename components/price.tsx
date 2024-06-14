import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import Image from 'next/image';

export default function Price() {
	return (
		<>
			<div className="flex flex-col justify-center gap-5 mt-10">
				<h3 className="flex justify-center items-center text-2xl md:text-4xl my-20 ">
					ТАРИФЫ
				</h3>
				<div className="flex flex-col lg:flex-row w-full gap-5">
					<div className="flex flex-col w-full gap-5 lg:gap-10 border border-borderKrsknet rounded-xl py-10 px-10 w-12/12 lg:w-4/12">
						<div className="flex justify-between mb-5">
							<div className="text-1xl lg:text-2xl">PON-15</div>
						</div>

						<div className="flex justify-center">
							<div className="text-2xl lg:text-3xl ">
								до <span className="text-3xl xl:text-7xl">15</span> Мбит/сек
							</div>
						</div>
						<div className="border border-borderWhiteOrBlack"></div>
						<div className="flex flex-col xl:flex-row gap-2 xl:gap-0 justify-between items-center mx-10">
							<div>
								<Image
									src={'/img/internet.png'}
									alt="logo"
									width={50}
									height={50}
								/>
							</div>
							<div className=" text-2xl font-light text-center">
								Для 1-го устройства
							</div>
						</div>
						<div className="flex flex-col xl:flex-row gap-2 xl:gap-0 justify-between items-center mx-10">
							<div>
								<Image
									src={'/img/ruble.png'}
									alt="logo"
									width={50}
									height={50}
								/>
							</div>
							<div className="text-2xl font-light text-center">
								<span className="text-4xl font-bold mr-2">1000</span> Руб/Месяц
							</div>
						</div>

						<Button
							variant={'outline'}
							className="text-1xl sm:text-2xl  rounded-xl uppercase font-bold border-2 border-red-700 py-10 px-20 mt-10"
						>
							ПОДКЛЮЧИТЬ
						</Button>
					</div>
					<div className="flex flex-col w-full gap-10 rounded-2xl py-10 px-10 w-12/12 lg:w-4/12 bg-gradient-to-b from-red-700 to-zinc-900 to-90% ">
						<div className="flex justify-between items-center mb-5">
							<div className="text-1xl lg:text-2xl text-white">PON-25</div>
							<Badge
								variant="outline"
								className="border-white font-light px-3 xl:px-5 text-white"
							>
								ПОПУЛЯРНЫЙ
							</Badge>
						</div>

						<div className="flex justify-center">
							<div className="text-2xl lg:text-3xl text-white">
								до <span className="text-3xl xl:text-7xl">25</span> Мбит/сек
							</div>
						</div>
						<div className="border border-white"></div>
						<div className="flex flex-col xl:flex-row gap-2 xl:gap-0 justify-between items-center mx-10">
							<div>
								<Image
									src={'/img/internet.png'}
									alt="logo"
									width={50}
									height={50}
								/>
							</div>
							<div className="text-2xl font-light text-white text-center">
								Для 1-2x устройств
							</div>
						</div>
						<div className="flex flex-col xl:flex-row gap-2 xl:gap-0 justify-between items-center mx-10">
							<div>
								<Image
									src={'/img/ruble.png'}
									alt="logo"
									width={50}
									height={50}
								/>
							</div>
							<div className="text-2xl font-light text-white text-center">
								<span className="text-4xl font-bold mr-2">1200</span> Руб/Месяц
							</div>
						</div>

						<Button
							variant={'destructive'}
							className="text-1xl sm:text-2xl  rounded-2xl uppercase bg-red-700 font-bold border-2 border-red-700 py-10 px-20 mt-10"
						>
							ПОДКЛЮЧИТЬ
						</Button>
					</div>
					<div className="flex flex-col w-full gap-5 lg:gap-10 border border-borderKrsknet rounded-xl py-10 px-10 w-12/12 lg:w-4/12">
						<div className="flex justify-between mb-5">
							<div className="text-1xl lg:text-2xl">PON-50</div>
						</div>

						<div className="flex justify-center">
							<div className="text-2xl lg:text-3xl ">
								до <span className="text-3xl xl:text-7xl">50</span> Мбит/сек
							</div>
						</div>
						<div className="border border-borderWhiteOrBlack"></div>
						<div className="flex flex-col xl:flex-row gap-2 xl:gap-0 justify-between items-center mx-10">
							<div>
								<Image
									src={'/img/internet.png'}
									alt="logo"
									width={50}
									height={50}
								/>
							</div>
							<div className=" text-2xl font-light text-center">
								Для 2-3x устройств
							</div>
						</div>
						<div className="flex flex-col xl:flex-row gap-2 xl:gap-0 justify-between items-center mx-10">
							<div>
								<Image
									src={'/img/ruble.png'}
									alt="logo"
									width={50}
									height={50}
								/>
							</div>
							<div className="text-2xl font-light text-center">
								<span className="text-4xl font-bold mr-2">1500</span> Руб/Месяц
							</div>
						</div>

						<Button
							variant={'outline'}
							className="text-1xl sm:text-2xl  rounded-xl uppercase font-bold border-2 border-red-700 py-10 px-20 mt-10"
						>
							ПОДКЛЮЧИТЬ
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
