import "@/styles/globals.css";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { inter } from "@/util/fonts";
import { cn } from "@/util/cn";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
	icons: {
		other: [
			{
				url: "/tsconfig.svg",
				sizes: "32x32",
				type: "image/svg",
			},
		],
	},
	appleWebApp: {
		title: siteConfig.name,
	},
	applicationName: siteConfig.name,
	openGraph: {
		siteName: siteConfig.name,
		title: siteConfig.title,
		description: siteConfig.description,
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		creator: siteConfig.creator,
	},
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-svh bg-neutral-100 text-neutral-900 antialiased",
					inter.className,
				)}
			>
				{children}
			</body>
		</html>
	);
}
