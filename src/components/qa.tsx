import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export default function QA() {
	return (
		<>
			<div className="flex flex-col justify-center gap-5 mt-10 px-0 xl:px-20">
				<h3
					id="QA"
					className="flex justify-center items-center text-2xl md:text-5xl my-20 font-bold"
				>
					ВОПРОСЫ И ОТВЕТЫ
				</h3>
			</div>

			<div className="flex justify-center items-center w-full lg:w-9/12 mx-auto container">
				<Accordion
					type="multiple"
					className="w-full text-2xl flex flex-col gap-10"
				>
					<AccordionItem value="item-1">
						<AccordionTrigger className="hover:no-underline text-3xl uppercase border-b-2 border-borderWhiteOrBlack ">
							Что такое Личный кабинет пользователя?
						</AccordionTrigger>
						<AccordionContent className="text-2xl font-light py-5">
							Личный кабинет пользователя — это раздел web-сервера Оператора,
							доступ к которому возможен только с использованием авторизационных
							данных (логина и пароля), содержащий данные о состоянии лицевого
							счета абонента, историю зачисления авансовых платежей, информацию
							о действующих тарифах, отчетность, уведомления об изменении
							тарифов и условий оказания услуг.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger className="hover:no-underline text-3xl uppercase border-b-2 border-borderWhiteOrBlack">
							Когда мне надо платить абонентскую плату?
						</AccordionTrigger>
						<AccordionContent className="text-2xl font-light py-5">
							Личный кабинет пользователя — это раздел web-сервера Оператора,
							доступ к которому возможен только с использованием авторизационных
							данных (логина и пароля), содержащий данные о состоянии лицевого
							счета абонента, историю зачисления авансовых платежей, информацию
							о действующих тарифах, отчетность, уведомления об изменении
							тарифов и условий оказания услуг.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger className="hover:no-underline text-3xl uppercase border-b-2 border-borderWhiteOrBlack">
							Как проверить скорость соединения с Интернет?
						</AccordionTrigger>
						<AccordionContent className="text-2xl font-light py-5">
							Личный кабинет пользователя — это раздел web-сервера Оператора,
							доступ к которому возможен только с использованием авторизационных
							данных (логина и пароля), содержащий данные о состоянии лицевого
							счета абонента, историю зачисления авансовых платежей, информацию
							о действующих тарифах, отчетность, уведомления об изменении
							тарифов и условий оказания услуг.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</>
	);
}
