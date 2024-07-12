import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js"
import { fixupConfigRules } from "@eslint/compat"

export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
    {
        rules: {
            "no-duplicate-imports": "error",
            "react/react-in-jsx-scope": "off",
            "react/no-unescaped-entities": "off",
            "react/display-name": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "no-case-declarations": "off",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    vars: "all",
                    args: "after-used",
                    ignoreRestSiblings: true,
                    destructuredArrayIgnorePattern: "[_]",
                },
            ],
            "@typescript-eslint/ban-types": "off",
            "no-constant-binary-expression": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "no-useless-escape": "off",
            "no-irregular-whitespace": "off",
            "@typescript-eslint/consistent-type-imports": "warn",
            "@typescript-eslint/no-unused-expressions": "warn",
            "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
            "@typescript-eslint/consistent-indexed-object-style": "off",
            "@typescript-eslint/no-inferrable-types": "off",

            "react/function-component-definition": [
                "warn",
                {
                    namedComponents: ["function-declaration"],
                },
            ],
            "react/jsx-key": "warn",
            "@typescript-eslint/consistent-type-definitions": "off",
            "@typescript-eslint/array-type": [
                "warn",
                {
                    default: "generic",
                    readonly: "generic",
                },
            ],
            "no-restricted-exports": [
                "warn",
                { restrictDefaultExports: { direct: true } },
            ],
            "react/prop-types": "off",
            "no-empty-pattern": "warn",
        },
    },
    {
        ignores: [
            "eslint.config.js",
            "cypress.config.ts",
            "plop/*",
            "vite.config.ts",
        ],
    },
    { files: ["src/*"] },
]
