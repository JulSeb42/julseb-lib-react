import { type FC, useCallback, useEffect, useRef, useState } from "react"
import { uuid } from "@julseb-lib/utils"
import { clsx, genGap } from "../../utils"
import { useMergeRefs } from "../../hooks"
import { fillCols, useEventListener } from "./utils"
import type { ILibMasonry } from "./types"

/**
 * Masonry component for displaying content in a responsive masonry grid layout.
 *
 * @component
 *
 * @example
 * <Masonry col={3} gap="md">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Masonry>
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional class names to apply.
 * @prop {ElementType} [props.element="div"] - The HTML element or React component to render as the container.
 * @prop {React.RefObject<HTMLDivElement>} [props.ref] - Ref for the container element.
 * @prop {React.ReactNode[]} [props.children=[]] - The content to display in the masonry grid.
 * @prop {number} [props.col=4] - Number of columns in the masonry grid.
 * @prop {"2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"} [props.gap="lg"] - Gap between grid items.
 *
 * @returns {JSX.Element} The rendered Masonry component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/masonry
 */
export const Masonry: FC<ILibMasonry> = ({
	className,
	element = "div",
	ref,
	children = [],
	col = 4,
	gap = "lg",
	...rest
}) => {
	const el = useRef<HTMLDivElement>(null as any)

	const [numCols, setNumCols] = useState(col)
	const cols = [...Array(col)].map(() => [])
	fillCols(children, cols)

	const resizeHandler = useCallback(
		() =>
			setNumCols(
				Math.ceil(window.innerWidth / (window.innerWidth / numCols)),
			),
		[numCols],
	)

	useEffect(resizeHandler, [numCols, resizeHandler])

	useEventListener("resize", resizeHandler)

	const Element = element

	return (
		<Element
			ref={useMergeRefs([el, ref])}
			className={clsx("grid grid-flow-col", genGap[gap], className)}
			{...rest}
		>
			{[...Array(numCols)].map((_, i) => (
				<div className={clsx("grid h-fit", genGap[gap])} key={uuid()}>
					{cols[i]}
				</div>
			))}
		</Element>
	)
}
