import { Menu } from 'lucide-react';
import { Button } from '../ui/button';

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import Navigation from './Navigation';
import Personal from './Personal';
import ToggleTheme from './ToggleTheme';
import { useState } from 'react';

export default function MobileMenu() {
	const [open, setOpen] = useState(false);

	const toggleClose = () => {
		setOpen((prevState) => !prevState);
	};
	const scrollToId = (id: string) => {
		setTimeout(() => {
			const el = document.getElementById(id);
			el?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest',
			});
		}, 400);
	};
	return (
		<div className="flex xl:hidden z-50">
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger className="flex text-1xl uppercase border-2 rounded-lg border-red-700 py-7 px-5">
					<Menu className="mr-2 h-6 w-6" /> МЕНЮ
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle className="my-5 text-3xl text-center">
							МЕНЮ
						</DrawerTitle>

						<DrawerDescription>
							<ul className="flex flex-col justify-center gap-5 text-2xl font-light text-center  uppercase mx-auto">
								<li onClick={(scrollToId('PRICE'), toggleClose)}>Тарифы</li>
								<li onClick={(scrollToId('STOCKS'), toggleClose)}>Акции</li>
								<li onClick={(scrollToId('SERVICES'), toggleClose)}>Услуги</li>
								<li onClick={(scrollToId('QA'), toggleClose)}>Вопросы</li>
								<li onClick={(scrollToId('FOOTER'), toggleClose)}>Контакты</li>
							</ul>
							<div className="flex  border-b-2 border-borderWhiteOrBlack my-10"></div>
							<div className="flex justify-center">
								<Personal />
								<ToggleTheme />
							</div>
						</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<DrawerClose>
							<Button variant="default" className="w-full">
								ЗАКРЫТЬ
							</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
}
