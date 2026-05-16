import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { cn } from "@/util/cn";
import { inter } from "@/util/fonts";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
	applicationName: siteConfig.name,

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

	metadataBase: new URL(siteConfig.url),

	keywords: ["tsconfig", "typescript config generator", "typescript config"],
	authors: [{ name: siteConfig.creator, url: siteConfig.url }],

	openGraph: {
		siteName: siteConfig.name,
		title: siteConfig.title,
		description: siteConfig.description,
		type: "website",
	},

	twitter: {
		card: "summary_large_image",
		creator: siteConfig.creator,
		title: siteConfig.title,
		description: siteConfig.description,
	},

	creator: siteConfig.creator,
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
