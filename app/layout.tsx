import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import './globals.css';

const myFont = localFont({
	src: [
		{
			path: '../assets/fonts/UniSans-Light.woff2',
			weight: '300',
			style: 'light',
		},
		{
			path: '../assets/fonts/UniSans-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/UniSans-SemiBold.woff2',
			weight: '700',
			style: 'bold',
		},
	],
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
	keywords: '111',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<head />
				<body className={myFont.className}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
