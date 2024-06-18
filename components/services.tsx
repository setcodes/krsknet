import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

export default function Services() {
	return (
		<>
			<div className="flex flex-col justify-center gap-5 mt-10 px-0 xl:px-20">
				<h3 className="flex justify-center items-center text-2xl md:text-5xl my-20 font-bold">
					УСЛУГИ
				</h3>
				<div className="flex justify-center">
					<Tabs
						defaultValue="setting"
						className="w-full flex flex-col justify-center items-center gap-5"
					>
						<TabsList className="w-full lg:w-10/12 h-auto md:h-0 flex flex-col md:flex-row justify-between py-5 md:py-10 px-3 rounded-xl mx-auto bg-neutral-700">
							<TabsTrigger
								className="text-3xl rounded-xl w-full md:w-4/12"
								value="setting"
							>
								НАСТРОЙКА
							</TabsTrigger>
							<TabsTrigger
								className="text-3xl rounded-xl w-full md:w-4/12"
								value="change"
							>
								ЗАМЕНА
							</TabsTrigger>
							<TabsTrigger
								className="text-3xl rounded-xl w-full md:w-4/12"
								value="build"
							>
								МОНТАЖ
							</TabsTrigger>
						</TabsList>
						<div className="w-full lg:w-10/12 border-2 border-borderWhiteOrBlack rounded-xl py-10 gap-5">
							<TabsContent value="setting">
								<div className="flex flex-col md:flex-row justify-between items-center w-full px-5 md:px-20 gap-2 mb-10">
									<div className="text-2xl w-fit flex whitespace-normal md:whitespace-nowrap justify-center md:justify-start">
										Настройка роутера при подключении
									</div>
									<div className="border-b-4 border-dotted border-borderWhiteOrBlack w-full mx-10"></div>
									<div className="text-2xl text-red-700 font-bold w-fit flex justify-center md:justify-end">
										Бесплатно
									</div>
								</div>
								<div className="flex flex-col md:flex-row justify-between items-center w-full px-5 md:px-20 gap-2">
									<div className="text-2xl w-fit flex whitespace-nowrap justify-center md:justify-start">
										Настройка роутера
									</div>
									<div className="border-b-4 border-dotted border-borderWhiteOrBlack w-full mx-10"></div>
									<div className="text-2xl text-red-700 font-bold w-fit flex whitespace-normal md:whitespace-nowrap  justify-center md:justify-end">
										300 руб.
									</div>
								</div>
							</TabsContent>
							<TabsContent value="change">1</TabsContent>
							<TabsContent value="build">2</TabsContent>
						</div>
					</Tabs>
				</div>
			</div>
		</>
	);
}
