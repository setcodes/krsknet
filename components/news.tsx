import Image from 'next/image';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';
import DialogWindow from './parts/DialogWindow';

export default function News() {
	return (
		<>
			<div className="flex flex-col justify-center gap-5 mt-10 px-0 xl:px-20">
				<h3 className="flex justify-center items-center text-2xl md:text-5xl my-20 font-bold">
					НОВОСТИ
				</h3>
				<div className="flex flex-col xl:flex-row gap-5">
					<div className="flex flex-col w-12/12 xl:w-5/12 gap-y-20">
						<div className="text-3xl my-10">ПОСЛЕДНИЕ НОВОСТИ КОМПАНИИ</div>
						<div className="flex  gap-3">
							<div className="w-[30px]">
								<Image
									src={'/img/arrow-down.svg'}
									alt="logo"
									width={50}
									height={50}
									style={{
										width: '30px',
										height: '30px',
										minWidth: '30px',
										maxWidth: '30px',
									}}
								/>
							</div>
							<div className="flex flex-col">
								<div className="text-2xl">
									<span className="font-light">
										<span className="font-bold text-red-700 mr-5">ВАЖНОЕ</span>
										01.06.2024 г.
									</span>
								</div>
								<div className="text-2xl uppercase mb-5">
									Технические работы
								</div>
								<div className="text-2xl font-light">
									Уважаемые абоненты, в 05.06.24 будут проводится технические
									работы.
								</div>
							</div>
						</div>
						<div className="flex gap-3">
							<div className="w-[30px]">
								<Image
									src={'/img/arrow-down.svg'}
									alt="logo"
									width={50}
									height={50}
									style={{
										width: '30px',
										height: '30px',
										minWidth: '30px',
										maxWidth: '30px',
									}}
								/>
							</div>
							<div className="flex flex-col">
								<div className="text-2xl">
									<span className="font-light">
										<span className="font-bold text-red-700 mr-5">ВАЖНОЕ</span>
										15.05.2024 г.
									</span>
								</div>
								<div className="text-2xl uppercase mb-5">
									ДОБАВЛЕН НОВЫЙ СПОСОБ ОПЛАТЫ
								</div>
								<div className="text-2xl font-light">
									Теперь вы можете оплатить интернет картами банка Тинькофф
								</div>
							</div>
						</div>
						<div className="flex gap-3">
							<div className="w-[30px]">
								<Image
									src={'/img/arrow-down.svg'}
									alt="logo"
									width={50}
									height={50}
									style={{
										width: '30px',
										height: '30px',
										minWidth: '30px',
										maxWidth: '30px',
									}}
								/>
							</div>
							<div className="flex flex-col">
								<div className="text-2xl">
									<span className="font-light">
										<span className="font-bold text-red-700 mr-5">ВАЖНОЕ</span>
										10.04.2024 г.
									</span>
								</div>
								<div className="text-2xl uppercase mb-5">
									Изменения в тарифных планах
								</div>
								<div className="text-2xl font-light">
									С 15 апреля 2024 года мы вносим изменения в наименования наших
									тарифов.
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-end w-12/12 xl:w-7/12">
						<div className="flex mb-10 xl:mb-32 w-full">
							{useTheme().theme === 'light' ? (
								<Image
									src={'/img/news-b-clear.svg'}
									alt="logo"
									width={100}
									height={100}
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'contain',
									}}
									sizes="100vw"
								/>
							) : (
								<Image
									src={'/img/news-w-clear.svg'}
									alt="logo"
									width={100}
									height={100}
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'contain',
									}}
									sizes="100vw"
								/>
							)}
						</div>
						<div className="flex flex-col 2xl:flex-row">
							<div className="flex flex-col mr-0 2xl:mr-3">
								<div className="text-2xl">
									<span className="font-light">
										<span className="font-bold text-red-700 mr-5">НОВОЕ</span>
										05.06.2024 г.
									</span>
								</div>
								<div className="text-2xl uppercase mb-5">
									НОВЫЙ РЕГИОН ДОСТУпеН ДЛЯ ПОДКЛЮЧЕНИЯ
								</div>
								<div className="text-2xl font-light">
									Рады сообщить, что теперь наш интернет доступен в городе Охта.
									Все подробности читайте в статье.
								</div>
							</div>
							<DialogWindow
								button={
									<Button
										variant={'destructive'}
										className="text-1xl md:text-2xl rounded-2xl uppercase bg-red-700 font-bold border-2 border-red-700 py-10 px-20 mt-10 "
									>
										ЧИТАТЬ
									</Button>
								}
								content={
									<>
										<div className="flex flex-col mr-0 2xl:mr-3 w-3/3">
											<div className="text-2xl">
												<span className="font-light">
													<span className="font-bold text-red-700 mr-5">
														НОВОЕ
													</span>
													05.06.2024 г.
												</span>
											</div>
											<div className="text-2xl uppercase mb-5">
												НОВЫЙ РЕГИОН ДОСТУпеН ДЛЯ ПОДКЛЮЧЕНИЯ
											</div>
											<div className="text-2xl font-light mb-10">
												Рады сообщить, что теперь наш интернет доступен в городе
												Охта. Все подробности читайте в статье. Lorem ipsum,
												dolor sit amet consectetur adipisicing elit. Quas,
												nostrum asperiores natus atque mollitia cumque et non
												perspiciatis laboriosam nihil, ullam maiores quisquam
												repellat laudantium deleniti quo similique eum ipsam.
											</div>
											<div className="text-2xl font-light">
												Рады сообщить, что теперь наш интернет доступен в городе
												Охта. Все подробности читайте в статье. Lorem ipsum,
												dolor sit amet consectetur adipisicing elit. Quas,
												nostrum asperiores natus atque mollitia cumque et non
												perspiciatis laboriosam nihil, ullam maiores quisquam
												repellat laudantium deleniti quo similique eum ipsam.
											</div>
										</div>
									</>
								}
							></DialogWindow>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
