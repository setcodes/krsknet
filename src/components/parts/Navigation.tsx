import Link from 'next/link';

export default function Navigation() {
	return (
		<ul className="flex flex-col lg:flex-row gap-5 text-1xl 2xl:text-2xl  uppercase">
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
	);
}
