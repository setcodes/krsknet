import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Separator } from '@/components/ui/separator';

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
import NavigationCol from './navigationCol';
import { useState } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';

export default function MobileMenu() {
	const [open, setOpen] = useState(false);
	// const router = useRouter();

	const toggleClose = () => {
		setOpen((prevState) => !prevState);
	};
	return (
		<div className="flex xl:hidden ">
			<Drawer open={open} onOpenChange={setOpen} modal={true}>
				<DrawerTrigger
					// variant={'ghost'}
					className="flex text-1xl uppercase border-2 rounded-lg border-red-700 py-7 px-5"
				>
					<Menu className="mr-2 h-6 w-6" /> МЕНЮ
				</DrawerTrigger>

				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle className="my-5 text-3xl text-center">
							МЕНЮ
						</DrawerTitle>

						<DrawerDescription>
							{/* <NavigationCol onOpenChange={setOpen} /> */}
							<ul className="flex flex-col justify-center gap-5 text-2xl font-light text-center  uppercase mx-auto">
								<li>
									<Link href={'#PRICE'} onClick={toggleClose}>
										Тарифы
									</Link>
								</li>
								<li>
									<Link href={'#STOCKS'} onClick={toggleClose}>
										Акции
									</Link>
								</li>
								<li>
									<Link href={'#SERVICES'} onClick={toggleClose}>
										Услуги
									</Link>
								</li>
								<li>
									<Link href={'#QA'} onClick={toggleClose}>
										Вопросы
									</Link>
								</li>
								<li>
									<Link href={'#FOOTER'} onClick={toggleClose}>
										Контакты
									</Link>
								</li>
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
