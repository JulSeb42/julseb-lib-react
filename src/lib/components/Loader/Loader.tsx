import { type FC } from "react"
import { LoaderOne } from "./templates/LoaderOne"
import { LoaderTwo } from "./templates/LoaderTwo"
import { LoaderThree } from "./templates/LoaderThree"
import type { ILibLoader } from "./types"

/**
 * Loader component for displaying a loading indicator with multiple style variants and color options.
 *
 * @component
 *
 * @example
 * <Loader variant={2} color="primary" />
 *
 * @extends HTMLSpanElement
 *
 * @prop {1 | 2 | 3} [props.variant=1] Possible values: 1, 2, 3. - Loader variant style.
 * @prop {string} [props.color="primary"] Any color from the library. - Loader color.
 * @prop {string} [props.className] - Additional CSS classes to apply to the loader.
 * @prop {keyof JSX.IntrinsicElements} [props.element="span"] - The HTML element to render as the loader.
 * @prop {React.Ref<HTMLSpanElement>} [props.ref] - Ref to the loader element.
 * @prop {any} [props.rest] - Additional props spread to the loader element.
 *
 * @returns {JSX.Element} The rendered Loader component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/loader
 */
export const Loader: FC<ILibLoader> = ({ variant, ...rest }) => {
	switch (variant) {
		case 2:
			return <LoaderTwo {...rest} />
		case 3:
			return <LoaderThree {...rest} />
		case 1:
		default:
			return <LoaderOne {...rest} />
	}
}
