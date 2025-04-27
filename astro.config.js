// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://ryone.dev",
	server: { host: "127.0.0.1" },
	integrations: [react(), sitemap()],
});
