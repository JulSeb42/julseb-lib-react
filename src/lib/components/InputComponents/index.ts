import { lazy, type ComponentType } from "react"

// Import prop interface types for explicit typing
import type { IInputValidation } from "./InputValidation"
import type { IInputButton } from "./InputButton"
import type { IInputPrefix } from "./InputPrefix"
import type { IInputSuffix } from "./InputSuffix"
import type { IInputIcon } from "./InputIcon"
import type { IInputWrapper } from "./InputWrapper"
import type { IInputList } from "./InputList"
import type { IInputWithListWrapper } from "./InputWithListWrapper"
import type { IInputListItem } from "./InputListItem"

// Explicitly type lazy components to expose prop interfaces
export const InputValidation: ComponentType<IInputValidation> = lazy(
	() => import("./InputValidation"),
)
export const InputButton: ComponentType<IInputButton> = lazy(
	() => import("./InputButton"),
)
export const InputPrefix: ComponentType<IInputPrefix> = lazy(
	() => import("./InputPrefix"),
)
export const InputSuffix: ComponentType<IInputSuffix> = lazy(
	() => import("./InputSuffix"),
)
export const InputIcon: ComponentType<IInputIcon> = lazy(
	() => import("./InputIcon"),
)
export const InputWrapper: ComponentType<IInputWrapper> = lazy(
	() => import("./InputWrapper"),
)
export const InputList: ComponentType<IInputList> = lazy(
	() => import("./InputList"),
)
export const InputWithListWrapper: ComponentType<IInputWithListWrapper> = lazy(
	() => import("./InputWithListWrapper"),
)
export const InputListItem: ComponentType<IInputListItem> = lazy(
	() => import("./InputListItem"),
)

export * from "./types"
export * from "./classes"

// Re-export prop interfaces for external consumption
export type {
	IInputValidation,
	IInputButton,
	IInputPrefix,
	IInputSuffix,
	IInputIcon,
	IInputWrapper,
	IInputList,
	IInputWithListWrapper,
	IInputListItem,
}
