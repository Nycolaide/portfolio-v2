module.exports = {
  root: true,

  env: {
    node: true,
  },
  plugins: ["prettier", "@typescript-eslint", "lodash"],
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "prettier",
    "@vue/prettier/@typescript-eslint",
    "plugin:lodash/recommended",
  ],

  parserOptions: {
    ecmaVersion: 2020,
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "error",
      { trailingComma: "es5", arrowParens: "avoid" },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
    "lodash/prefer-lodash-method": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "lodash/prefer-lodash-typecheck": "off",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        exports: "always-multiline",
        functions: "never",
        imports: "always-multiline",
        objects: "always-multiline",
      },
    ],
  },

  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
