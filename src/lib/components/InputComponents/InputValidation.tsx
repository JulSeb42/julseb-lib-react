import { BiXCircle, BiCheckCircle } from "react-icons/bi"
import { clsx } from "../../utils"
import { INPUT_VALIDATION_CONTAINER } from "./classes"
import type { LibInputValidation } from "../../types"

export const InputValidation: FC<IInputValidation> = ({ validation }) => {
	if (!validation || validation.status === undefined) return null

	return (
		<span
			className={clsx(
				INPUT_VALIDATION_CONTAINER,
				validation.status === false
					? "text-danger-500"
					: "text-success-500",
			)}
		>
			{validation.status === false
				? (validation.iconNotPassed ?? <BiXCircle />)
				: (validation.iconPassed ?? <BiCheckCircle />)}
		</span>
	)
}

interface IInputValidation {
	validation: LibInputValidation | undefined
}
