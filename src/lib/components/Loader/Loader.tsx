import type { FC } from "react"
import { LoaderOne } from "./templates/LoaderOne"
import { LoaderTwo } from "./templates/LoaderTwo"
import { LoaderThree } from "./templates/LoaderThree"
import { LoaderFour } from "./templates/LoaderFour"
import type { ILibLoader } from "./types"

/**
 * Loader component for displaying a loading spinner with multiple visual variants, size, color, and border width options.
 *
 * @component
 * @extends HTMLSpanElement
 * @param {Object} props - Loader props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 *  * @param {ElementType} [props.as] - Custom element type to render as.
 *  * @param {Ref<HTMLSpanElement>} [props.ref] - Ref forwarded to the root element.
 * @param {1 | 2 | 3 | 4} [props.variant] - Loader visual variant.
 * @param {number} [props.borderWidth] - Border width (only if variant is 1, 2, or 3).
 * @param {number} [props.size=48] - Size of the loader.
 * @param {string} [props.color="primary"] - Any color from the library.
 * @param {any} [props.rest] - Additional props passed to the loader.
 * @returns {JSX.Element} The rendered Loader component.
 *
 * @see https://documentation-components-react.vercel.app/components/loader
 * @example
 * <Loader variant={2} size={32} color="secondary" />
 */
export const Loader: FC<ILibLoader> = ({
    ref,
    variant,
    size = 48,
    color = "primary",
    ...rest
}) => {
    switch (variant) {
        case 2:
            return <LoaderTwo ref={ref} size={size} color={color} {...rest} />
        case 3:
            return <LoaderThree ref={ref} size={size} color={color} {...rest} />
        case 4:
            return <LoaderFour ref={ref} size={size} color={color} {...rest} />
        default:
            return <LoaderOne ref={ref} size={size} color={color} {...rest} />
    }
}
