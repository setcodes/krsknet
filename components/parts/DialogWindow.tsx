import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { IDialogWindow } from '../types/dialogWindow.prop';

export default function DialogWindow({ button, content }: IDialogWindow) {
	return (
		<>
			<Dialog>
				<DialogTrigger asChild>{button}</DialogTrigger>

				<DialogContent className="w-full h-2/3 md:h-auto lg:max-w-fit px-5 lg:px-10 py-5 lg:py-10">
					<div className="overflow-auto">{content}</div>
				</DialogContent>
			</Dialog>
		</>
	);
}
