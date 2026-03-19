import classNameX from "clsx"
import type { ClassNameValue } from "tailwind-merge"
import { tw } from "./tools"

/**
 * Merges and deduplicates Tailwind CSS class names using `tailwind-merge` and `clsx`.
 * @param classes - Class name values to merge.
 * @returns A single merged class name string.
 */
export const clsx = (...classes: Array<ClassNameValue>) =>
	classNameX(tw.def(classes))
