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
						<DrawerTitle>11</DrawerTitle>
						<DrawerDescription></DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<Button>Submit</Button>
						<DrawerClose>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
}
