import { BiXCircle, BiCheckCircle } from "react-icons/bi"
import { clsx } from "../../utils"
import { INPUT_VALIDATION_CONTAINER } from "./classes"
import type { LibInputValidation } from "../../types"

const InputValidation: FC<IInputValidation> = ({ validation }) => {
	if (!validation || validation.status === undefined) return null

	return (
		<span
			className={clsx(
				INPUT_VALIDATION_CONTAINER,
				validation.status === false
					? "text-danger-500"
					: "text-success-500",
				"input-validation-container",
			)}
		>
			{validation.status === false
				? (validation.iconNotPassed ?? (
						<BiXCircle className="input-validation-icon" />
					))
				: (validation.iconPassed ?? (
						<BiCheckCircle className="input-validation-icon" />
					))}
		</span>
	)
}

export default InputValidation

export interface IInputValidation {
	validation: LibInputValidation | undefined
}
