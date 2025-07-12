import { useState, useRef, type FC, useEffect } from "react"
import { useMergeRefs } from "../../hooks"
import { clsx } from "../../utils"
import type { ILibFade } from "./types"

/**
 * Fade component for creating smooth fade-in animations when elements enter the viewport.
 *
 * @component
 *
 * @example
 * <Fade>
 *   <h1>This content will fade in when visible</h1>
 * </Fade>
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the fade container.
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the fade element.
 * @prop {React.ReactNode} [props.children] - Content to animate with fade effect.
 *
 * @returns {JSX.Element} The rendered Fade component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/fade
 */
export const Fade: FC<ILibFade> = ({
	className,
	element = "div",
	ref,
	children,
	...rest
}) => {
	const Element = element

	const [isVisible, setIsVisible] = useState(true)
	const fadeRef = useRef<Element>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => setIsVisible(entry.isIntersecting))
		})

		observer.observe((fadeRef as any).current)
	}, [])

	return (
		<Element
			ref={useMergeRefs([ref, fadeRef])}
			className={clsx(
				"opacity-0 transition-all -translate-x-6 duration-500 ease-out",
				isVisible && "visible",
				"[&.visible]:opacity-100 [&.visible]:translate-x-0",
				"fade",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
