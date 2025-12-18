import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
	plugins: [react(), tsConfigPaths()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./tests/setup.ts"],
		coverage: {
			include: ["src/components/**"],
		},
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});
