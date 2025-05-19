import { Fragment, type FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { Text } from "../../"
import type { ILibLinkify } from "./types"

const URL_REGEX =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm

/**
 * Linkify component for transforming URLs in text into clickable anchor links.
 *
 * @component
 * @extends ILibText
 * @param {Object} props - Linkify props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 *  * @param {ElementType} [props.as] - Custom element type to render as.
 *  * @param {Ref<HTMLHeadingElement & HTMLParagraphElement & HTMLQuoteElement & HTMLUListElement & HTMLOListElement & HTMLDListElement>} [props.ref] - Ref forwarded to the root element.
 * @param {boolean} [props.blank] - Open links in a new tab.
 * @param {string} [props.className] - Additional class names.
 *  * @param {ReactNode} [props.children] - Text content to linkify.
 * @returns {JSX.Element} The rendered Linkify component.
 *
 * @see https://documentation-components-react.vercel.app/components/linkify
 * @example
 * <Linkify>
 *   Visit http://example.com for more info.
 * </Linkify>
 */
export const Linkify: FC<ILibLinkify> = ({
    children,
    blank,
    className,
    ref,
    ...rest
}) => {
    const words: Array<string> = children ? children.split(" ") : []

    return (
        <Text ref={ref} className={className} {...rest}>
            {words?.map((word: string) =>
                word.match(URL_REGEX) ? (
                    <Fragment key={uuid()}>
                        <a
                            href={word}
                            target={blank ? "_blank" : undefined}
                            rel={blank ? "noreferrer noopener" : undefined}
                            className={className && "Linkify"}
                        >
                            {word}
                        </a>{" "}
                    </Fragment>
                ) : (
                    word + " "
                )
            )}
        </Text>
    )
}
