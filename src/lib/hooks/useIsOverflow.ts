import {
	useState,
	useLayoutEffect,
	type RefCallback,
	type RefObject,
} from "react"

/**
 * Hook to detect if an element is overflowing its container bounds with optional callback functionality.
 *
 * @hook
 *
 * @example
 * const ref = useRef<HTMLDivElement>(null)
 * const isOverflow = useIsOverflow(ref, {
 *   callback: (overflow) => console.log('Overflow detected:', overflow),
 *   check: 'width'
 * })
 *
 * if (isOverflow) {
 *   // Handle overflow state
 * }
 *
 * @param {RefObject<HTMLElement>} ref - React ref object pointing to the element to check for overflow
 * @param {object} [options] - Configuration options for overflow detection
 * @param {RefCallback<boolean>} [options.callback] - Callback function called when overflow state changes
 * @param {"width" | "height"} [options.check="width"] - Which dimension to check for overflow
 *
 * @returns {boolean | undefined} Whether the element is overflowing, or undefined if not yet determined
 *
 * @see https://doc-julseb-lib-react.vercel.app/helpers/hooks#useIsOverflow
 */
export const useIsOverflow = (
	ref: RefObject<HTMLElement>,
	options?: {
		callback: RefCallback<boolean>
		check?: "width" | "height"
	},
) => {
	const [isOverflow, setIsOverflow] = useState<undefined | boolean>(undefined)

	useLayoutEffect(() => {
		const { current } = ref

		const trigger = () => {
			if (current) {
				const hasOverflow =
					options?.check === "height"
						? current.scrollHeight > current.clientHeight
						: current.scrollWidth > current.clientWidth
				setIsOverflow(hasOverflow)

				if (options?.callback) options.callback(hasOverflow)
			}
		}

		trigger()
	}, [ref, options])

	return isOverflow
}
