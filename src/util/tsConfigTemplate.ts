export const tsConfigTemplateForNextJs: string = `{
	"compilerOptions": {
		"target": "ES2017",
		"lib": [
			"dom",
			"dom.iterable",
			"esnext"
		],
		"allowJs": true,
		"skipLibCheck": true,
		"strict": true,
		"noEmit": true,
		"esModuleInterop": true,
		"module": "esnext",
		"moduleResolution": "bundler",
		"resolveJsonModule": true,
		"isolatedModules": true,
		"jsx": "preserve",
		"incremental": true,
		"plugins": [
			{
				"name": "next"
			}
		],
		"paths": {
			"@/*": ["./src/*"]
		}
	},
	"include": [
		"next-env.d.ts",
		"**/*.ts",
		"**/*.tsx",
		".next/types/**/*.ts"
	],
	"exclude": ["node_modules"]
}`;

export const tsConfigTemplateForNodeJs: string = `{
	"compilerOptions": {
		"module": "Node16",
		"moduleResolution": "Node16",
		"resolveJsonModule": true,
		"outDir": "dist",
		"lib": ["ESNext"],
		"allowUnreachableCode": false,
		"allowUnusedLabels": false,
		"exactOptionalPropertyTypes": false,
		"noFallthroughCasesInSwitch": true,
		"noImplicitOverride": true,
		"noImplicitReturns": true,
		"noUnusedLocals": true,
		"noUnusedParameters": true,
		"strict": true,
		"useUnknownInCatchVariables": true,
		"noUncheckedIndexedAccess": true,
		"declaration": true,
		"declarationMap": true,
		"importHelpers": true,
		"verbatimModuleSyntax": true,
		"inlineSources": true,
		"newLine": "lf",
		"preserveConstEnums": true,
		"removeComments": false,
		"sourceMap": true,
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"emitDecoratorMetadata": true,
		"experimentalDecorators": true,
		"target": "ES2021",
		"useDefineForClassFields": true,
		"skipLibCheck": true
	},
	"include": [
		"**/*.ts",
		"src/**/*.ts"
	],
	"exclude": ["node_modules"]
}`;
