import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "node:path"
import dts from "vite-plugin-dts"
import pluginChecker from "vite-plugin-checker"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({ insertTypesEntry: true }),
        pluginChecker({ typescript: true }),
    ],

    build: {
        lib: {
            entry: path.resolve(__dirname, "src/lib/index.ts"),
            name: "tsx-library-julseb",
            formats: ["es", "umd", "cjs"],
            fileName: format => `tsx-library-julseb.${format}.js`,
        },
        rollupOptions: {
            external: [
                "react",
                "react-dom",
                "fuse.js",
                "markdown-to-jsx",
                "react-helmet-async",
                "react-inlinesvg",
                "react-router-dom",
                "react-syntax-highlighter",
                "styled-components",
                "ts-utils-julseb",
            ],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "styled-components": "styled",
                },
            },
        },
    },
})
