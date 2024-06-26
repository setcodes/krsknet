import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Logo() {
	return (
		<>
			{useTheme().theme === 'light' ? (
				<Image
					src={'./img/logo-b-2.svg'}
					alt="KRSKNET"
					width={200}
					height={100}
					// sizes="(max-width: 768px) 100vw, 33vw"
				/>
			) : (
				<Image
					src={'./img/logo-w-2.svg'}
					alt="KRSKNET"
					width={200}
					height={100}
					// sizes="(max-width: 768px) 100vw, 33vw"
				/>
			)}
		</>
	);
}
