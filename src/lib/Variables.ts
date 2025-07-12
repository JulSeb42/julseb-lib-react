export enum COLORS {
	/** #EFF6FF */ PRIMARY_50 = "var(--color-primary-50)",
	/** #DBEAFE */ PRIMARY_100 = "var(--color-primary-100)",
	/** #BFDBFE */ PRIMARY_200 = "var(--color-primary-200)",
	/** #93C5FD */ PRIMARY_300 = "var(--color-primary-300)",
	/** #60A5FA */ PRIMARY_400 = "var(--color-primary-400)",
	/** #3B82F6 */ PRIMARY_500 = "var(--color-primary-500)",
	/** #2563EB */ PRIMARY_600 = "var(--color-primary-600)",
	/** #1D4ED8 */ PRIMARY_700 = "var(--color-primary-700)",
	/** #1E40AF */ PRIMARY_800 = "var(--color-primary-800)",
	/** #1E3A8A */ PRIMARY_900 = "var(--color-primary-900)",
	/** #172554 */ PRIMARY_950 = "var(--color-primary-950)",
	/** #ECFEFF */ SECONDARY_50 = "var(--color-secondary-50)",
	/** #CFFAFE */ SECONDARY_100 = "var(--color-secondary-100)",
	/** #A5F3FC */ SECONDARY_200 = "var(--color-secondary-200)",
	/** #67E8F9 */ SECONDARY_300 = "var(--color-secondary-300)",
	/** #22D3EE */ SECONDARY_400 = "var(--color-secondary-400)",
	/** #06B6D4 */ SECONDARY_500 = "var(--color-secondary-500)",
	/** #0891B2 */ SECONDARY_600 = "var(--color-secondary-600)",
	/** #0E7490 */ SECONDARY_700 = "var(--color-secondary-700)",
	/** #155E75 */ SECONDARY_800 = "var(--color-secondary-800)",
	/** #164E63 */ SECONDARY_900 = "var(--color-secondary-900)",
	/** #083344 */ SECONDARY_950 = "var(--color-secondary-950)",
	/** #F0FDF4 */ SUCCESS_50 = "var(--color-success-50)",
	/** #DCFCE7 */ SUCCESS_100 = "var(--color-success-100)",
	/** #BBF7D0 */ SUCCESS_200 = "var(--color-success-200)",
	/** #86EFAC */ SUCCESS_300 = "var(--color-success-300)",
	/** #4ADE80 */ SUCCESS_400 = "var(--color-success-400)",
	/** #22C55E */ SUCCESS_500 = "var(--color-success-500)",
	/** #16A34A */ SUCCESS_600 = "var(--color-success-600)",
	/** #15803D */ SUCCESS_700 = "var(--color-success-700)",
	/** #166534 */ SUCCESS_800 = "var(--color-success-800)",
	/** #14532D */ SUCCESS_900 = "var(--color-success-900)",
	/** #052E16 */ SUCCESS_950 = "var(--color-success-950)",
	/** #FEF2F2 */ DANGER_50 = "var(--color-danger-50)",
	/** #FEE2E2 */ DANGER_100 = "var(--color-danger-100)",
	/** #FECACA */ DANGER_200 = "var(--color-danger-200)",
	/** #FCA5A5 */ DANGER_300 = "var(--color-danger-300)",
	/** #F87171 */ DANGER_400 = "var(--color-danger-400)",
	/** #EF4444 */ DANGER_500 = "var(--color-danger-500)",
	/** #DC2626 */ DANGER_600 = "var(--color-danger-600)",
	/** #B91C1C */ DANGER_700 = "var(--color-danger-700)",
	/** #991B1B */ DANGER_800 = "var(--color-danger-800)",
	/** #7F1D1D */ DANGER_900 = "var(--color-danger-900)",
	/** #450A0A */ DANGER_950 = "var(--color-danger-950)",
	/** #FFFBEB */ WARNING_50 = "var(--color-warning-50)",
	/** #FEF3C7 */ WARNING_100 = "var(--color-warning-100)",
	/** #FDE68A */ WARNING_200 = "var(--color-warning-200)",
	/** #FCD34D */ WARNING_300 = "var(--color-warning-300)",
	/** #FBBF24 */ WARNING_400 = "var(--color-warning-400)",
	/** #F59E0B */ WARNING_500 = "var(--color-warning-500)",
	/** #D97706 */ WARNING_600 = "var(--color-warning-600)",
	/** #B45309 */ WARNING_700 = "var(--color-warning-700)",
	/** #92400E */ WARNING_800 = "var(--color-warning-800)",
	/** #78350F */ WARNING_900 = "var(--color-warning-900)",
	/** #451A03 */ WARNING_950 = "var(--color-warning-950)",
	/** #FAFAFA */ GRAY_50 = "var(--color-gray-50)",
	/** #F5F5F5 */ GRAY_100 = "var(--color-gray-100)",
	/** #E5E5E5 */ GRAY_200 = "var(--color-gray-200)",
	/** #D4D4D4 */ GRAY_300 = "var(--color-gray-300)",
	/** #A3A3A3 */ GRAY_400 = "var(--color-gray-400)",
	/** #737373 */ GRAY_500 = "var(--color-gray-500)",
	/** #525252 */ GRAY_600 = "var(--color-gray-600)",
	/** #404040 */ GRAY_700 = "var(--color-gray-700)",
	/** #262626 */ GRAY_800 = "var(--color-gray-800)",
	/** #171717 */ GRAY_900 = "var(--color-gray-900)",
	/** #0A0A0A */ GRAY_950 = "var(--color-gray-950)",
	/** #000000 */ BLACK = "var(--color-black)",
	/** #FFFFFF */ WHITE = "var(--color-white)",
	TRANSPARENT = "transparent",
	CURRENT_COLOR = "currentColor",
}

export enum OVERLAYS {
	/** rgba(0, 0, 0, 0.5) */ BLACK_50 = "var(--color-overlay-black-50)",
	/** rgba(0, 0, 0, 0.8) */ BLACK_80 = "var(--color-overlay-black-80)",
	/** rgba(255, 255, 255, 0.5) */ WHITE_50 = "var(--color-overlay-white-50)",
	/** rgba(69, 35, 35, 0.8) */ WHITE_80 = "var(--color-overlay-white-80)",
	/** linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.56) 100%) */ GRADIENT_BLACK = "var(--color-overlay-gradient-black)",
	/** linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.35) 100%) */ GRADIENT_WHITE = "var(--color-overlay-gradient-white)",
}

export enum FONT_FAMILIES {
	/** Primary font family for body text */ SANS = "var(--font-sans)",
	/** Font family for code and monospaced text */ MONO = "var(--font-mono)",
}

export enum FONT_SIZES {
	/** 5rem */ DISPLAY_H1 = "var(--text-display-h1)",
	/** 4rem */ DISPLAY_H2 = "var(--text-display-h2)",
	/** 3.5rem */ DISPLAY_H3 = "var(--text-display-h3)",
	/** 3rem */ DISPLAY_H4 = "var(--text-display-h4)",
	/** 2.5rem */ DISPLAY_H5 = "var(--text-display-h5)",
	/** 2.5rem */ H1 = "var(--text-h1)",
	/** 2rem */ H2 = "var(--text-h2)",
	/** 1.8rem */ H3 = "var(--text-h3)",
	/** 1.5rem */ H4 = "var(--text-h4)",
	/** 1.3rem */ H5 = "var(--text-h5)",
	/** 1.1rem */ H6 = "var(--text-h6)",
	/** 1rem */ BODY = "var(--text-body)",
	/** 0.875rem */ SMALL = "var(--text-small)",
}

export enum FONT_WEIGHTS {
	/** 100 */ THIN = "var(--font-weight-thin)",
	/** 200 */ EXTRA_LIGHT = "var(--font-weight-extralight)",
	/** 300 */ LIGHT = "var(--font-weight-light)",
	/** 400 */ NORMAL = "var(--font-weight-normal)",
	/** 500 */ MEDIUM = "var(--font-weight-medium)",
	/** 600 */ SEMI_BOLD = "var(--font-weight-semibold)",
	/** 700 */ BOLD = "var(--font-weight-bold)",
	/** 800 */ EXTRA_BOLD = "var(--font-weight-extrabold)",
	/** 900 */ BLACK = "var(--font-weight-black)",
}

export enum LINE_HEIGHTS {
	/** 1 */ NONE = "var(--line-height-none)",
	/** 1.25 */ TIGHT = "var(--line-height-tight)",
	/** 1.375 */ SNUG = "var(--line-height-snug)",
	/** 1.5 */ NORMAL = "var(--line-height-normal)",
	/** 1.625 */ RELAXED = "var(--line-height-relaxed)",
	/** 2 */ LOOSE = "var(--line-height-loose)",
	/** 0.75rem (12px) */ _3 = "var(--line-height-3)",
	/** 1rem (16px) */ _4 = "var(--line-height-4)",
	/** 1.25rem (20px) */ _5 = "var(--line-height-5)",
	/** 1.5rem (24px) */ _6 = "var(--line-height-6)",
	/** 1.75rem (28px) */ _7 = "var(--line-height-7)",
	/** 2rem (32px) */ _8 = "var(--line-height-8)",
	/** 2.25rem (36px) */ _9 = "var(--line-height-9)",
	/** 2.5rem (40px) */ _10 = "var(--line-height-10)",
}

export enum SHADOWS {
	/** 0 1px 2px 0 rgba(0, 0, 0, 0.05) */ "2XS" = "var(--shadow-2xs)",
	/** 0 1px 2px 0 rgba(0, 0, 0, 0.05) */ XS = "var(--shadow-xs)",
	/** 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) */ SM = "var(--shadow-sm)",
	/** 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) */ MD = "var(--shadow-md)",
	/** 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) */ LG = "var(--shadow-lg)",
	/** 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) */ XL = "var(--shadow-xl)",
	/** 0 25px 50px -12px rgba(0, 0, 0, 0.25) */ "2XL" = "var(--shadow-2xl)",
	/** inset 0 2px 4px 0 rgb(0 0 0 / 0.06) */ INNER = "var(--shadow-inner)",
	/** none */ NONE = "var(--shadow-none)",
}

export enum INSET_SHADOWS {}

export enum DROP_SHADOWS {}

export enum TEXT_SHADOWS {}

export enum SPACERS {
	/** 48px */ "2XL" = "var(--spacer-2xl)",
	/** 32px */ XL = "var(--spacer-xl)",
	/** 24px */ LG = "var(--spacer-lg)",
	/** 16px */ MD = "var(--spacer-md)",
	/** 12px */ SM = "var(--spacer-sm)",
	/** 8px */ XS = "var(--spacer-xs)",
	/** 4px */ "2XS" = "var(--spacer-2xs)",
}

export enum RADIUS {
	/** 0px */ NONE = "var(--radius-none)",
	/**  */ XS = "var(--radius-xs)",
	/** 0.125rem (2px) */ SM = "var(--radius-sm)",
	/** 0.25rem (4px) */ DEFAULT = "var(--radius)",
	/** 0.375rem (6px) */ MD = "var(--radius-md)",
	/** 0.5rem (8px) */ LG = "var(--radius-lg)",
	/** 0.75rem (12px) */ XL = "var(--radius-xl)",
	/** 1rem (16px) */ "2XL" = "var(--radius-2xl)",
	/** 1.5rem (24px) */ "3XL" = "var(--radius-3xl)",
	/**  */ "4XL" = "var(--radius-4xl)",
	/** 9999px */ FULL = "var(--radius-full)",
}

export enum LAYOUTS {
	/** 600px */ MAIN_DEFAULT = "var(--main-default)",
	/** 800px */ MAIN_LARGE = "var(--main-large)",
	/** 400px */ MAIN_FORM = "var(--main-form)",
	/** 100% */ MAIN_FULL = "var(--main-full)",
	/** 250px */ ASIDE_DEFAULT = "var(--aside-default)",
	/** 200px */ ASIDE_SMALL = "var(--aside-small)",
}

export enum TRANSITIONS {
	/** all 200ms ease */ SHORT = "var(--transition-short)",
	/** all 500ms ease */ LONG = "var(--transition-long)",
	/** all 500ms cubic-bezier(0.25, 0.75, 0, 0.66) */ BEZIER = "var(--transition-bezier)",
}

export enum MEDIA {
	BREAKPOINT_TABLET_LARGE = "(max-width: 1024px)",
	BREAKPOINT_TABLET_SMALL = "(max-width: 768px)",
	BREAKPOINT_MOBILE = "(max-width: 600px)",
	TOUCH = "(hover: none) and (pointer: coarse)",
	HOVER = "(hover: hover)",
	PREFERS_LIGHT = "(prefers-color-scheme: light)",
	PREFERS_DARK = "(prefers-color-scheme: dark)",
}

export const ICON_MULTIPLIER = 0.6 as const

export const INPUT_HEIGHT = 32 as const
