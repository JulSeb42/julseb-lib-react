import type { ElementType } from "react"
import type {
	CssTextAlign,
	LibAllColors,
	LibColorsHover,
	LibComponentBase,
	LibFontSizes,
	LibFontWeights,
	LibTextTagDisplay,
	LibTextTagNoDisplay,
} from "../../types"

interface ILibTextBase extends LibComponentBase<
	HTMLHeadingElement &
		HTMLParagraphElement &
		HTMLQuoteElement &
		HTMLDListElement &
		HTMLOListElement &
		HTMLUListElement
> {
	element?: ElementType
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
	color?: LibAllColors
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
	linkColor?: LibColorsHover
	textAlign?: CssTextAlign
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
	fontSize?: LibFontSizes
	/**
	 * Font weights for Lato
	 * Thin - 100
	 * Light - 300
	 * Normal - 400
	 * Bold - 700
	 * Black - 900
	 */
	fontWeight?: LibFontWeights
}

interface TextDisplay extends ILibTextBase {
	tag?: LibTextTagDisplay
	display?: boolean
	dtFontWeight?: never
}

interface TextNoDisplay extends ILibTextBase {
	tag?: Exclude<LibTextTagNoDisplay, "dl">
	display?: never
	dtFontWeight?: never
}

interface TextDescriptionList extends ILibTextBase {
	tag?: Extract<LibTextTagNoDisplay, "dl">
	display?: never
	/**
	 * Font weights for Lato
	 * Thin - 100
	 * Light - 300
	 * Normal - 400
	 * Bold - 700
	 * Black - 900
	 */
	dtFontWeight?: LibFontWeights
}

export type ILibText = TextDisplay | TextNoDisplay | TextDescriptionList
