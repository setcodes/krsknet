import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import Image from 'next/image';
import DialogForm from './parts/DialogForm';

export default function Hero() {
	return (
		<>
			<div className="flex justify-center items-center mx-50 relative">
				<div className="flex flex-col gap-10 relative">
					<h1 className="mb-55 text-2xl sm:mt-20 md:text-3xl 2xl:text-6xl font-bold w-12/12 lg:w-8/12 mt-10">
						ИНТЕРНЕТ В ЧАСТНОМ СЕКТОРЕ КРАСНОЯРСКОГО КРАЯ
					</h1>
					<h2 className="text-xl w-12/12 lg:w-6/12 sm:text-2xl  2xl:text-4xl font-light">
						<span className="text-red-700 font-bold">KRSKNET</span>-
						лицензированный оператор связи, предоставляющий услуги связи по
						технологии PON [Пассивная оптическая сеть]
					</h2>
					<div className="w-50 flex justify-center sm:justify-start mb-2 lg:mb-10">
						<DialogForm
							button={
								<Button
									variant={'destructive'}
									className="text-1xl sm:text-2xl bg-red-700 rounded-xl uppercase font-bold border-2 py-10 px-20"
								>
									ПОДКЛЮЧИТЬ
								</Button>
							}
						/>
					</div>
					<div className="flex flex-row gap-3 lg:gap-10">
						<div className="flex gap-3 items-center">
							<Image
								src={'/img/on-button.png'}
								alt="on"
								width={50}
								height={50}
							/>
							<span className="text-1xl lg:text-2xl font-light">КАЧЕСТВО</span>
						</div>
						<div className="flex gap-3 items-center">
							<Image
								src={'/img/on-button.png'}
								alt="on"
								width={50}
								height={50}
							/>
							<span className="text-1xl lg:text-2xl  font-light">
								НАДЕЖНОСТЬ
							</span>
						</div>
					</div>
				</div>
				<div className="hidden lg:flex absolute top-20 lg:top-0 right-2 w-1/2">
					{useTheme().theme === 'light' ? (
						<Image
							src={'/img/hero-black.svg'}
							alt="hero"
							width={900}
							height={900}
							style={{
								width: '100%',
								height: '100%',
							}}
							sizes="100vw"
							className="md:w-12"
						/>
					) : (
						<Image
							src={'/img/hero-white-hot.svg'}
							alt="hero"
							width={900}
							height={900}
							style={{
								width: '100%',
								height: '100%',
							}}
							sizes="100vw"
							className="md:w-12"
						/>
					)}
				</div>
				{/* <div className="hidden md:flex md:w-4/12 px-10">
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
			</div> */}
			</div>
		</>
	);
}
