/// <reference types="vite/client" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "node:path"
import dts from "vite-plugin-dts"
import pluginChecker from "vite-plugin-checker"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            exclude: [
                "./src/lib/components/*/__preview__",
                "./src/lib/components/*/__tests__",
            ],
        }),
        pluginChecker({ typescript: true }),
    ],

    build: {
        lib: {
            entry: path.resolve(__dirname, "./src/lib/index.ts"),
            name: "julseb-lib-react",
            formats: ["es", "umd", "cjs"],
            fileName: format => `index.${format}.js`,
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
                    "ts-utils-julseb": "ts-utils-julseb",
                    "react-router-dom": "react-router-dom",
                    "react-inlinesvg": "react-inlinesvg",
                    "fuse.js": "fuse.js",
                    "react-helmet-async": "react-helmet-async",
                    "react-syntax-highlighter": "react-syntax-highlighter",
                    "markdown-to-jsx": "markdown-to-jsx",
                },
            },
        },
    },
})
