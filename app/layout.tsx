import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
	variable: "--font-dm-sans", // creating the variable for CSS usage
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "My Personal Website",
	description: "Not much to see here... yet!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode; // children = current page rendered
}>) {
	return (
		<html lang="en">
			<body className={`${dmSans.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
