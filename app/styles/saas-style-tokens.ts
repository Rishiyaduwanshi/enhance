export const tokens = {
	color: {
		primary: {
			description: "",
			type: "color",
			value: "#1d2130ff",
			blendMode: "normal",
		},
		secondary: {
			description: "",
			type: "color",
			value: "#6b7cffff",
			blendMode: "normal",
		},
		tertiary: {
			description: "",
			type: "color",
			value: "#e0e4fcff",
			blendMode: "normal",
		},
		white: {
			description: "",
			type: "color",
			value: "#ffffffff",
			blendMode: "normal",
		},
	},
	gradient: {
		labelGradient: {
			description: "",
			type: "custom-gradient",
			value: {
				gradientType: "linear",
				rotation: 90.58423111689854,
				stops: [
					{
						position: 0,
						color: "#373fffff",
					},
					{
						position: 1,
						color: "#3acaf8ff",
					},
				],
			},
		},
		blurGradient: {
			description: "",
			type: "custom-gradient",
			value: {
				gradientType: "radial",
				rotation: 139.4545869701005,
				stops: [
					{
						position: 0.18,
						color: "#d798e1ff",
					},
					{
						position: 0.28,
						color: "#9bffa5ff",
					},
					{
						position: 0.5,
						color: "#aed3ffff",
					},
					{
						position: 0.57,
						color: "#c9d4efff",
					},
					{
						position: 0.66,
						color: "#cacffaff",
					},
				],
			},
		},
	},
	grid: {
		grid: {
			description: null,
			type: "custom-grid",
			value: {
				pattern: "columns",
				gutterSize: 48,
				alignment: "stretch",
				count: 8,
				offset: 80,
			},
		},
	},
	font: {
		h1: {
			type: "custom-fontStyle",
			value: {
				fontSize: 56,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 700,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 61.6,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none",
			},
		},
		h2: {
			type: "custom-fontStyle",
			value: {
				fontSize: 48,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 700,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 57.6,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none",
			},
		},
		h3: {
			type: "custom-fontStyle",
			value: {
				fontSize: 36,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 700,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 43.2,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none",
			},
		},
		h4: {
			type: "custom-fontStyle",
			value: {
				fontSize: 24,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 700,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 33.6,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none",
			},
		},
		h5: {
			type: "custom-fontStyle",
			value: {
				fontSize: 18,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 700,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 27,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none",
			},
		},
		h6: {
			type: "custom-fontStyle",
			value: {
				fontSize: 16,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 700,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 24,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none",
			},
		},
		headingLabel: {
			type: "custom-fontStyle",
			value: {
				fontSize: 24,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 700,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 28.8,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none",
			},
		},
		paragraph: {
			type: "custom-fontStyle",
			value: {
				fontSize: 16,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 24,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none",
			},
		},
		paragraphLarge: {
			type: "custom-fontStyle",
			value: {
				fontSize: 18,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 27,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none",
			},
		},
	},
	typography: {
		h1: {
			fontSize: {
				type: "dimension",
				value: 56,
			},
			textDecoration: {
				type: "string",
				value: "none",
			},
			fontFamily: {
				type: "string",
				value: "Roboto",
			},
			fontWeight: {
				type: "number",
				value: 700,
			},
			fontStyle: {
				type: "string",
				value: "normal",
			},
			fontStretch: {
				type: "string",
				value: "normal",
			},
			letterSpacing: {
				type: "dimension",
				value: 0,
			},
			lineHeight: {
				type: "dimension",
				value: 61.6,
			},
			paragraphIndent: {
				type: "dimension",
				value: 0,
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0,
			},
			textCase: {
				type: "string",
				value: "none",
			},
		},
		h2: {
			fontSize: {
				type: "dimension",
				value: 48,
			},
			textDecoration: {
				type: "string",
				value: "none",
			},
			fontFamily: {
				type: "string",
				value: "Roboto",
			},
			fontWeight: {
				type: "number",
				value: 700,
			},
			fontStyle: {
				type: "string",
				value: "normal",
			},
			fontStretch: {
				type: "string",
				value: "normal",
			},
			letterSpacing: {
				type: "dimension",
				value: 0,
			},
			lineHeight: {
				type: "dimension",
				value: 57.6,
			},
			paragraphIndent: {
				type: "dimension",
				value: 0,
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0,
			},
			textCase: {
				type: "string",
				value: "none",
			},
		},
		h3: {
			fontSize: {
				type: "dimension",
				value: 36,
			},
			textDecoration: {
				type: "string",
				value: "none",
			},
			fontFamily: {
				type: "string",
				value: "Roboto",
			},
			fontWeight: {
				type: "number",
				value: 700,
			},
			fontStyle: {
				type: "string",
				value: "normal",
			},
			fontStretch: {
				type: "string",
				value: "normal",
			},
			letterSpacing: {
				type: "dimension",
				value: 0,
			},
			lineHeight: {
				type: "dimension",
				value: 43.2,
			},
			paragraphIndent: {
				type: "dimension",
				value: 0,
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0,
			},
			textCase: {
				type: "string",
				value: "none",
			},
		},
		h4: {
			fontSize: {
				type: "dimension",
				value: 24,
			},
			textDecoration: {
				type: "string",
				value: "none",
			},
			fontFamily: {
				type: "string",
				value: "Roboto",
			},
			fontWeight: {
				type: "number",
				value: 700,
			},
			fontStyle: {
				type: "string",
				value: "normal",
			},
			fontStretch: {
				type: "string",
				value: "normal",
			},
			letterSpacing: {
				type: "dimension",
				value: 0,
			},
			lineHeight: {
				type: "dimension",
				value: 33.6,
			},
			paragraphIndent: {
				type: "dimension",
				value: 0,
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0,
			},
			textCase: {
				type: "string",
				value: "none",
			},
		},
		h5: {
			fontSize: {
				type: "dimension",
				value: 18,
			},
			textDecoration: {
				type: "string",
				value: "none",
			},
			fontFamily: {
				type: "string",
				value: "Roboto",
			},
			fontWeight: {
				type: "number",
				value: 700,
			},
			fontStyle: {
				type: "string",
				value: "normal",
			},
			fontStretch: {
				type: "string",
				value: "normal",
			},
			letterSpacing: {
				type: "dimension",
				value: 0,
			},
			lineHeight: {
				type: "dimension",
				value: 27,
			},
			paragraphIndent: {
				type: "dimension",
				value: 0,
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0,
			},
			textCase: {
				type: "string",
				value: "none",
			},
		},
		h6: {
			fontSize: {
				type: "dimension",
				value: 16,
			},
			textDecoration: {
				type: "string",
				value: "none",
			},
			fontFamily: {
				type: "string",
				value: "Roboto",
			},
			fontWeight: {
				type: "number",
				value: 700,
			},
			fontStyle: {
				type: "string",
				value: "normal",
			},
			fontStretch: {
				type: "string",
				value: "normal",
			},
			letterSpacing: {
				type: "dimension",
				value: 0,
			},
			lineHeight: {
				type: "dimension",
				value: 24,
			},
			paragraphIndent: {
				type: "dimension",
				value: 0,
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0,
			},
			textCase: {
				type: "string",
				value: "none",
			},
		},
		headingLabel: {
			fontSize: {
				type: "dimension",
				value: 24,
			},
			textDecoration: {
				type: "string",
				value: "none",
			},
			fontFamily: {
				type: "string",
				value: "Roboto",
			},
			fontWeight: {
				type: "number",
				value: 700,
			},
			fontStyle: {
				type: "string",
				value: "normal",
			},
			fontStretch: {
				type: "string",
				value: "normal",
			},
			letterSpacing: {
				type: "dimension",
				value: 0,
			},
			lineHeight: {
				type: "dimension",
				value: 28.8,
			},
			paragraphIndent: {
				type: "dimension",
				value: 0,
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0,
			},
			textCase: {
				type: "string",
				value: "none",
			},
		},
		paragraph: {
			fontSize: {
				type: "dimension",
				value: 16,
			},
			textDecoration: {
				type: "string",
				value: "none",
			},
			fontFamily: {
				type: "string",
				value: "Roboto",
			},
			fontWeight: {
				type: "number",
				value: 400,
			},
			fontStyle: {
				type: "string",
				value: "normal",
			},
			fontStretch: {
				type: "string",
				value: "normal",
			},
			letterSpacing: {
				type: "dimension",
				value: 0,
			},
			lineHeight: {
				type: "dimension",
				value: 24,
			},
			paragraphIndent: {
				type: "dimension",
				value: 0,
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0,
			},
			textCase: {
				type: "string",
				value: "none",
			},
		},
		paragraphLarge: {
			fontSize: {
				type: "dimension",
				value: 18,
			},
			textDecoration: {
				type: "string",
				value: "none",
			},
			fontFamily: {
				type: "string",
				value: "Roboto",
			},
			fontWeight: {
				type: "number",
				value: 400,
			},
			fontStyle: {
				type: "string",
				value: "normal",
			},
			fontStretch: {
				type: "string",
				value: "normal",
			},
			letterSpacing: {
				type: "dimension",
				value: 0,
			},
			lineHeight: {
				type: "dimension",
				value: 27,
			},
			paragraphIndent: {
				type: "dimension",
				value: 0,
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0,
			},
			textCase: {
				type: "string",
				value: "none",
			},
		},
	},
};
