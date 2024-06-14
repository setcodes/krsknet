import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import Image from 'next/image';

export default function Hero() {
	return (
		<div className="flex justify-center items-center mx-50">
			<div className="flex flex-col w-12/12 sm:w6/12 gap-10 px-10">
				<h1 className="text-2xl mt-10  sm:mt-0 md:text-2xl lg:text-3xl 2xl:text-5xl">
					ИНТЕРНЕТ В ЧАСТНОМ СЕКТОРЕ КРАСНОЯРСКОГО КРАЯ
				</h1>
				<h2 className="text-1xl sm:text-2xl md:text-2xl font-light">
					<span className="text-red-700 font-bold">KRSKNET</span>-
					лицензированный оператор связи, предоставляющий услуги связи по
					технологии PON [Пассивная оптическая сеть]
				</h2>
				<div className="w-50 flex justify-center sm:justify-start mb-10">
					<Button
						variant={'destructive'}
						className="text-1xl sm:text-2xl  rounded-xl uppercase font-bold border-2 py-7 px-20"
					>
						ПОДКЛЮЧИТЬ
					</Button>
				</div>
				<div className="flex flex-col lg:flex-row gap-3 lg:gap-10">
					<div className="flex gap-3 items-center">
						<Image src={'/img/on-button.png'} alt="on" width={50} height={50} />
						<span className="text-1xl lg:text-2xl font-light">КАЧЕСТВО</span>
					</div>
					<div className="flex gap-3 items-center">
						<Image src={'/img/on-button.png'} alt="on" width={50} height={50} />
						<span className="text-1xl lg:text-2xl  font-light">НАДЕЖНОСТЬ</span>
					</div>
				</div>
			</div>
			<div className="hidden md:flex md:w-1/1 px-10">
				<div className="flex">
					{useTheme().theme === 'light' ? (
						<Image
							src={'/img/hero-white.png'}
							alt="hero"
							width={1200}
							height={1200}
						/>
					) : (
						<Image
							src={'/img/hero-black.png'}
							alt="hero"
							width={1200}
							height={1200}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
