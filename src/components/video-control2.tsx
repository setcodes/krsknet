import { Cctv } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';
import DialogForm from './parts/DialogForm';

export default function VideoControl2() {
	return (
		<>
			{/* 2xl:bg-[url('/img/video.png')] */}
			<div className="flex flex-col justify-center w-full mt-10 ">
				<h3 className="flex justify-center items-center text-2xl md:text-5xl my-20 font-bold">
					ВИДЕОНАБЛЮДЕНИЕ
				</h3>
				<div className="flex flex-col h-full relative p-0 xl:py-44">
					<div className="flex flex-col justify-center items-center text-center h-full z-10">
						<div className="flex  text-2xl lg:text-3xl font-light mt-10 w-9/12 xl:w-8/12">
							<span>
								Компания{' '}
								<span className="text-red-700 font-bold">KRSKNET </span>
								предлагает услуги по установке системы видеонаблюдения. Вы
								можете выбрать, какую территорию вы хотите защитить: свою
								квартиру, подъезд или любую другую площадь.
							</span>
						</div>

						<div className="flex justify-center text-2xl lg:text-3xl font-light w-10/12 xl:w-8/12 mt-10">
							<span>
								<span className="font-bold">Система видеонаблюдения</span> — это
								надёжное средство защиты для вас и вашего дома, а также для
								вашего бизнеса.
							</span>
						</div>
						<div className="flex justify-center items-center">
							<DialogForm
								button={
									<Button
										variant={'destructive'}
										className="text-1xl md:text-2xl  rounded-2xl uppercase bg-red-700 font-bold border-2 border-red-700 py-10 px-5 md:px-20 mt-10 "
									>
										<Cctv className="mr-5 h-10 w-10" />
										ПОДКЛЮЧИТЬ
									</Button>
								}
							></DialogForm>
						</div>
					</div>
					<div className="hidden xl:flex absolute left-0 right-0 bottom-0 top-0 z-0">
						{useTheme().theme === 'light' ? (
							<Image
								src={'./img/video-w.svg'}
								alt="видеонаблюдение"
								width={150}
								height={150}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'fill',
								}}
								sizes="100vw"
							/>
						) : (
							<Image
								src={'./img/video-b.svg'}
								alt="видеонаблюдение"
								width={150}
								height={150}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'fill',
								}}
								sizes="100vw"
							/>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
