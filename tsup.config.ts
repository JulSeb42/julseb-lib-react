import { defineConfig } from "tsup"

export default defineConfig({
	entry: [
		"src/lib/index.ts",
		"src/lib/types/index.ts",
		"src/lib/types/global.ts",
		"src/lib/types/require-at-least-one.ts",
		"src/lib/types/tailwind.ts",
		"src/lib/types/components-items-props.ts",
		"src/lib/types/components-props.ts",
	],
	format: ["esm", "cjs"],
	dts: true,
	sourcemap: true,
	clean: true,
	external: [
		"react",
		"react-dom",
		"@julseb-lib/utils",
		"@tailwindcss/postcss",
		"@tailwindcss/vite",
		"clsx",
		"fuse.js",
		"markdown-to-jsx",
		"postcss",
		"react-icons",
		"react-syntax-highlighter",
		"react-toastify",
		"tailwind-merge",
		"tailwindcss",
		"tailwindest",
	],
	injectStyle: true,
	loader: {
		".css": "css",
	},
})
