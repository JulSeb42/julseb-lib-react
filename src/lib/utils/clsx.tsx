import classNameX from "clsx"
import { twMerge, type ClassNameValue } from "tailwind-merge"

export const clsx = (...classes: Array<ClassNameValue>) =>
	classNameX(twMerge(classes))
