import { User } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Personal() {
	return (
		<>
			<Link href={'http://lk.krsknet.ru/'} target="_blank">
				<Button
					variant={'ghost'}
					className="text-1xl uppercase rounded-xl border-2 border-red-700 py-7 px-5"
				>
					<User className="mr-2 h-6 w-6" /> Личный кабинет
				</Button>
			</Link>
		</>
	);
}
