/**
 * Maps border style values to their corresponding Tailwind CSS border-style utility classes.
 *
 * @type {{ [key in "solid" | "dashed" | "dotted" | "double" | "none"]: string }}
 * @example
 * genBorderStyle.solid // "border-solid"
 */
export const genBorderStyle = {
	solid: "border-solid",
	dashed: "border-dashed",
	dotted: "border-dotted",
	double: "border-double",
	none: "border-none",
}

/**
 * Maps border width values (1–20) to their corresponding Tailwind CSS border-width utility classes.
 *
 * @type {{ [key: number]: string }}
 * @example
 * genBorderWidth[2] // "border-2"
 */
export const genBorderWidth = {
	1: "border",
	2: "border-2",
	3: "border-3",
	4: "border-4",
	5: "border-5",
	6: "border-6",
	7: "border-7",
	8: "border-8",
	9: "border-9",
	10: "border-10",
	11: "border-11",
	12: "border-12",
	13: "border-13",
	14: "border-14",
	15: "border-15",
	16: "border-16",
	17: "border-17",
	18: "border-18",
	19: "border-19",
	20: "border-20",
}
