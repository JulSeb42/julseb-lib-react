export const designTokens = {
	/**
	 * Colors
	 * @link https://tailwindcss.com/docs/colors
	 */
	libColors: {
		"primary-50": "#eff6ff",
		"primary-100": "#dbeafe",
		"primary-200": "#bfdbfe",
		"primary-300": "#93c5fd",
		"primary-400": "#60a5fa",
		"primary-500": "#3b82f6",
		"primary-600": "#2563eb",
		"primary-700": "#1d4ed8",
		"primary-800": "#1e40af",
		"primary-900": "#1e3a8a",
		"primary-950": "#172554",

		"secondary-50": "#ecfeff",
		"secondary-100": "#cffafe",
		"secondary-200": "#a5f3fc",
		"secondary-300": "#67e8f9",
		"secondary-400": "#22d3ee",
		"secondary-500": "#06b6d4",
		"secondary-600": "#0891b2",
		"secondary-700": "#0e7490",
		"secondary-800": "#155e75",
		"secondary-900": "#164e63",
		"secondary-950": "#083344",

		"success-50": "#f0fdf4",
		"success-100": "#dcfce7",
		"success-200": "#bbf7d0",
		"success-300": "#86efac",
		"success-400": "#4ade80",
		"success-500": "#22c55e",
		"success-600": "#16a34a",
		"success-700": "#15803d",
		"success-800": "#166534",
		"success-900": "#14532d",
		"success-950": "#052e16",

		"danger-50": "#fef2f2",
		"danger-100": "#fee2e2",
		"danger-200": "#fecaca",
		"danger-300": "#fca5a5",
		"danger-400": "#f87171",
		"danger-500": "#ef4444",
		"danger-600": "#dc2626",
		"danger-700": "#b91c1c",
		"danger-800": "#991b1b",
		"danger-900": "#7f1d1d",
		"danger-950": "#450a0a",

		"warning-50": "#fffbeb",
		"warning-100": "#fef3c7",
		"warning-200": "#fde68a",
		"warning-300": "#fcd34d",
		"warning-400": "#fbbf24",
		"warning-500": "#f59e42",
		"warning-600": "#d97706",
		"warning-700": "#b45309",
		"warning-800": "#92400e",
		"warning-900": "#78350f",
		"warning-950": "#451a03",

		"gray-50": "#f9fafb",
		"gray-100": "#f3f4f6",
		"gray-200": "#e5e7eb",
		"gray-300": "#d1d5db",
		"gray-400": "#9ca3af",
		"gray-500": "#6b7280",
		"gray-600": "#4b5563",
		"gray-700": "#374151",
		"gray-800": "#1f2937",
		"gray-900": "#111827",
		"gray-950": "#030712",

		black: "#000000",
		white: "#ffffff",

		current: "currentColor",
		transparent: "transparent",
		background: "background",
		font: "font",
	},
	/**
	 * Colors short
	 * Returns the color 500
	 */
	libColorsShort: {
		primary: "primary",
		secondary: "secondary",
		success: "success",
		danger: "danger",
		warning: "warning",
		gray: "gray",
		black: "black",
		white: "white",
		current: "current",
		transparent: "transparent",
		background: "background",
	},
	/**
	 * Colors hover
	 * For hoverable colors
	 * @link https://tailwindcss.com/docs/colors
	 */
	libColorsHover: {
		primary: "primary",
		secondary: "secondary",
		success: "success",
		danger: "danger",
		warning: "warning",
		gray: "gray",
		white: "white",
	},

	/**
	 * Overlays
	 * Backgrounds with different opacities
	 */
	libOverlays: {
		"black-50": "black-50",
		"black-80": "black-80",
		"white-50": "white-50",
		"white-80": "white-80",
		"gradient-black": "gradient-black",
		"gradient-white": "gradient-white",
	},

	/**
	 * Font families
	 * All font families used in the project
	 */
	libFontFamilies: {
		body: "body",
		code: "code",
	},

	/**
	 * Spacers
	 * Common spacing sizes
	 */
	libSpacers: {
		/** 4px */ "2xs": "2xs",
		/** 8px */ xs: "xs",
		/** 12px */ sm: "sm",
		/** 16px */ md: "md",
		/** 24px */ lg: "lg",
		/** 32px */ xl: "xl",
		/** 48px */ "2xl": "2xl",
	},

	/**
	 * Breakpoints
	 * @link https://tailwindcss.com/docs/responsive-design#using-custom-breakpoints
	 */
	libBreakpoints: {
		sm: "sm",
		md: "md",
		lg: "lg",
		xl: "xl",
		"2xl": "2xl",
	},

	/**
	 * Container
	 * @link https://tailwindcss.com/plus/ui-blocks/application-ui/layout/containers
	 */
	libContainer: {
		"3xs": "3xs",
		"2xs": "2xs",
		xs: "xs",
		sm: "sm",
		md: "md",
		lg: "lg",
		xl: "xl",
		"2xl": "2xl",
		"3xl": "3xl",
		"4xl": "4xl",
		"5xl": "5xl",
		"6xl": "6xl",
		"7xl": "7xl",
	},

	/**
	 * Font sizes
	 * @link https://tailwindcss.com/docs/font-size
	 */
	libFontSizes: {
		xs: "xs",
		sm: "sm",
		base: "base",
		lg: "lg",
		xl: "xl",
		"2xl": "2xl",
		"3xl": "3xl",
		"4xl": "4xl",
		"5xl": "5xl",
		"6xl": "6xl",
		"7xl": "7xl",
		"8xl": "8xl",
		"9xl": "9xl",
	},

	/**
	 * Line heights
	 * @link https://tailwindcss.com/docs/font-size
	 */
	libLineHeights: {
		xs: "xs--line-height",
		sm: "sm--line-height",
		base: "base--line-height",
		lg: "lg--line-height",
		xl: "xl--line-height",
		"2xl": "2xl--line-height",
		"3xl": "3xl--line-height",
		"4xl": "4xl--line-height",
		"5xl": "5xl--line-height",
		"6xl": "6xl--line-height",
		"7xl": "7xl--line-height",
		"8xl": "8xl--line-height",
		"9xl": "9xl--line-height",
	},

	/**
	 * Font weights
	 * @link https://tailwindcss.com/docs/font-weight
	 */
	libFontWeights: {
		thin: "thin",
		extralight: "extralight",
		light: "light",
		normal: "normal",
		medium: "medium",
		semibold: "semibold",
		bold: "bold",
		extrabold: "extrabold",
		black: "black",
	},

	/**
	 * Tracking (letter spacing)
	 * @link https://tailwindcss.com/docs/letter-spacing#using-a-custom-value
	 */
	libTracking: {
		tighter: "tighter",
		tight: "tight",
		normal: "normal",
		wide: "wide",
		wider: "wider",
		widest: "widest",
	},

	/**
	 * Leading (line height)
	 * @link https://tailwindcss.com/docs/line-height#setting-independently
	 */
	libLeading: {
		tight: "tight",
		snug: "snug",
		normal: "normal",
		relaxed: "relaxed",
		loose: "loose",
		none: "none",
	},

	/**
	 * Border radius
	 * @link https://tailwindcss.com/docs/border-radius
	 */
	libRadius: {
		xs: "xs",
		sm: "sm",
		md: "md",
		lg: "lg",
		xl: "xl",
		"2xl": "2xl",
		"3xl": "3xl",
		"4xl": "4xl",
		full: "full",
	},

	/**
	 * Box shadow
	 * @link https://tailwindcss.com/docs/box-shadow
	 */
	libShadows: {
		"2xs": "2xs",
		xs: "xs",
		sm: "sm",
		md: "md",
		lg: "lg",
		xl: "xl",
		"2xl": "2xl",
		none: "none",
	},

	/**
	 * Inset shadow
	 * @link https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
	 */
	libInsetShadows: {
		"2xs": "2xs",
		xs: "xs",
		sm: "sm",
	},

	/**
	 * Drop shadow
	 * @link https://tailwindcss.com/docs/drop-shadow
	 */
	libDropShadows: {
		xs: "xs",
		sm: "sm",
		md: "md",
		lg: "lg",
		xl: "xl",
		"2xl": "2xl",
	},

	/**
	 * Text shadow
	 * @link https://tailwindcss.com/docs/text-shadow
	 */
	libTextShadow: {
		"2xs": "2xs",
		xs: "xs",
		sm: "sm",
		md: "md",
		lg: "lg",
	},

	/**
	 * Transition timing functions
	 * @link https://tailwindcss.com/docs/transition-timing-function
	 */
	libTransitionTimingFunctions: {
		"--ease-in": "--ease-in",
		"--ease-out": "--ease-out",
		"--ease-in-out": "--ease-in-out",
	},

	/**
	 * Animate
	 * @link https://tailwindcss.com/docs/animation
	 */
	libAnimate: {
		spin: "spin",
		ping: "ping",
		pulse: "pulse",
		bounce: "bounce",
	},

	/**
	 * Blur
	 * @link https://tailwindcss.com/docs/filter-blur
	 */
	libBlur: {
		xs: "xs",
		sm: "sm",
		md: "md",
		lg: "lg",
		xl: "xl",
		"2xl": "2xl",
		"3xl": "3xl",
	},

	/**
	 * Perspective
	 * @link https://tailwindcss.com/docs/perspective
	 */
	libPerspective: {
		dramatic: "dramatic",
		near: "near",
		normal: "normal",
		midrange: "midrange",
		distant: "distant",
	},

	/**
	 * Aspect video
	 * @link https://tailwindcss.com/docs/aspect-ratio#using-a-video-aspect-ratio
	 */
	libAspectVideo: {},

	/**
	 *
	 */
	libTextDisplayTags: {
		h1: "h1",
		h2: "h2",
		h3: "h3",
		h4: "h4",
		h5: "h5",
	},

	/**
	 * All HTML text tags
	 */
	libTextTags: {
		h6: "h6",
		p: "p",
		strong: "strong",
		em: "em",
		small: "small",
		blockquote: "blockquote",
		ul: "ul",
		ol: "ol",
		dl: "dl",
	},

	/**
	 * Transitions
	 * Common transition properties
	 * @link https://tailwindcss.com/docs/transition-property
	 */
	libTransitions: {
		none: "none",
		all: "all",
		default: "default",
		colors: "colors",
		opacity: "opacity",
		shadow: "shadow",
		transform: "transform",
	},

	/**
	 * Themes
	 * Common theme names
	 */
	libThemes: {
		light: "light",
		dark: "dark",
	},

	/**
	 * Input variants
	 * Common input styles
	 * @link https://tailwindcss.com/docs/border-radius
	 */
	libInputVariants: {
		rounded: "rounded",
		pill: "pill",
	},

	/**
	 * Input backgrounds
	 * Background styles for inputs
	 */
	libInputBackgrounds: {
		light: "light",
		dark: "dark",
	},

	/**
	 * Main sizes
	 * Common sizes for main elements
	 */
	libMainSizes: {
		default: "default",
		large: "large",
		form: "form",
	},

	/**
	 * Aside sizes
	 * Common sizes for aside elements
	 */
	libAsideSizes: {
		default: "default",
		small: "small",
	},

	/**
	 * Z indexes
	 * Common z indexes
	 */
	libZIndex: {
		"0": "0",
		"10": "10",
		"20": "20",
		"30": "30",
		"40": "40",
		"50": "50",
		"-0": "-0",
		"-10": "-10",
		"-20": "-20",
		"-30": "-30",
		"-40": "-40",
		"-50": "-50",
		"997": "997",
		"998": "998",
		"999": "999",
	},

	/**
	 * Positions
	 * CSS position values
	 */
	libPosition: {
		relative: "relative",
		absolute: "absolute",
		fixed: "fixed",
	},

	/**
	 * Min heights
	 * Tailwind min height classes
	 */
	libMinHeights: {
		px: "px",
		full: "full",
		screen: "screen",
		dvh: "dvh",
		dvw: "dvw",
		lvh: "lvh",
		lvw: "lvw",
		svw: "svw",
		svh: "svh",
		auto: "auto",
		min: "min",
		max: "max",
		fit: "fit",
		lh: "lh",
	},

	/**
	 * Key sizes
	 * To use with the Key component
	 */
	libKeySizes: { large: "large", small: "small" },

	/**
	 * Max widths
	 */
	libMaxWidths: {
		"3xs": "3xs",
		"2xs": "2xs",
		xs: "xs",
		sm: "sm",
		md: "md",
		lg: "lg",
		xl: "xl",
		"2xl": "2xl",
		"3xl": "3xl",
		"4xl": "4xl",
		"5xl": "5xl",
		"6xl": "6xl",
		"7xl": "7xl",
		none: "none",
		px: "px",
		full: "full",
		dvw: "dvw",
		dvh: "dvh",
		lvw: "lvw",
		lvh: "lvh",
		svw: "svw",
		svh: "svh",
		screen: "screen",
		min: "min",
		max: "max",
		fit: "fit",
	},

	/**
	 * Skeleton animations
	 */
	libSkeletonAnimations: { pulse: "pulse", shine: "shine", none: "none" },

	libTooltipPositions: {
		top: "top",
		bottom: "bottom",
		left: "left",
		right: "right",
	},

	libTooltipTriggers: { hover: "hover", click: "click" },

	libLoaderVariants: { 1: 1, 2: 2, 3: 3 },

	libButtonVariants: {
		plain: "plain",
		ghost: "ghost",
		outline: "outline",
		transparent: "transparent",
	},

	libButtonSize: { default: "default", small: "small" },

	libButtonGroupToggle: { single: "single", multi: "multi" },

	libTagVariant: { plain: "plain", outline: "outline" },

	libInputTypes: {
		color: "color",
		date: "date",
		"datetime-local": "datetime-local",
		month: "month",
		week: "week",
		file: "file",
		password: "password",
		search: "search",
		email: "email",
		number: "number",
		tel: "tel",
		text: "text",
		url: "url",
		time: "time",
		select: "select",
		textarea: "textarea",
	},

	libCheckInputVariants: {
		tile: "tile",
		toggle: "toggle",
		selector: "selector",
	},

	/**
	 * Country codes
	 * To use in the InputPhone component
	 */
	libCountryCodes: {
		af: "af",
		ax: "ax",
		al: "al",
		dz: "dz",
		as: "as",
		ad: "ad",
		ao: "ao",
		ai: "ai",
		aq: "aq",
		ag: "ag",
		ar: "ar",
		am: "am",
		aw: "aw",
		au: "au",
		at: "at",
		az: "az",
		bs: "bs",
		bh: "bh",
		bd: "bd",
		bb: "bb",
		by: "by",
		be: "be",
		bz: "bz",
		bj: "bj",
		bm: "bm",
		bt: "bt",
		bo: "bo",
		ba: "ba",
		bw: "bw",
		br: "br",
		io: "io",
		bn: "bn",
		bg: "bg",
		bf: "bf",
		bi: "bi",
		kh: "kh",
		cm: "cm",
		ca: "ca",
		cv: "cv",
		ky: "ky",
		cf: "cf",
		td: "td",
		cl: "cl",
		cn: "cn",
		cx: "cx",
		cc: "cc",
		co: "co",
		km: "km",
		cg: "cg",
		cd: "cd",
		ck: "ck",
		cr: "cr",
		ci: "ci",
		hr: "hr",
		cu: "cu",
		cy: "cy",
		cz: "cz",
		dk: "dk",
		dj: "dj",
		dm: "dm",
		do: "do",
		ec: "ec",
		eg: "eg",
		sv: "sv",
		gq: "gq",
		er: "er",
		ee: "ee",
		et: "et",
		fk: "fk",
		fo: "fo",
		fj: "fj",
		fi: "fi",
		fr: "fr",
		gf: "gf",
		pf: "pf",
		ga: "ga",
		gm: "gm",
		ge: "ge",
		de: "de",
		gh: "gh",
		gi: "gi",
		gr: "gr",
		gl: "gl",
		gd: "gd",
		gp: "gp",
		gu: "gu",
		gt: "gt",
		gg: "gg",
		gn: "gn",
		gw: "gw",
		gy: "gy",
		ht: "ht",
		va: "va",
		hn: "hn",
		hk: "hk",
		hu: "hu",
		is: "is",
		in: "in",
		id: "id",
		ir: "ir",
		iq: "iq",
		ie: "ie",
		im: "im",
		il: "il",
		it: "it",
		jm: "jm",
		jp: "jp",
		je: "je",
		jo: "jo",
		kz: "kz",
		ke: "ke",
		ki: "ki",
		kp: "kp",
		kr: "kr",
		kw: "kw",
		kg: "kg",
		la: "la",
		lv: "lv",
		lb: "lb",
		ls: "ls",
		lr: "lr",
		ly: "ly",
		li: "li",
		lt: "lt",
		lu: "lu",
		mo: "mo",
		mk: "mk",
		mg: "mg",
		mw: "mw",
		my: "my",
		mv: "mv",
		ml: "ml",
		mt: "mt",
		mh: "mh",
		mq: "mq",
		mr: "mr",
		mu: "mu",
		yt: "yt",
		mx: "mx",
		fm: "fm",
		md: "md",
		mc: "mc",
		mn: "mn",
		me: "me",
		ms: "ms",
		ma: "ma",
		mz: "mz",
		mm: "mm",
		na: "na",
		nr: "nr",
		np: "np",
		nl: "nl",
		nc: "nc",
		nz: "nz",
		ni: "ni",
		ne: "ne",
		ng: "ng",
		nu: "nu",
		nf: "nf",
		mp: "mp",
		no: "no",
		om: "om",
		pk: "pk",
		pw: "pw",
		ps: "ps",
		pa: "pa",
		pg: "pg",
		py: "py",
		pe: "pe",
		ph: "ph",
		pn: "pn",
		pl: "pl",
		pt: "pt",
		pr: "pr",
		qa: "qa",
		ro: "ro",
		ru: "ru",
		rw: "rw",
		re: "re",
		bl: "bl",
		sh: "sh",
		kn: "kn",
		lc: "lc",
		mf: "mf",
		pm: "pm",
		vc: "vc",
		ws: "ws",
		sm: "sm",
		st: "st",
		sa: "sa",
		sn: "sn",
		rs: "rs",
		sc: "sc",
		sl: "sl",
		sg: "sg",
		sk: "sk",
		si: "si",
		sb: "sb",
		so: "so",
		za: "za",
		ss: "ss",
		gs: "gs",
		es: "es",
		lk: "lk",
		sd: "sd",
		sr: "sr",
		sj: "sj",
		sz: "sz",
		se: "se",
		ch: "ch",
		sy: "sy",
		tw: "tw",
		tj: "tj",
		tz: "tz",
		th: "th",
		tl: "tl",
		tg: "tg",
		tk: "tk",
		to: "to",
		tt: "tt",
		tn: "tn",
		tr: "tr",
		tm: "tm",
		tc: "tc",
		tv: "tv",
		ug: "ug",
		ua: "ua",
		ae: "ae",
		gb: "gb",
		us: "us",
		uy: "uy",
		uz: "uz",
		vu: "vu",
		ve: "ve",
		vn: "vn",
		vg: "vg",
		vi: "vi",
		wf: "wf",
		ye: "ye",
		zm: "zm",
		zw: "zw",
	},
} as const
