/**
 * Note that the ignored files are defined in the .prettierignore file.
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
  tabWidth: 4,
  useTabs: true,
  singleQuote: true,
  semi: true,
  bracketSpacing: true,
  arrowParens: "avoid",
  trailingComma: "es5",
  bracketSameLine: false,
  printWidth: 80,
  overrides: [
    {
      files: ["**/*.yaml", "**/*.yml", "**/*.toml"],
      options: {
        tabWidth: 2,
        useTabs: false,
      },
    },
    {
      files: ["**/*.json", "*.json"],
      options: { parser: "json" },
    },
  ],
};
