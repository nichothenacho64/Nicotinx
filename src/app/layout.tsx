import type { Metadata } from "next";
import "@/ui/globals.css";
import "@/ui/case-studies.css";
import "@/ui/footer.css";
import "@/ui/home.css";
import "@/ui/contact.css";
import { dmSans, nunitoSans } from "@/ui/fonts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
	title: "Nico Napoli | UX/UI Designer website",
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
