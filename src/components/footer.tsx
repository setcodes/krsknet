import Logo from './parts/Logo';
import Link from 'next/link';
import Image from 'next/image';
import NavigationCol from './parts/navigationCol';

export default function Footer() {
	return (
		<>
			<div
				id="FOOTER"
				className="flex flex-col lg:flex-row justify-center items-center mt-10 px-10 lg:px-20 py-5 lg:py-20 bg-zinc-950 text-white w-full gap-10"
			>
				<div className="w-full lg:w-2/3">
					<div className="mb-10">
						<Image
							src={'./img/logo-white.svg'}
							alt="KRSKNET"
							width={200}
							height={100}
							sizes="(max-width: 768px) 100vw, 33vw"
						/>
					</div>
					<h3 className="text-xl md:text-2xl w-12/12 lg:w-8/12 font-light">
						<span className="text-red-700 font-bold">KRSKNET</span>-
						лицензированный оператор связи, предоставляющий услуги связи по
						технологии PON [Пассивная оптическая сеть]
					</h3>
					<div className="flex gap-5 mt-10">
						<div>
							<Link href={'https://t.me/+-r49PLzVattiY2Qy'} target="_blank">
								<Image
									src={'./img/telegram.svg'}
									alt="telegram"
									width={50}
									height={50}
								/>
							</Link>
						</div>
						<div>
							<Link
								href={'https://vk.com/krsk_net?t2fs=79c72803eda9fde8fa_2'}
								target="_blank"
							>
								<Image
									src={'./img/vkontakte.svg'}
									alt="vk"
									width={50}
									height={50}
								/>
							</Link>
						</div>
					</div>
				</div>
				<div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
					<NavigationCol />
				</div>
				<div className="w-full flex flex-col gap-10 lg:w-2/3 xl:w-2/3">
					<div className="flex items-center gap-5">
						<Image
							src={'./img/location-target.svg'}
							alt="Регион"
							width={50}
							height={50}
							sizes="(min-width: 50px)"
						/>
						<div className="text-xl md:text-2xl font-light">
							Красноярский край
						</div>
					</div>
					<div className="flex items-center gap-5">
						<Image
							src={'./img/clock-target.svg'}
							alt="Время работы"
							width={50}
							height={50}
							sizes="(min-width: 50px)"
						/>
						<div className="text-xl md:text-2xl font-light">
							Время работы технической поддержки: 09:00-20:00
						</div>
					</div>
					<div className="flex items-center gap-5">
						<Image
							src={'./img/phone-target.svg'}
							alt="Телефон"
							width={50}
							height={50}
							sizes="(min-width: 50px)"
						/>
						<div className="text-xl md:text-2xl font-light">
							+7 (923) 300-99-88
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-center px-0 lg:px-20 py-5  bg-black w-full text-white border-t-2">
				KRSKNET.RU © ВСЕ ПРАВА ЗАЩИЩЕНЫ {new Date().getFullYear()}
			</div>
		</>
	);
}
