import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/case-studies.css";
import "@/styles/footer.css";
import "@/styles/home.css";
import "@/styles/contact.css";
import { dmSans, nunitoSans } from "@/ui/fonts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactRoot from "@/app/contact-root";
import { ContactProvider } from "@/ui/contact-context";
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
				<ContactProvider>
					<Navbar />
					<main id="scrollFrame" className="body-container">{children}</main>
					<Footer />
					<ContactRoot />
				</ContactProvider>
			</body>
		</html>
	);
}
