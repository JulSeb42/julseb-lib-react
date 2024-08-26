/*=============================================== Linkify component ===============================================*/

import { forwardRef, Fragment } from "react"
import { uuid } from "ts-utils-julseb"
import { Text } from "../../"
import type { ILibLinkify } from "./types"

const URL_REGEX =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm

/**
 * @description Transform `http://<url>` to `<a href="http://<url>">http://<url></a>`
 * @link https://documentation-components-react.vercel.app/components/linkify
 * @extends ILibText
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLHeadingElement & HTMLParagraphElement & HTMLQuoteElement & HTMLUListElement & HTMLOListElement & HTMLDListElement>
 * @prop blank?: boolean
 */
export const Linkify = forwardRef<
    HTMLHeadingElement &
        HTMLParagraphElement &
        HTMLQuoteElement &
        HTMLUListElement &
        HTMLOListElement &
        HTMLDListElement,
    ILibLinkify
>(({ children, blank, className, ...rest }, ref) => {
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
})
