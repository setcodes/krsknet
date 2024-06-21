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

export default function MobileMenu() {
	return (
		<div className="flex xl:hidden">
			<Drawer>
				<DrawerTrigger
					// variant={'ghost'}
					className="flex text-1xl uppercase border-2 rounded-lg border-red-700 py-7 px-5"
				>
					<Menu className="mr-2 h-6 w-6" /> МЕНЮ
				</DrawerTrigger>

				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle className="my-5 text-3xl">МЕНЮ</DrawerTitle>

						<DrawerDescription>
							<NavigationCol />
							<div className="border-b-2 border-borderWhiteOrBlack my-10"></div>
							<Personal />
							<ToggleTheme />
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
