import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function HowWeWork() {
	return (
		<>
			<div className="flex flex-col justify-center gap-5 w-full lg:container">
				<h3
					id="HWW"
					className="flex justify-center items-center text-3xl md:text-5xl my-20 font-bold"
				>
					КАК ПОДКЛЮЧИТЬ ИНТЕРНЕТ
				</h3>
				<div className="flex flex-col lg:flex-row w-full gap-5">
					<div className="flex flex-col justify-center items-center md:flex-row gap-5  w-12/12 md:w-6-12 w-full border border-borderKrsknet rounded-lg py-10 px-10">
						<div className="w-full md:w-2/3">
							<div className="text-5xl text-red-700 font-light">#1</div>
							<div className="text-2xl xl:text-3xl">
								Проверьте свой адрес для подключения
							</div>
						</div>
						<div>
							{useTheme().theme === 'light' ? (
								<Image
									src={'./img/step1-b.svg'}
									alt="Проверьте свой адрес"
									width={200}
									height={200}
									sizes="(min-width: 200px)"
								/>
							) : (
								<Image
									src={'./img/step1-w.svg'}
									alt="Проверьте свой адрес"
									width={200}
									height={200}
									sizes="(min-width: 200px)"
								/>
							)}
						</div>
					</div>
					<div className="flex flex-col justify-center items-center md:flex-row gap-5 w-12/12 md:w-6-12 w-full border border-borderKrsknet rounded-lg py-10 px-10">
						<div className="w-full md:w-2/3">
							<div className="text-4xl text-red-700 font-light">#2</div>
							<div className="text-2xl xl:text-3xl">
								Ознакомьтесь со всеми доступными тарифами и услугами
							</div>
						</div>
						<div>
							{useTheme().theme === 'light' ? (
								<Image
									src={'./img/step2-b.svg'}
									alt="Ознакомьтесь c тарифами"
									width={200}
									height={200}
									sizes="(min-width: 200px)"
								/>
							) : (
								<Image
									src={'./img/step2-w.svg'}
									alt="Ознакомьтесь c тарифами"
									width={200}
									height={200}
									sizes="(min-width: 200px)"
								/>
							)}
						</div>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row w-full gap-5">
					<div className="flex flex-col justify-center items-center md:flex-row gap-5 w-12/12 md:w-6-12 w-full border border-borderKrsknet rounded-lg py-10 px-10">
						<div className="w-full md:w-2/3">
							<div className="text-4xl text-red-700 font-light">#3</div>
							<div className="text-2xl xl:text-3xl">
								Заполните и отправьте заявку на подключение
							</div>
						</div>
						<div>
							{useTheme().theme === 'light' ? (
								<Image
									src={'./img/step3-b.svg'}
									alt="Заполните и отправьте заявку"
									width={200}
									height={200}
									sizes="(min-width: 200px)"
								/>
							) : (
								<Image
									src={'./img/step3-w.svg'}
									alt="Заполните и отправьте заявку"
									width={200}
									height={200}
									sizes="(min-width: 200px)"
								/>
							)}
						</div>
					</div>
					<div className="flex flex-col justify-center items-center md:flex-row gap-5 w-12/12 md:w-6-12 w-full border border-borderKrsknet rounded-lg py-10 px-10">
						<div className="w-full md:w-2/3">
							<div className="text-4xl text-red-700 font-light">#4</div>
							<div className="text-2xl xl:text-3xl">
								Ожидайте подключения в ближайшее время
							</div>
						</div>
						<div>
							{useTheme().theme === 'light' ? (
								<Image
									src={'./img/step4-b.svg'}
									alt="Ожидайте подключения"
									width={200}
									height={200}
									sizes="(min-width: 200px)"
								/>
							) : (
								<Image
									src={'./img/step4-w.svg'}
									alt="Ожидайте подключения"
									width={200}
									height={200}
									sizes="(min-width: 200px)"
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
