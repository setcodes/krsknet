import { Button } from '@/components/ui/button';
import Iframe from 'react-iframe';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { IDialogForm } from '../types/dialogForm.prop';

export default function DialogForm({ button }: IDialogForm) {
	return (
		<>
			<Dialog>
				<DialogTrigger asChild>{button}</DialogTrigger>

				<DialogContent className="min-w-full h-screen px-10 py-10  ">
					<div className="">
						<Iframe
							url="http://zayavka.krsknet.ru/"
							width="100%"
							height="100%"
						></Iframe>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}
