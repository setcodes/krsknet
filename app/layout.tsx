import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import './globals.css';

const myFont = localFont({
	src: [
		{
			path: '../assets/fonts/UniSansLight.woff2',
			weight: '300',
			style: 'light',
		},
		{
			path: '../assets/fonts/UniSansRegular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/UniSansSemiBold.woff2',
			weight: '700',
			style: 'bold',
		},
	],
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'KRSKNET',
	description: 'Интернет в частном секторе Красноярского края',
	keywords: 'Интернет',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<html
				lang="ru"
				suppressHydrationWarning={true}
				className={myFont.className}
				style={{ scrollBehavior: 'smooth' }}
			>
				<head />
				<body>
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
