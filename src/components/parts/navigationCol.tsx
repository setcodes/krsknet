import Link from 'next/link';

export default function NavigationCol() {
	return (
		<>
			<ul className="flex flex-col justify-center lg:justify-start gap-5 text-2xl font-light  uppercase">
				<li>
					<Link href={'#PRICE'}>Тарифы</Link>
				</li>
				<li>
					<Link href={'#STOCKS'}>Акции</Link>
				</li>
				<li>
					<Link href={'#SERVICES'}>Услуги</Link>
				</li>
				<li>
					<Link href={'#QA'}>Вопросы</Link>
				</li>
				<li>
					<Link href={'#FOOTER'}>Контакты</Link>
				</li>
			</ul>
		</>
	);
}
