export const siteConfig = {
	title: {
		default: "tsconfig",
		template: "%s | tsconfig",
	},
	name: "tsconfig",
	description:
		"Generate clean, opinionated tsconfig.json setups for modern TypeScript projects.",
	creator: "@almostJohn",
};

export type SiteConfig = typeof siteConfig;
