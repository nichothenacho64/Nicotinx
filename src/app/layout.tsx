import type { Metadata } from "next";
import "@/styles/globals.css";
import { dmSans, nunitoSans } from "@/ui/fonts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { ContactModalProvider } from "@/ui/contact-context";
import ScrollToTop from "@/ui/scroll-to-top";

export const metadata: Metadata = {
	title: "Nico Napoli | UX/UI Designer website",
	description: "Personal website built by Nico Napoli with Next.js",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${nunitoSans.variable} ${dmSans.variable} antialiased`}>
				<ScrollToTop />
				<ContactModalProvider>
					<Navbar />
					<main className="body-container">{children}</main>
					<Footer />
					<Contact />
				</ContactModalProvider>
			</body>
		</html>
	);
}
