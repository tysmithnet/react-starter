const path = require("path");
module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "react",
        "prettier"
    ],
    env: {
        browser: true,
        jest: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "prettier/react",
    ],
    parserOptions: {
        project: path.resolve(__dirname, "./tsconfig.json"),
        tsconfigRootDir: __dirname,
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        },
    },
    rules: {
        "prettier/prettier": "error",

        // indent should be 4 spaces
        "indent": "off",
        "@typescript-eslint/indent": ["error", 4],

        // require imports be sorted
        "sort-imports": ["error", {
            "ignoreCase": true,
            "memberSyntaxSortOrder": ["none", "all", "single", "multiple"]
        }],

        // require documentation
        "require-jsdoc": ["error", {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": true,
                "ClassDeclaration": true,
                "ArrowFunctionExpression": true,
                "FunctionExpression": true
            }
        }],

        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "react/no-direct-mutation-state": "off",
        "react/no-deprecated": "off",
        "react/no-string-refs": "off",
        "react/require-render-return": "off",
        "react/jsx-filename-extension": [
            "warn",
            {
                extensions: [".jsx", ".tsx"]
            }
        ],
        "react/prop-types": "off"
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};