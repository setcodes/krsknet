import { Button } from './ui/button';
import Image from 'next/image';

export default function Hero() {
	return (
		<div className="flex justify-center items-center mx-50">
			<div className="flex flex-col w-12/12 sm:w6/12 gap-10">
				<div className="text-2xl mt-10  sm:mt-0 md:text-2xl lg:text-4xl 2xl:text-5xl">
					ИНТЕРНЕТ В ЧАСТНОМ СЕКТОРЕ КРАСНОЯРСКОГО КРАЯ
				</div>
				<div className="text-1xl sm:text-2xl font-light">
					<span className="text-red-700 font-bold">KRSKNET</span>-
					лицензированный оператор связи, предоставляющий услуги связи по
					технологии PON <span className="font-mono">[</span>Пассивная
					оптическая сеть<span className="font-mono">]</span>
				</div>
				<div className="w-50 flex justify-center sm:justify-start">
					<Button
						variant={'destructive'}
						className="text-1xl uppercase border-2 border-red-700 py-7 px-20"
					>
						ПОДКЛЮЧИТЬ
					</Button>
				</div>
			</div>
			<div className="hidden md:flex mr-10 w-8/12">
				<div className="flex relative">
					<Image
						src={'/img/hero-black.png'}
						alt="hero"
						width={1000}
						height={1000}
					/>
				</div>
			</div>
		</div>
	);
}
