import type { FC } from "react"
import {
	ToastContainer as Container,
	type ToastContainerProps,
} from "react-toastify"

/**
 * ToastContainer component for managing and displaying toast notifications with customizable positioning and behavior.
 *
 * @component
 *
 * @example
 * <ToastContainer
 *   position="top-right"
 *   autoClose={5000}
 *   hideProgressBar={false}
 * />
 *
 * @extends ToastContainerProps from "react-toastify"
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the toast container.
 * @prop {"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"} [props.position="bottom-right"] - Position where toasts will appear on the screen.
 * @prop {number | false} [props.autoClose] - Time in milliseconds before toasts auto-close, or false to disable.
 * @prop {boolean} [props.hideProgressBar] - Whether to hide the progress bar on toasts.
 * @prop {boolean} [props.newestOnTop] - Whether to display newest toasts at the top.
 * @prop {boolean} [props.closeOnClick] - Whether toasts close when clicked.
 * @prop {boolean} [props.rtl] - Whether to use right-to-left layout.
 * @prop {boolean} [props.pauseOnFocusLoss] - Whether to pause toast timers when window loses focus.
 * @prop {boolean} [props.draggable] - Whether toasts can be dragged to dismiss.
 * @prop {boolean} [props.pauseOnHover] - Whether to pause toast timers on hover.
 * @prop {"default" | "colored" | "dark"} [props.theme] - Visual theme for the toast container.
 * @prop {number} [props.limit] - Maximum number of toasts to display at once.
 *
 * @returns {JSX.Element} The rendered ToastContainer component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/toast
 */
export const ToastContainer: FC<ToastContainerProps> = ({
	position = "bottom-right",
	...rest
}) => {
	return <Container position={position} {...rest} />
}
