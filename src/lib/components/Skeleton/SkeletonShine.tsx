import type { FC } from "react"
import { StyledSkeletonShine } from "./styles"
import type { ILibSkeletonShine } from "./types"

/**
 * SkeletonShine component for displaying a shine animation, typically used inside a skeleton placeholder.
 *
 * @component
 * @extends HTMLSpanElement
 * @param {Object} props - SkeletonShine props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLSpanElement>} [props.ref] - Ref forwarded to the span element.
 * @param {any} [props.rest] - Additional props passed to the span element.
 * @returns {JSX.Element} The rendered SkeletonShine component.
 *
 * @see https://documentation-components-react.vercel.app/components/skeleton
 * @example
 * <SkeletonShine />
 */
export const SkeletonShine: FC<ILibSkeletonShine> = ({
    "data-testid": testid,
    as,
    ref,
    ...rest
}) => {
    return (
        <StyledSkeletonShine data-testid={testid} ref={ref} as={as} {...rest} />
    )
}
