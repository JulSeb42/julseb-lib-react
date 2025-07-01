import { type FC } from "react"
import { BiXCircle, BiCheckCircle } from "react-icons/bi"
import { Text } from "../Text"
import { clsx } from "../../utils"
import type { ILibInputContainer } from "./types"

/*
	Generate JSDoc with:
	* <short description of the component>
	*
	* @component
	*
	* @example
	* <an example of the component>
	* 
	* @extends <type the component is extending (check in ./types.ts)>
	*
	for each prop, generate:
	* @prop {type} [props.<prop name>] <prop with the possible values, and default values> - <short description of the prop>
	* 
	* @returns <what the component returns>
	*
	* @see https://doc-julseb-lib-react.vercel.app/components/<name of the component>
*/
export const InputContainer: FC<ILibInputContainer> = ({
	className,
	element = "div",
	ref,
	children,
	label,
	labelComment,
	helper,
	helperBottom,
	validation,
	value,
	counter,
	maxLength,
	hasListOpen,
	id,
	...rest
}) => {
	const Element = element

	if (!label && !helper && !helperBottom && !validation && !counter)
		return children

	return (
		<Element
			ref={ref}
			className={clsx(
				"flex flex-col gap-1",
				hasListOpen && "z-20",
				className,
			)}
			{...rest}
		>
			{label && (
				<label htmlFor={id} className="font-bold text-primary-500">
					{label}{" "}
					{labelComment && (
						<Text tag="small" color="gray" className="italic">
							{labelComment}
						</Text>
					)}
				</label>
			)}

			{helper && <Text>{helper}</Text>}

			{children}

			{helperBottom && <Text tag="small">{helperBottom}</Text>}

			{validation &&
				validation.status !== undefined &&
				validation.message && (
					<div className="flex items-start gap-1">
						<span
							className={clsx(
								"inline-flex items-center h-[21px]",
								validation.status === false
									? "text-danger-500"
									: "text-success-500",
							)}
						>
							{validation.status === false
								? (validation.iconNotPassed ?? (
										<BiXCircle size={14} />
									))
								: (validation.iconPassed ?? (
										<BiCheckCircle size={14} />
									))}
						</span>

						<Text tag="small">{validation.message}</Text>
					</div>
				)}

			{counter && (
				<Text tag="small">
					{value?.length}
					{maxLength && `/${maxLength}`}
				</Text>
			)}
		</Element>
	)
}
