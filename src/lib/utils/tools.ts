import { createTools, type CreateTailwindest } from "tailwindest"
import { twMerge } from "tailwind-merge"
import type { Tailwind, TailwindNestGroups } from "../types"

/**
 * Tailwindest type configuration for the library's Tailwind utility types and groups.
 *
 * @typedef {CreateTailwindest<{ tailwind: Tailwind, tailwindNestGroups: TailwindNestGroups, groupPrefix: "$", useArbitrary: true }>} Tailwindest
 */
type Tailwindest = CreateTailwindest<{
	tailwind: Tailwind
	tailwindNestGroups: TailwindNestGroups
	groupPrefix: "$" // prefix for nest groups, [optional]
	useArbitrary: true // use arbitrary values, [optional]
}>

/**
 * Tailwind utility function with custom merger and type configuration for the library.
 *
 * @type {ReturnType<typeof createTools<Tailwindest>>}
 * @example
 * tw("bg-primary-500 text-white")
 */
// @ts-ignore
export const tw = createTools<Tailwindest>({
	merger: twMerge, // set tailwind-merge as merger, [optional]
})
