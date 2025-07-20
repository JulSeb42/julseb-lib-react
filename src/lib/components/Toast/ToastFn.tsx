import { toast as toastFn, type ToastOptions } from "react-toastify"
import { Toast } from "./Toast"
import type { ILibToast } from "./types"
import type { CSSProperties, LibLoaderVariant, ReactElement } from "../../types"

const COMMON_STYLES: CSSProperties = {
	padding: 0,
	height: "unset",
	minHeight: "unset",
	overflow: "hidden",
	borderRadius: "var(--radius-lg)",
}

/**
 * Toast utility functions for displaying different types of notification messages with customizable options and automatic styling.
 *
 * @namespace toast
 *
 * @example
 * // Success toast
 * toast.success("Operation completed!", {
 *   body: "Your changes have been saved.",
 *   duration: 5000
 * })
 *
 * // Error toast
 * toast.error("Something went wrong!", {
 *   body: "Please try again later."
 * })
 *
 * // Close all toasts
 * toast.close()
 *
 * @prop {function} success - Display a success toast notification with green styling.
 * @prop {function} error - Display an error toast notification with red styling.
 * @prop {function} warning - Display a warning toast notification with yellow styling.
 * @prop {function} info - Display an info toast notification with blue styling.
 * @prop {function} loading - Display a loading toast notification with gray styling.
 * @prop {function} close - Close/dismiss all active toast notifications.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/toast
 */
export const toast = {
	success: (
		title: string,
		options?: Omit<ILibToast, "status" | "closeToast" | "title"> &
			Omit<
				ToastOptions,
				| "icon"
				| "closeButton"
				| "style"
				| "autoClose"
				| "className"
				| "progressClassName"
			> & { duration?: number; iconClose?: ReactElement },
	) =>
		toastFn.success(
			({ closeToast }) => (
				<Toast
					{...options}
					closeToast={closeToast}
					title={title}
					status="success"
					iconClose={options?.iconClose}
				/>
			),
			{
				...options,
				icon: false,
				closeButton: false,
				style: COMMON_STYLES,
				autoClose: options?.duration,
				className: "!relative !overflow-hidden",
				progressClassName: "!bg-success-500 absolute !left-0 !bottom-0",
			},
		),
	error: (
		title: string,
		options?: Omit<ILibToast, "status" | "closeToast" | "title"> &
			Omit<
				ToastOptions,
				| "icon"
				| "closeButton"
				| "style"
				| "autoClose"
				| "className"
				| "progressClassName"
			> & { duration?: number; iconClose?: ReactElement },
	) =>
		toastFn.error(
			({ closeToast }) => (
				<Toast
					{...options}
					closeToast={closeToast}
					title={title}
					status="error"
					iconClose={options?.iconClose}
				/>
			),
			{
				...options,
				icon: false,
				closeButton: false,
				style: COMMON_STYLES,
				hideProgressBar: false,
				autoClose: options?.duration,
				className: "!relative !overflow-hidden",
				progressClassName: "!bg-danger-500 absolute !left-0 !bottom-0",
			},
		),
	warning: (
		title: string,
		options?: Omit<ILibToast, "status" | "closeToast" | "title"> &
			Omit<
				ToastOptions,
				| "icon"
				| "closeButton"
				| "style"
				| "autoClose"
				| "className"
				| "progressClassName"
			> & { duration?: number; iconClose?: ReactElement },
	) =>
		toastFn.warning(
			({ closeToast }) => (
				<Toast
					{...options}
					closeToast={closeToast}
					title={title}
					status="warning"
					iconClose={options?.iconClose}
				/>
			),
			{
				...options,
				icon: false,
				closeButton: false,
				style: COMMON_STYLES,
				hideProgressBar: false,
				autoClose: options?.duration,
				className: "!relative !overflow-hidden",
				progressClassName: "!bg-warning-500 absolute !left-0 !bottom-0",
			},
		),
	info: (
		title: string,
		options?: Omit<ILibToast, "status" | "closeToast" | "title"> &
			Omit<
				ToastOptions,
				| "icon"
				| "closeButton"
				| "style"
				| "autoClose"
				| "className"
				| "progressClassName"
			> & { duration?: number; iconClose?: ReactElement },
	) =>
		toastFn.info(
			({ closeToast }) => (
				<Toast
					{...options}
					closeToast={closeToast}
					title={title}
					status="info"
					iconClose={options?.iconClose}
				/>
			),
			{
				...options,
				icon: false,
				closeButton: false,
				style: COMMON_STYLES,
				hideProgressBar: false,
				autoClose: options?.duration,
				className: "!relative !overflow-hidden",
				progressClassName: "!bg-primary-500 absolute !left-0 !bottom-0",
			},
		),
	loading: (
		title: string,
		options?: Omit<ILibToast, "status" | "closeToast" | "title"> &
			Omit<
				ToastOptions,
				| "icon"
				| "closeButton"
				| "style"
				| "autoClose"
				| "className"
				| "progressClassName"
			> & {
				duration?: number
				iconClose?: ReactElement
				loaderVariant?: LibLoaderVariant
			},
	) =>
		toastFn.loading(
			({ closeToast }) => (
				<Toast
					{...options}
					closeToast={closeToast}
					title={title}
					status="loading"
					loaderVariant={options?.loaderVariant}
					iconClose={options?.iconClose}
				/>
			),
			{
				...options,
				icon: false,
				closeButton: false,
				style: COMMON_STYLES,
				hideProgressBar: false,
				autoClose: options?.duration,
				className: "!relative !overflow-hidden",
				progressClassName: "!bg-gray-500 absolute !left-0 !bottom-0",
			},
		),
	close: () => toastFn.dismiss(),
}
