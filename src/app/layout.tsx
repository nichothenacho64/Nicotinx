import type { Metadata } from "next";
import "@/ui/globals.css";
import { dmSans, nunitoSans } from "@/ui/fonts";

export const metadata: Metadata = {
	title: "My Personal Website",
	description: "Personal website built by Nico Napoli with Next.js"
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${nunitoSans.variable} ${dmSans.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
