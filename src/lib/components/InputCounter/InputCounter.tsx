import { type FC } from "react"
import { BiPlus, BiMinus } from "react-icons/bi"
import { clsx } from "../../utils"
import { ButtonIcon } from "../ButtonIcon"
import { InputContainer } from "../InputContainer"
import type { ILibInputCounter } from "./types"

/**
 * InputCounter component for numeric input with increment/decrement buttons and optional display-only mode.
 *
 * @component
 *
 * @example
 * <InputCounter
 *   value={count}
 *   setValue={setCount}
 *   min={0}
 *   max={10}
 *   label="Quantity"
 * />
 * <InputCounter
 *   value={amount}
 *   setValue={setAmount}
 *   noInput
 *   buttonsColor="secondary"
 * />
 *
 * @extends HTMLInputElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the counter container.
 * @prop {React.Ref<HTMLInputElement>} [props.ref] - Ref to the input or span element.
 * @prop {number} [props.value] - Current numeric value of the counter.
 * @prop {function} [props.setValue] - Function to update the counter value.
 * @prop {"plain" | "ghost" | "outline" | "transparent"} [props.buttonVariant] - Visual variant style of the increment/decrement buttons.
 * @prop {object} [props.icons] - Icon configuration object with minus and plus icons.
 * @prop {object} [props.labelButtons] - Aria labels and tooltip text for the buttons.
 * @prop {"primary" | "secondary" | "success" | "danger" | "warning" | "gray" | "black" | "white"} [props.buttonsColor="primary"] - Color theme of the increment/decrement buttons.
 * @prop {boolean} [props.showButtonsTooltip] - Whether to show tooltips on button hover.
 * @prop {boolean} [props.noInput] - Whether to display value as text instead of editable input.
 * @prop {"rounded" | "pill"} [props.inputVariant] - Visual variant of the input field.
 * @prop {"light" | "dark"} [props.inputBackground] - Background theme of the input field.
 * @prop {string} [props.label] - Label text to display above the counter.
 * @prop {string} [props.labelComment] - Additional comment text next to the label.
 * @prop {string} [props.helper] - Helper text to display below the label.
 * @prop {string} [props.helperBottom] - Helper text to display at the bottom of the counter.
 * @prop {string} [props.id] - Unique identifier for the input element.
 * @prop {number} [props.min=1] - Minimum allowed value for the counter.
 * @prop {number} [props.max=100] - Maximum allowed value for the counter.
 * @prop {number} [props.step=1] - Increment/decrement step value.
 * @prop {string} [containerClassName] - Additional CSS classes for the container.
 * @param props.onClickPlus - Callback function triggered when plus button is clicked
 * @param props.onClickMinus - Callback function triggered when minus button is clicked
 * @prop {any} [props.rest] - Additional props spread to the input or span element.
 *
 * @returns {JSX.Element} The rendered InputCounter component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/input-counter
 */
export const InputCounter: FC<ILibInputCounter> = ({
	className,
	ref,
	value,
	setValue,
	buttonVariant,
	icons,
	labelButtons,
	buttonsColor = "primary",
	showButtonsTooltip,
	noInput,
	inputVariant,
	inputBackground,
	label,
	labelComment,
	helper,
	helperBottom,
	id,
	min = 1,
	max = 100,
	step = 1,
	containerClassName,
	onClickPlus,
	onClickMinus,
	...rest
}) => {
	return (
		<InputContainer
			label={label}
			labelComment={labelComment}
			helper={helper}
			helperBottom={helperBottom}
			id={id}
			className={containerClassName}
		>
			<div
				className={clsx(
					"inline-flex items-center",
					noInput ? "gap-4" : "gap-2",
					"input-counter",
					className,
				)}
			>
				<ButtonIcon
					icon={icons?.minus ?? <BiMinus />}
					className="size-6 input-counter-button"
					color={buttonsColor}
					variant={buttonVariant}
					aria-label={labelButtons?.minus}
					tooltip={labelButtons?.minus ?? "Minus"}
					showTooltip={showButtonsTooltip && { offset: "xs" }}
					onClick={() => {
						setValue(prev => prev - step)
						if (onClickMinus) onClickMinus()
					}}
					disabled={value === min}
				/>

				{noInput ? (
					<span
						ref={ref}
						className="inline-flex items-center h-8 font-black text-2xl input-counter-number"
						{...rest}
					>
						{value}
					</span>
				) : (
					<input
						ref={ref}
						id={id}
						value={value}
						onChange={e => setValue(Number(e.target.value))}
						className="px-2 border border-gray-200 focus:border-primary-500 rounded-md outline-none min-w-[calc(3ch+16px)] text-center input-counter-input"
						size={value.toString().length + 1}
						{...rest}
					/>
				)}

				<ButtonIcon
					icon={icons?.minus ?? <BiPlus />}
					className="size-6 input-counter-button"
					color={buttonsColor}
					variant={buttonVariant}
					aria-label={labelButtons?.plus}
					tooltip={labelButtons?.plus ?? "Plus"}
					showTooltip={showButtonsTooltip && { offset: "xs" }}
					onClick={() => {
						setValue(prev => prev + step)
						if (onClickPlus) onClickPlus()
					}}
					disabled={value === max}
				/>
			</div>
		</InputContainer>
	)
}
