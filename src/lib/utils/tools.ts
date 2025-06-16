import { createTools, type CreateTailwindest } from "tailwindest"
import type { Tailwind, TailwindNestGroups } from "../../../tailwind"
import { twMerge } from "tailwind-merge"

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
