import type { Metadata } from "next";
import "@/ui/globals.css";
import { dmSans, nunitoSans } from "@/ui/fonts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
	title: "Nico Napoli's Personal Website",
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
				<Navbar />
				<main className="body-container">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
