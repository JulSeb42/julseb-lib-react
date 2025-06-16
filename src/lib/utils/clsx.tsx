import classNameX from "clsx"
import type { ClassNameValue } from "tailwind-merge"
import { tw } from "./tools"

export const clsx = (...classes: Array<ClassNameValue>) =>
	classNameX(tw.def(classes))
