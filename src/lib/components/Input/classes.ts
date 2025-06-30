import type {
	LibValidation,
	LibInputVariant,
	LibInputBackground,
} from "../../types"

export const INPUT_CONTAINER_CLASSES = ({
	validation,
	inputVariant,
	inputBackground,
}: {
	validation: LibValidation | undefined
	inputVariant: LibInputVariant | undefined
	inputBackground: LibInputBackground | undefined
}) => [
	"w-full h-[32px] border border-gray-200 flex items-center gap-1 rounded-md overflow-hidden",
	"has-[input:focus]:border-primary-500",
	"has-[input:disabled]:cursor-not-allowed has-[input:disabled]:bg-gray-100 has-[input:disabled]:text-gray-500",
	validation &&
		(validation.status === false
			? "bg-danger-50 has-[input:focus]:border-danger-500 text-black"
			: validation.status === true &&
				"bg-success-50 has-[input:focus]:border-success-500 text-black"),
	inputVariant === "pill" && "rounded-full",
	inputBackground === "light" && "bg-white text-black",
	inputBackground === "dark" && "bg-black text-white",
]

export const INPUT_CLASSES = [
	"grow px-2",
	"outline-none",
	"placeholder:text-gray-500",
	"disabled:cursor-not-allowed",
]

export const INPUT_VALIDATION_CONTAINER = []
