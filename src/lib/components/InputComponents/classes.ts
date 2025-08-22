import { genTextColorHover } from "../../utils"
import type {
	LibInputBackground,
	LibInputVariant,
	LibInputValidation,
	LibInputListDirection,
} from "../../types"

export const INPUT_COMMON_CLASSES = ({
	inputBackground,
	validationStatus,
}: {
	inputBackground: LibInputBackground | undefined
	validationStatus: boolean | undefined
}) => [
	"relative z-10 text-font",
	"grow h-full px-2",
	"outline-none",
	"placeholder:text-gray-500",
	"disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500",
	validationStatus === false
		? "bg-danger-50 text-black"
		: validationStatus === true
			? "bg-success-50 text-black"
			: inputBackground === "dark"
				? "bg-black text-white"
				: inputBackground === "light"
					? "bg-white text-black"
					: "bg-background text-font",
]

export const INPUT_VALIDATION_CONTAINER = ["px-2"]

export const INPUT_BUTTON_CLASSES = [
	"px-2 bg-transparent",
	genTextColorHover["primary"],
	"disabled:text-gray-500",
]

export const PREFIX_CLASSES = [
	"px-2 bg-gray-100 h-full inline-flex items-center border-e-1 border-e-gray-200 text-black",
]

export const SUFFIX_CLASSES = [
	"px-2 bg-gray-100 h-full inline-flex items-center border-s-1 border-s-gray-200 text-black",
]

export const INPUT_ICON_CONTAINER_CLASSES = [
	"size-8 inline-flex items-center justify-center border-e-1 border-e-gray-200",
]

export const INPUT_CONTAINER_CLASSES = ({
	validation,
	inputVariant,
	inputBackground,
	hasListOpen,
	noWrapper,
}: {
	validation: LibInputValidation | undefined
	inputVariant: LibInputVariant | undefined
	inputBackground: LibInputBackground | undefined
	hasListOpen?: boolean
	noWrapper?: boolean
}) => [
	"w-full h-8 border border-gray-200 flex items-center gap-1 rounded-md overflow-hidden relative bg-background",
	"has-[input:focus]:border-primary-500",
	"has-[input:disabled]:cursor-not-allowed has-[input:disabled]:bg-gray-100 has-[input:disabled]:text-gray-500 has-[select:disabled]:bg-gray-100 has-[select:disabled]:text-gray-500 [&.input-textarea]:outline-none",
	"[&_input]:bg-transparent [&_select]:bg-transparent",
	validation &&
		(validation.status === false
			? "bg-danger-50 has-[input:focus]:border-danger-500 has-[select:focus]:border-danger-500 text-black focus:[&.input-textarea]:border-danger-500"
			: validation.status === true &&
				"bg-success-50 has-[input:focus]:border-success-500 has-[select:focus]:border-success-500 text-black"),
	inputVariant === "pill" && "rounded-full",
	inputBackground === "light" && "bg-white text-black",
	inputBackground === "dark" && "bg-black text-white",
	hasListOpen && "open",
	"[&.open]:z-20",
	noWrapper &&
		(validation?.status === false
			? "focus:border-danger-500"
			: validation?.status === true
				? "focus:border-success-500"
				: "focus:border-primary-500"),
]

export const INPUT_LIST_CLASSES = ({
	isOpen,
	listDirection,
	inputVariant,
	inputBackground,
	validation,
}: {
	isOpen: boolean
	listDirection: LibInputListDirection | undefined
	inputVariant: LibInputVariant | undefined
	inputBackground: LibInputBackground | undefined
	validation: LibInputValidation | undefined
}) => [
	"left-0 absolute flex flex-col items-start opacity-0 border border-primary-500 rounded-md w-full max-h-0 overflow-y-scroll transition-all duration-200 ease-in-out z-0",
	isOpen && "open",
	"[&.open]:opacity-100 [&.open]:max-h-[300px]",
	(listDirection === "down" || !listDirection) && "top-0 [&.open]:pt-8",
	listDirection === "up" && ["bottom-0 [&.open]:pt-2"],
	inputVariant === "pill" && "rounded-l-2xl rounded-tr-2xl",
	inputBackground === "dark"
		? "bg-black text-white"
		: inputBackground === "light"
			? "bg-white text-black"
			: "bg-background text-font",
	validation?.status === false
		? "bg-danger-50 border-danger-500"
		: validation?.status === true && "bg-success-50 border-success-500",
]
