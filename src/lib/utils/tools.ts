import { createTools, type CreateTailwindest } from "tailwindest"
import { twMerge } from "tailwind-merge"
import type { Tailwind, TailwindNestGroups } from "../types"

type Tailwindest = CreateTailwindest<{
	tailwind: Tailwind
	tailwindNestGroups: TailwindNestGroups
	groupPrefix: "$" // prefix for nest groups, [optional]
	useArbitrary: true // use arbitrary values, [optional]
}>

// @ts-ignore
export const tw = createTools<Tailwindest>({
	merger: twMerge, // set tailwind-merge as merger, [optional]
})
