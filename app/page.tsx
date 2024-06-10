'use client';

import * as React from 'react';
import Image from 'next/image';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Logo from '../assets/img/1.svg';
import Logo2 from '../assets/img/2.svg';

export default function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<>
			<div className="container  flex flex-col justify-center items-center h-screen">
				<div className="border-solid border-2 border-accentKrsknet"></div>
				{useTheme().theme === 'light' ? (
					<Logo height={150} width={150} />
				) : (
					<Logo2 height={150} width={150} />
				)}

				<div className="flex justify-center items-center font-light  text-xl md:text-6xl">
					ИНТЕРНЕТ
				</div>
				<div className="flex justify-center items-center font-normal  text-xl md:text-6xl">
					ИНТЕРНЕТ
				</div>
				<div className="flex justify-center items-center font-semibold  text-xl md:text-6xl">
					ИНТЕРНЕТ
				</div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" size="icon">
							<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
							<span className="sr-only">Toggle theme</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem onClick={() => setTheme('light')}>
							Light
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme('dark')}>
							Dark
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme('system')}>
							System
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</>
	);
}
