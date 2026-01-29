import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js"
import { fixupConfigRules } from "@eslint/compat"
import jsxA11y from "eslint-plugin-jsx-a11y"

export default [
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		plugins: {
			"jsx-a11y": jsxA11y,
		},
	},
	{
		languageOptions: {
			parserOptions: { ecmaFeatures: { jsx: true } },
			...jsxA11y.flatConfigs.recommended.languageOptions,
		},
	},
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...fixupConfigRules(pluginReactConfig),
	// ...jsxA11y.flatConfigs.recommended,
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
					namedComponents: ["arrow-function"],
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
			"@typescript-eslint/no-empty-object-type": [
				"warn",
				{ allowInterfaces: "with-single-extends" },
			],
			"jsx-a11y/alt-text": "warn",
			"jsx-a11y/anchor-has-content": "warn",
			"jsx-a11y/anchor-is-valid": "warn",
			"jsx-a11y/aria-activedescendant-has-tabindex": "warn",
			"jsx-a11y/aria-props": "warn",
			"jsx-a11y/aria-proptypes": "warn",
			"jsx-a11y/aria-role": "warn",
			"jsx-a11y/aria-unsupported-elements": "warn",
			"jsx-a11y/autocomplete-valid": "warn",
			"jsx-a11y/click-events-have-key-events": "warn",
			"jsx-a11y/control-has-associated-label": "warn",
			"jsx-a11y/heading-has-content": "warn",
			"jsx-a11y/html-has-lang": "warn",
			"jsx-a11y/iframe-has-title": "warn",
			"jsx-a11y/img-redundant-alt": "warn",
			"jsx-a11y/interactive-supports-focus": "warn",
			"jsx-a11y/label-has-associated-control": "warn",
			"jsx-a11y/label-has-for": "warn",
			"jsx-a11y/lang": "warn",
			"jsx-a11y/media-has-caption": "warn",
			"jsx-a11y/mouse-events-have-key-events": "warn",
			"jsx-a11y/no-access-key": "warn",
			"jsx-a11y/no-aria-hidden-on-focusable": "warn",
			"jsx-a11y/no-autofocus": "warn",
			"jsx-a11y/no-distracting-elements": "warn",
			"jsx-a11y/no-interactive-element-to-noninteractive-role": "warn",
			"jsx-a11y/no-noninteractive-element-interactions": "warn",
			"jsx-a11y/no-noninteractive-element-to-interactive-role": "warn",
			"jsx-a11y/no-noninteractive-tabindex": "warn",
			"jsx-a11y/no-onchange": "warn",
			"jsx-a11y/no-redundant-roles": "warn",
			"jsx-a11y/no-static-element-interactions": "warn",
			"jsx-a11y/prefer-tag-over-role": "warn",
			"jsx-a11y/role-has-required-aria-props": "warn",
			"jsx-a11y/role-supports-aria-props": "warn",
			"jsx-a11y/scope": "warn",
			"jsx-a11y/tabindex-no-positive": "warn",
			// "jsx-a11y/anchor-ambiguous-text": "warn",
			// "prefer-arrow-callback": "warn",
		},
	},
	{
		ignores: [
			"eslint.config.js",
			"cypress.config.ts",
			"plop/*",
			"vite.config.ts",
			"dist",
		],
	},
	{
		files: ["src/*"],
	},
]
