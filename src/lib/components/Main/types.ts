import type {
	LibComponentBase,
	LibAllColors,
	LibSpacers,
	LibMainSize,
} from "../../types"

export interface ILibMain extends LibComponentBase<HTMLDivElement> {
	/**
	 * The space between items.
	 *
	 * Possible values:
	 * - 2xs: 4px
	 * - xs: 8px
	 * - sm: 12px
	 * - md: 16px
	 * - lg: 24px
	 * - xl: 32px
	 * - 2xl: 48px
	 */
	gap?: LibSpacers
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
	backgroundColor?: LibAllColors
	size?: LibMainSize
}
