import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
import unusedImports from 'eslint-plugin-unused-imports';
import prettier from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default tseslint.config({
	languageOptions: {
		parserOptions: {
			project: ['./tsconfig.json'],
		},
		globals: { ...globals.node },
	},
	plugins: {
		'unused-imports': unusedImports,
	},
	ignores: [
		'.nix-bun/**/*',
		'.direnv/**/*',
		'**/schematics/**/*',
		'*.js',
		'*.mjs',
		'*.d.ts',
		'**/node_modules/**/*',
		'**/dist/**/*',
		'cypress.config.ts',
	],
	files: ['day-*/**/*.ts'],
	extends: [
		eslint.configs.recommended,
		...tseslint.configs.strictTypeChecked,
		prettier,
	],
	rules: {
		'max-lines-per-function': [
			'error',
			{ max: 60, skipBlankLines: true, skipComments: true },
		],
		curly: ['error', 'all'],
		indent: 'off',
		'@typescript-eslint/no-magic-numbers': [
			'error',
			{
				ignoreEnums: true,
				ignoreNumericLiteralTypes: true,
				ignoreReadonlyClassProperties: true,
				ignore: [0, 1, -1],
				ignoreArrayIndexes: true,
				enforceConst: true,
				detectObjects: false,
			},
		],
		'no-magic-numbers': 'off',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
			},
		],
		'unused-imports/no-unused-imports': 'error',
		'@typescript-eslint/restrict-template-expressions': [
			'error',
			{
				allowNumber: true,
				allowBoolean: true,
			},
		],
		'@typescript-eslint/unbound-method': [
			'error',
			{
				ignoreStatic: true,
			},
		],
	},
});
