import { useTheme } from 'next-themes';
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';

export default function ToggleTheme() {
	const { setTheme } = useTheme();
	return (
		<>
			{useTheme().theme === 'light' ? (
				<Button
					variant="ghost"
					size="sm"
					className="h-[3.5rem] w-[3.5rem]"
					onClick={() => setTheme('dark')}
				>
					<Sun className=" text-white-600" />
				</Button>
			) : (
				<Button
					variant="ghost"
					size="sm"
					className="h-[3.5rem] w-[3.5rem]"
					onClick={() => setTheme('light')}
				>
					<Moon className=" rotate-0 transition-all dark:rotate-0" />
				</Button>
			)}
		</>
	);
}
