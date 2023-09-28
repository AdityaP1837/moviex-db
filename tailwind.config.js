/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			"mid-l": { raw: "(max-width: 1250px)" },
			"mid-ul": { raw: "(max-width: 1200px)" },
			"mid-x": { raw: "(max-width: 1100px)" },
			"mid-sl": { raw: "(max-width: 1000px)" },
			"mid-xl": { raw: "(max-width: 900px)" },
			"min-l": { raw: "(max-width: 850px)" },
			"min-lg": { raw: "(max-width: 800px)" },
			"min-xl": { raw: "(max-width: 750px)" },
			"min-sl": { raw: "(max-width: 700px)" },
			xl: { raw: "(max-width: 600px)" },
			lg: { raw: "(max-width: 500px)" },
			"min-l": { raw: "(max-width: 450px)" },
			l: { raw: "(max-width: 400px)" },
			"mid-sm": { raw: "(max-width: 350px)" },
			sm: { raw: "(max-width: 300px)" },
		},
		extend: {
			fontFamily: {
				default: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
			},
			colors: {
				pink: "#da2f68",
				black: {
					1: "#04152d",
					2: "#041226",
					3: "#020c1b",
					lighter: "#1c4b91",
					light: "#173d77",
					hover: "#2068d6",
				},
				orange: "#f89e00",
				blue: {
					dark: "#071952",
					darker: "#09244e",
					sky: "#068FFF",
				},
				orangeText: "#cf671d",
				orangeLightText: "#864313",
				carcoalGrey: "#333333",
			},
		},
	},
	plugins: [],
};
