import type { Metadata } from "next";
import "@/styles/globals.css";
import { dmSans, nunitoSans } from "@/components/ui/fonts";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Contact from "@/components/layout/contact";
import { ContactModalProvider } from "@/context/contact-context";
import ScrollToTop from "@/hooks/scroll-to-top";

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
