import { Cctv } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

export default function VideoControl() {
	return (
		<>
			<div className="flex flex-col justify-center gap-5 mt-10 ">
				<h3 className="flex justify-center items-center text-2xl md:text-5xl my-20 font-bold">
					ВИДЕОНАБЛЮДЕНИЕ
				</h3>
				<div className="flex flex-col lg:flex-row gap-5">
					<div className="flex flex-col justify-center items-center w-12/12 lg:w-6/12">
						<div className="flex  text-3xl font-light  mt-10">
							<span>
								Компания <span className="text-red-700 font-bold">KRSKNET</span>{' '}
								предлагает услуги по установке системы видеонаблюдения.
							</span>
						</div>
						<div className="flex  text-3xl font-light  mt-10">
							Вы можете выбрать, какую территорию вы хотите защитить: свою
							квартиру, подъезд или любую другую площадь.
						</div>
						<div className="flex justify-center text-3xl font-light  mx-auto  mt-10">
							<span>
								<span className="font-bold">Система видеонаблюдения</span> — это
								надёжное средство защиты для вас и вашего дома, а также для
								вашего бизнеса.
							</span>
						</div>
					</div>
					<div className="flex w-12/12 lg:w-6/12">
						<div className="flex justify-center items-center w-full relative">
							<div className="hidden lg:flex">
								<Image
									src={'/img/video.png'}
									alt="logo"
									width={1000}
									height={200}
									style={{
										width: '100%',
										height: '100%',
									}}
									sizes="100vw"
								/>
							</div>
							<div className="flex justify-center items-center lg:absolute left-2 right-0 top-0 bottom-12 ">
								<Button
									variant={'outline'}
									className=" text-1xl sm:text-2xl  rounded-2xl uppercase bg-red-700 font-bold border-2 border-red-700 py-10 px-20 mt-10"
								>
									<Cctv className="mr-5 h-10 w-10" />
									ПОДКЛЮЧИТЬ
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
