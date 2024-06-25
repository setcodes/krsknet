import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Contact() {
	return (
		<>
			<Phone className="mr-2 h-4 w-4 2xl:h-8 2xl:w-8 accent-accentKrsknet text-red-600"></Phone>
			<Link className="text-1xl 2xl:text-2xl" href={'tel:79233009988'}>
				{'+7 (923) 300-99-88'}
			</Link>
		</>
	);
}
