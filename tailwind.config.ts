import type { Config } from "tailwindcss";
import { tokens } from "./app/styles/saas-style-tokens";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	darkMode: "class",

	theme: {
		extend: {
			screens: {
				xs: "380px",
			},
			backgroundColor: {
				primary: tokens.color.primary.value,
				secondary: tokens.color.secondary.value,
				tertiary: tokens.color.tertiary.value,
				white: tokens.color.white.value,
			},
			colors: {
				primary: tokens.color.primary.value,
				secondary: tokens.color.secondary.value,
				tertiary: tokens.color.tertiary.value,
				white: tokens.color.white.value,
			},
			fontSize: {
				h1: tokens.font.h1.value.fontSize.toString() + "px",
				h2: tokens.font.h2.value.fontSize.toString() + "px",
				h3: tokens.font.h3.value.fontSize.toString() + "px",
				h4: tokens.font.h4.value.fontSize.toString() + "px",
				h5: tokens.font.h5.value.fontSize.toString() + "px",
				h6: tokens.font.h6.value.fontSize.toString() + "px",
				headingLabel: tokens.font.headingLabel.value.fontSize.toString() + "px",
				paragraph: tokens.font.paragraph.value.fontSize.toString() + "px",
				paragraphLarge:
					tokens.font.paragraphLarge.value.fontSize.toString() + "px",
			},
			lineHeight: {
				h1: tokens.font.h1.value.lineHeight.toString() + "px",
				h2: tokens.font.h2.value.lineHeight.toString() + "px",
				h3: tokens.font.h3.value.lineHeight.toString() + "px",
				h4: tokens.font.h4.value.lineHeight.toString() + "px",
				h5: tokens.font.h5.value.lineHeight.toString() + "px",
				h6: tokens.font.h6.value.lineHeight.toString() + "px",
				headingLabel:
					tokens.font.headingLabel.value.lineHeight.toString() + "px",
				paragraph: tokens.font.paragraph.value.lineHeight.toString() + "px",
				paragraphLarge:
					tokens.font.paragraphLarge.value.lineHeight.toString() + "px",
			},
			fontStyle: {
				h1: tokens.font.h1.value.fontStyle.toString() + "px",
				h2: tokens.font.h2.value.fontStyle.toString() + "px",
				h3: tokens.font.h3.value.fontStyle.toString() + "px",
				h4: tokens.font.h4.value.fontStyle.toString() + "px",
				h5: tokens.font.h5.value.fontStyle.toString() + "px",
				h6: tokens.font.h6.value.fontStyle.toString() + "px",
				headingLabel:
					tokens.font.headingLabel.value.fontStyle.toString() + "px",
				paragraph: tokens.font.paragraph.value.fontStyle.toString() + "px",
				paragraphLarge:
					tokens.font.paragraphLarge.value.fontStyle.toString() + "px",
			},
			fontWeight: {
				h1: tokens.font.h1.value.fontWeight.toString() + "px",
				h2: tokens.font.h2.value.fontWeight.toString() + "px",
				h3: tokens.font.h3.value.fontWeight.toString() + "px",
				h4: tokens.font.h4.value.fontWeight.toString() + "px",
				h5: tokens.font.h5.value.fontWeight.toString() + "px",
				h6: tokens.font.h6.value.fontWeight.toString() + "px",
				headingLabel:
					tokens.font.headingLabel.value.fontWeight.toString() + "px",
				paragraph: tokens.font.paragraph.value.fontWeight.toString() + "px",
				paragraphLarge:
					tokens.font.paragraphLarge.value.fontWeight.toString() + "px",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			gridTemplateColumns: {
				custom1: "0.5fr 1fr",
			},
		},
	},
	plugins: [],
};
export default config;
