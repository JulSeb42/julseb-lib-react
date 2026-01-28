const libTextDisplayTags = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
}

export const designTokens = {
	libColors: {
		/**
		 * All the colors in the lib
		 * Primary 50 — #eff6ff
		 * Primary 100 — #dbeafe
		 * Primary 200 — #bfdbfe
		 * Primary 300 — #93c5fd
		 * Primary 400 — #60a5fa
		 * Primary 500 — #3b82f6
		 * Primary 600 — #2563eb
		 * Primary 700 — #1d4ed8
		 * Primary 800 — #1e40af
		 * Primary 900 — #1e3a8a
		 * Primary 950 — #172554
		 * Secondary 50 — #ecfeff
		 * Secondary 100 — #cffafe
		 * Secondary 200 — #a5f3fc
		 * Secondary 300 — #67e8f9
		 * Secondary 400 — #22d3ee
		 * Secondary 500 — #06b6d4
		 * Secondary 600 — #0891b2
		 * Secondary 700 — #0e7490
		 * Secondary 800 — #155e75
		 * Secondary 900 — #164e63
		 * Secondary 950 — #083344
		 * Success 50 — #f0fdf4
		 * Success 100 — #dcfce7
		 * Success 200 — #bbf7d0
		 * Success 300 — #86efac
		 * Success 400 — #4ade80
		 * Success 500 — #22c55e
		 * Success 600 — #16a34a
		 * Success 700 — #15803d
		 * Success 800 — #166534
		 * Success 900 — #14532d
		 * Success 950 — #052e16
		 * Danger 50 — #fef2f2
		 * Danger 100 — #fee2e2
		 * Danger 200 — #fecaca
		 * Danger 300 — #fca5a5
		 * Danger 400 — #f87171
		 * Danger 500 — #ef4444
		 * Danger 600 — #dc2626
		 * Danger 700 — #b91c1c
		 * Danger 800 — #991b1b
		 * Danger 900 — #7f1d1d
		 * Danger 950 — #450a0a
		 * Warning 50 — #fffbeb
		 * Warning 100 — #fef3c7
		 * Warning 200 — #fde68a
		 * Warning 300 — #fcd34d
		 * Warning 400 — #fbbf24
		 * Warning 500 — #f59e42
		 * Warning 600 — #d97706
		 * Warning 700 — #b45309
		 * Warning 800 — #92400e
		 * Warning 900 — #78350f
		 * Warning 950 — #451a03
		 * Gray 50 — #f9fafb
		 * Gray 100 — #f3f4f6
		 * Gray 200 — #e5e7eb
		 * Gray 300 — #d1d5db
		 * Gray 400 — #9ca3af
		 * Gray 500 — #6b7280
		 * Gray 600 — #4b5563
		 * Gray 700 — #374151
		 * Gray 800 — #1f2937
		 * Gray 900 — #111827
		 * Gray 950 — #030712
		 * Black — #000000
		 * White — #ffffff
		 */
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

	libColorsShort: {
		/**
		 * Shorthand for each color (value is <color>-500)
		 * Primary — #3b82f6
		 * Secondary — #06b6d4
		 * Success — #22c55e
		 * Danger — #ef4444
		 * Warning — #f59e42
		 * Gray — #6b7280
		 * Black — #000000
		 * White — #ffffff
		 * Current - currentColor
		 * Transparent - transparent
		 * Background: #ffffff in light mode, #000000 in dark mode
		 */
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

	libColorsHover: {
		/**
		 * Colors used when an item is hovered
		 * Primary: Default Primary 500 — #3b82f6; Hover: Primary 300 — #93c5fd; Active: Primary 600 — #2563eb
		 * Secondary: Default: Secondary 500 — #06b6d4; Hover: Secondary 300 — #67e8f9; Active: Secondary 600 — #0891b2
		 * Success: Default: Success 500 — #22c55e; Hover: Success 300 — #86efac; Active: Success 600 — #16a34a
		 * Danger: Default: Danger 500 — #ef4444; Hover: Danger 300 — #fca5a5; Active: Danger 600 — #dc2626
		 * Warning: Default: Warning 500 — #f59e42; Hover: Warning 300 — #fcd34d; Active: Warning 600 — #d97706
		 * Gray: Default: Gray 500 — #6b7280; Hover: Gray 300 — #d1d5db; Active: Gray 600 — #4b5563
		 * White: Default: White - #ffffff; Hover: Gray 300 - #d1d5db; Active: Gray 100 - #f3f4f6
		 */
		primary: "primary",
		secondary: "secondary",
		success: "success",
		danger: "danger",
		warning: "warning",
		gray: "gray",
		white: "white",
	},

	libOverlays: {
		/**
		 * Overlay colors
		 * Black 50 - rgba(0, 0, 0, 0.5)
		 * Black 80 - rgba(0, 0, 0, 0.8)
		 * White 50 - rgba(255, 255, 255, 0.5)
		 * White 80 - rgba(255, 255, 255, 0.8)
		 * Gradient Black - linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.56) 100%)
		 * Gradient White - linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.35) 100%)
		 */
		"black-50": "black-50",
		"black-80": "black-80",
		"white-50": "white-50",
		"white-80": "white-80",
		"gradient-black": "gradient-black",
		"gradient-white": "gradient-white",
	},

	libFontFamilies: {
		/**
		 * Font Families
		 * Body - Lato
		 * Code - monospace
		 */
		body: "body",
		code: "code",
	},

	libSpacers: {
		/** Spacers
		 * 2xs - 4px
		 * xs - 8px
		 * sm - 12px
		 * md - 16px
		 * lg - 24px
		 * xl - 32px
		 * 2xl - 48px
		 */
		"2xs": "2xs",
		xs: "xs",
		sm: "sm",
		md: "md",
		lg: "lg",
		xl: "xl",
		"2xl": "2xl",
	},

	libBreakpoints: {
		/**
		 * Tailwind Breakpoints
		 * sm - 640px
		 * md - 768px
		 * lg - 1024px
		 * xl - 1280px
		 * 2xl - 1536px
		 */
		sm: "sm",
		md: "md",
		lg: "lg",
		xl: "xl",
		"2xl": "2xl",
	},

	libFontSizes: {
		/**
		 * Tailwind & Lib Font Sizes
		 * xs - 12px (0.75rem)
		 * sm - 14px (0.875rem)
		 * base - 16px (1rem)
		 * lg - 18px (1.125rem)
		 * xl - 20px (1.25rem)
		 * 2xl - 24px (1.5rem)
		 * 3xl - 30px (1.875rem)
		 * 4xl - 36px (2.25rem)
		 * 5xl - 48px (3rem)
		 * 6xl - 60px (3.75rem)
		 * 7xl - 72px (4.5rem)
		 * 8xl - 96px (6rem)
		 * 9xl - 128px (8rem)
		 * display-h1 - 80px (5rem)
		 * display-h2 - 64px (4rem)
		 * display-h3 - 56px (3.5rem)
		 * display-h4 - 48px (3rem)
		 * display-h5 - 40px (2.5rem)
		 * h1 - 40px (2.5rem)
		 * h2 - 32px (2rem)
		 * h3 - 28.8px (1.8rem)
		 * h4 - 24px (1.5rem)
		 * h5 - 20.8px (1.3rem)
		 * h6 - 17.6px (1.1rem)
		 * body - 16px (1rem)
		 * small - 14px (0.875rem)
		 */
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
		"display-h1": "display-h1",
		"display-h2": "display-h2",
		"display-h3": "display-h3",
		"display-h4": "display-h4",
		"display-h5": "display-h5",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		h4: "h4",
		h5: "h5",
		h6: "h6",
		body: "body",
		small: "small",
	},

	libFontWeights: {
		/**
		 * Font weights for Lato
		 * Thin - 100
		 * Light - 300
		 * Normal - 400
		 * Bold - 700
		 * Black - 900
		 */
		thin: "thin",
		light: "light",
		normal: "normal",
		bold: "bold",
		black: "black",
	},

	libTracking: {
		tighter: "tighter",
		tight: "tight",
		normal: "normal",
		wide: "wide",
		wider: "wider",
		widest: "widest",
	},

	libLeading: {
		tight: "tight",
		snug: "snug",
		normal: "normal",
		relaxed: "relaxed",
		loose: "loose",
		none: "none",
	},

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

	libInsetShadows: {
		"2xs": "2xs",
		xs: "xs",
		sm: "sm",
	},

	libDropShadows: {
		xs: "xs",
		sm: "sm",
		md: "md",
		lg: "lg",
		xl: "xl",
		"2xl": "2xl",
	},

	libTextShadow: {
		"2xs": "2xs",
		xs: "xs",
		sm: "sm",
		md: "md",
		lg: "lg",
	},

	libTransitionTimingFunctions: {
		"--ease-in": "--ease-in",
		"--ease-out": "--ease-out",
		"--ease-in-out": "--ease-in-out",
	},

	libAnimate: {
		spin: "spin",
		ping: "ping",
		pulse: "pulse",
		bounce: "bounce",
	},

	libBlur: {
		xs: "xs",
		sm: "sm",
		md: "md",
		lg: "lg",
		xl: "xl",
		"2xl": "2xl",
		"3xl": "3xl",
	},

	libPerspective: {
		dramatic: "dramatic",
		near: "near",
		normal: "normal",
		midrange: "midrange",
		distant: "distant",
	},

	libAspectVideo: {},

	libTextDisplayTags,

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

	libTransitions: {
		none: "none",
		all: "all",
		default: "default",
		colors: "colors",
		opacity: "opacity",
		shadow: "shadow",
		transform: "transform",
	},

	libThemes: {
		light: "light",
		dark: "dark",
	},

	libInputVariants: {
		rounded: "rounded",
		pill: "pill",
	},

	libInputBackgrounds: {
		light: "light",
		dark: "dark",
	},

	libMainSizes: {
		default: "default",
		large: "large",
		form: "form",
	},

	libAsideSizes: {
		default: "default",
		small: "small",
	},

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
	},

	libPosition: {
		relative: "relative",
		absolute: "absolute",
		fixed: "fixed",
	},

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

	libKeySizes: { large: "large", small: "small" },

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

	libListInputDirections: { up: "up", down: "down" },

	libAccordionVariant: { basic: "basic", rounded: "rounded" },

	libAccordionIcon: { plus: "plus", chevron: "chevron" },

	libToastStatus: {
		success: "success",
		error: "error",
		warning: "warning",
		info: "info",
		loading: "loading",
	},

	libTabsJustify: { start: "start", stretch: "stretch" },

	libTabsVariant: { basic: "basic", rounded: "rounded" },

	libSlideshowPagination: {
		dots: "dots",
		"dots-outline": "dots-outline",
		bars: "bars",
		thumbnails: "thumbnails",
	},

	libSlideshowPaginationPosition: { inside: "inside", outside: "outside" },

	libSlideshowButtonsPositions: { left: "left", right: "right" },

	libSlideshowButtonsSizes: { small: "small", large: "large" },

	libTableVariants: {
		bordered: "bordered",
		stripped: "stripped",
		"border-bottom": "border-bottom",
	},

	libMdEditorViews: {
		viewCode: "viewCode",
		viewLive: "viewLive",
		viewPreview: "viewPreview",
	},

	libMdEditorButtons: {
		bold: "bold",
		italic: "italic",
		strikethrough: "strikethrough",
		underline: "underline",
		ul: "ul",
		ol: "ol",
		link: "link",
		quote: "quote",
		hr: "hr",
		code: "code",
		codeBlock: "codeBlock",
		comment: "comment",
		image: "image",
	},

	libMdEditorTitles: { ...libTextDisplayTags, h6: "h6" },

	libDrawerPositions: { left: "left", right: "right" },

	libNavBurgerPositions: { left: "left", right: "right" },

	libNavMobileVariants: { full: "full", top: "top", drawer: "drawer" },

	libFooterDirection: { horizontal: "horizontal", vertical: "vertical" },

	libFooterLinksSeparator: { dot: "dot", dash: "dash" },

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
