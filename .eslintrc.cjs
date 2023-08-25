/* eslint-env node */
module.exports = {
    root: true,
    extends: [
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:storybook/recommended"
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "eslint-plugin-import",
        "eslint-plugin-react-hooks",
        "eslint-plugin-react",
        "react-hooks",
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "import/no-duplicates": "warn",
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/no-unused-expressions": "warn",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: true,
                destructuredArrayIgnorePattern: "[_]",
            },
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
        "react-hooks/rules-of-hooks": "warn",
        "react/react-in-jsx-scope": "off",
        "react/function-component-definition": [
            "warn",
            {
                namedComponents: ["function-declaration"],
            },
        ],
        "react/display-name": "off",
        "react/no-unescaped-entities": "off",
        "import/no-default-export": "warn",
        "react/jsx-key": "warn",
    },
}
