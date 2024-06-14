import Image from 'next/image';

export default function HowWeWork() {
	return (
		<>
			<div className="flex flex-col justify-center gap-5 ">
				<h3 className="flex justify-center items-center text-2xl md:text-4xl my-20">
					КАК ПОДКЛЮЧИТЬ ИНТЕРНЕТ
				</h3>
				<div className="flex flex-col lg:flex-row w-full gap-5">
					<div className="flex flex-col justify-center items-center md:flex-row gap-5  w-12/12 md:w-6-12 w-full border border-borderKrsknet rounded-lg py-10 px-10">
						<div className="w-full md:w-2/3">
							<div className="text-5xl text-red-700 font-light">#1</div>
							<div className="text-2xl">
								Проверьте свой адрес для подключения
							</div>
						</div>
						<div>
							<Image
								src={'/img/step1.png'}
								alt="logo"
								width={150}
								height={150}
							/>
						</div>
					</div>
					<div className="flex flex-col justify-center items-center md:flex-row gap-5 w-12/12 md:w-6-12 w-full border border-borderKrsknet rounded-lg py-10 px-10">
						<div className="w-full md:w-2/3">
							<div className="text-4xl text-red-700 font-light">#2</div>
							<div className="text-2xl">
								Ознакомьтесь со всеми доступными тарифами и услугами
							</div>
						</div>
						<div>
							<Image
								src={'/img/step2.png'}
								alt="logo"
								width={150}
								height={150}
								sizes="(min-width: 150px)"
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row w-full gap-5">
					<div className="flex flex-col justify-center items-center md:flex-row gap-5 w-12/12 md:w-6-12 w-full border border-borderKrsknet rounded-lg py-10 px-10">
						<div className="w-full md:w-2/3">
							<div className="text-4xl text-red-700 font-light">#3</div>
							<div className="text-2xl">
								Заполните и отправьте заявку на подключение
							</div>
						</div>
						<div>
							<Image
								src={'/img/step3.png'}
								alt="logo"
								width={150}
								height={150}
								sizes="(min-width: 150px)"
							/>
						</div>
					</div>
					<div className="flex flex-col justify-center items-center md:flex-row gap-5 w-12/12 md:w-6-12 w-full border border-borderKrsknet rounded-lg py-10 px-10">
						<div className="w-full md:w-2/3">
							<div className="text-4xl text-red-700 font-light">#4</div>
							<div className="text-2xl">
								Ожидайте подключения в ближайшее время
							</div>
						</div>
						<div>
							<Image
								src={'/img/step4.png'}
								alt="logo"
								width={150}
								height={150}
								sizes="(min-width: 150px)"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
