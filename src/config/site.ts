export const siteConfig = {
	title: {
		default: "tsconfig",
		template: "%s | tsconfig",
	},
	name: "tsconfig",
	description:
		"Generate clean, opinionated tsconfig.json setups for modern TypeScript projects.",
	url:
		process.env.NODE_ENV === "production"
			? "https://app-tsconfig.vercel.app"
			: "http://localhost:3000",
	creator: "@almostJohn",
};

export type SiteConfig = typeof siteConfig;
