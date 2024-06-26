import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

export default function Services() {
	return (
		<>
			<div className="flex flex-col justify-center gap-5 mt-10 px-0 xl:px-20 container">
				<h3
					id="SERVICES"
					className="flex justify-center items-center text-2xl lg:text-5xl my-20 font-bold"
				>
					УСЛУГИ
				</h3>
				<div className="flex justify-center">
					<Tabs
						defaultValue="setting"
						className="w-full flex flex-col justify-center items-center gap-5"
					>
						<TabsList className="w-full h-auto lg:h-0 flex flex-col lg:flex-row justify-between py-5 lg:py-10 px-3 rounded-xl mx-auto bg-neutral-700">
							<TabsTrigger
								className="text-3xl rounded-xl w-full lg:w-4/12"
								value="setting"
							>
								НАСТРОЙКА
							</TabsTrigger>
							<TabsTrigger
								className="text-3xl rounded-xl w-full lg:w-4/12"
								value="change"
							>
								ЗАМЕНА
							</TabsTrigger>
							<TabsTrigger
								className="text-3xl rounded-xl w-full lg:w-4/12"
								value="build"
							>
								МОНТАЖ
							</TabsTrigger>
						</TabsList>
						<div className="w-full border-2 border-borderWhiteOrBlack rounded-xl py-10 gap-5">
							<TabsContent value="setting">
								<div className="flex flex-col lg:flex-row justify-between items-center w-full px-5 lg:px-20 gap-2 mb-10">
									<div className="text-2xl w-fit flex whitespace-normal lg:whitespace-nowrap justify-center lg:justify-start">
										Настройка роутера при подключении
									</div>
									<div className="border-b-4 border-dotted border-borderWhiteOrBlack w-full mx-10"></div>
									<div className="text-2xl text-red-700 font-bold w-fit flex justify-center whitespace-nowrap lg:justify-end">
										Бесплатно
									</div>
								</div>
								<div className="flex flex-col lg:flex-row justify-between items-center w-full px-5 lg:px-20 gap-2 ">
									<div className="text-2xl w-fit flex whitespace-nowrap justify-center lg:justify-start">
										Настройка роутера
									</div>
									<div className="border-b-4 border-dotted border-borderWhiteOrBlack w-full mx-10"></div>
									<div className="text-2xl text-red-700 font-bold w-fit flex whitespace-normal lg:whitespace-nowrap  justify-center lg:justify-end">
										300 руб.
									</div>
								</div>
							</TabsContent>
							<TabsContent value="change">
								<div className="flex flex-col lg:flex-row justify-between items-center w-full px-5 lg:px-20 gap-2 mb-10">
									<div className="text-2xl w-fit flex whitespace-normal xl:whitespace-nowrap justify-center lg:justify-start">
										Замена абонентского устройства (ONU) по вине абонента
									</div>
									<div className="border-b-4 border-dotted border-borderWhiteOrBlack w-full mx-10"></div>
									<div className="text-2xl text-red-700 font-bold w-fit flex justify-center whitespace-normal lg:whitespace-nowrap lg:justify-end">
										2500 руб.
									</div>
								</div>
								<div className="flex flex-col lg:flex-row justify-between items-center w-full px-5 lg:px-20 gap-2 mb-10">
									<div className="text-2xl w-fit flex whitespace-normal lg:whitespace-nowrap justify-center lg:justify-start">
										Замена блока питания на ONU по вине абонента
									</div>
									<div className="border-b-4 border-dotted border-borderWhiteOrBlack w-full mx-10"></div>
									<div className="text-2xl text-red-700 font-bold w-fit flex whitespace-normal lg:whitespace-nowrap  justify-center lg:justify-end">
										500 руб.
									</div>
								</div>
								<div className="flex flex-col lg:flex-row justify-between items-center w-full px-5 lg:px-20 gap-2">
									<div className="text-2xl w-fit flex whitespace-normal lg:whitespace-nowrap justify-center lg:justify-start">
										Замена коннектора
									</div>
									<div className="border-b-4 border-dotted border-borderWhiteOrBlack w-full mx-10"></div>
									<div className="text-2xl text-red-700 font-bold w-fit flex whitespace-normal lg:whitespace-nowrap  justify-center lg:justify-end">
										150 руб.
									</div>
								</div>
							</TabsContent>
							<TabsContent value="build">
								<div className="flex flex-col lg:flex-row justify-between items-center w-full px-5 lg:px-20 gap-2 mb-10">
									<div className="text-2xl w-fit flex whitespace-normal lg:whitespace-nowrap justify-center lg:justify-start">
										Монтаж оптического кабеля FTTH за 1 метр
									</div>
									<div className="border-b-4 border-dotted border-borderWhiteOrBlack w-full mx-10"></div>
									<div className="text-2xl text-red-700 font-bold w-fit flex justify-center whitespace-normal lg:whitespace-nowrap lg:justify-end">
										20 руб.
									</div>
								</div>
								<div className="flex flex-col lg:flex-row justify-between items-center w-full px-5 lg:px-20 gap-2 mb-10">
									<div className="text-2xl w-fit flex whitespace-normal lg:whitespace-nowrap justify-center lg:justify-start">
										Стоимость оптического кабеля FTTH за 1 метр
									</div>
									<div className="border-b-4 border-dotted border-borderWhiteOrBlack w-full mx-10"></div>
									<div className="text-2xl text-red-700 font-bold w-fit flex whitespace-normal lg:whitespace-nowrap  justify-center lg:justify-end">
										17 руб.
									</div>
								</div>
								<div className="flex flex-col lg:flex-row justify-between items-center w-full px-5 lg:px-20 gap-2 mb-10">
									<div className="text-2xl w-fit flex whitespace-normal lg:whitespace-nowrap justify-center lg:justify-start">
										Монтаж кабеля UTP за 1 метр
									</div>
									<div className="border-b-4 border-dotted border-borderWhiteOrBlack w-full mx-10"></div>
									<div className="text-2xl text-red-700 font-bold w-fit flex whitespace-normal lg:whitespace-nowrap  justify-center lg:justify-end">
										20 руб.
									</div>
								</div>
								<div className="flex flex-col lg:flex-row justify-between items-center w-full px-5 lg:px-20 gap-2">
									<div className="text-2xl w-fit flex whitespace-normal lg:whitespace-nowrap justify-center lg:justify-start">
										Стоимость кабеля UTP за 1 метр
									</div>
									<div className="border-b-4 border-dotted border-borderWhiteOrBlack w-full mx-10"></div>
									<div className="text-2xl text-red-700 font-bold w-fit flex whitespace-normal lg:whitespace-nowrap  justify-center lg:justify-end">
										20 руб.
									</div>
								</div>
							</TabsContent>
						</div>
					</Tabs>
				</div>
			</div>
		</>
	);
}
