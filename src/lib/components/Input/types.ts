import type {
	ILibColorInput,
	ILibDateInput,
	ILibFileInput,
	ILibPasswordInput,
	ILibSearchInput,
	ILibSelectInput,
	ILibTextInput,
	ILibTextareaInput,
	ILibTimeInput,
} from "./subtypes"

export type ILibInput =
	| ILibColorInput
	| ILibDateInput
	| ILibFileInput
	| ILibPasswordInput
	| ILibSearchInput
	| ILibSelectInput
	| ILibTextInput
	| ILibTextareaInput
	| ILibTimeInput
