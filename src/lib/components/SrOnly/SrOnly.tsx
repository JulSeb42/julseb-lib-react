import { type FC } from "react"
import { clsx } from "../../utils"
import type { ILibSrOnly } from "./types"

/**
 * SrOnly component for creating screen reader only content that is visually hidden but accessible to assistive technologies.
 *
 * @component
 *
 * @example
 * <SrOnly>
 *   This text is only visible to screen readers
 * </SrOnly>
 *
 * @extends ILibSrOnly
 *
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.Ref<any>} [props.ref] - Ref to the sr-only element.
 * @prop {React.ReactNode} [props.children] - Content to be hidden visually but accessible to screen readers.
 *
 * @returns {JSX.Element} The rendered SrOnly component with screen reader accessible content.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/sr-only
 */
const SrOnly: FC<ILibSrOnly> = ({ element = "div", ref, children }) => {
	const Element = element

	return (
		<Element ref={ref} className={clsx("sr-only")}>
			{children}
		</Element>
	)
}

export default SrOnly
