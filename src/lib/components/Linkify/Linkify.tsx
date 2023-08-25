/*=============================================== Linkify component ===============================================*/

import { forwardRef, type ForwardedRef, Fragment } from "react"

import { Text, uuid } from "../../"

import type { LinkifyProps } from "./types"

const URL_REGEX =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm

export const Linkify = forwardRef(
    (
        { children, blank, ...rest }: LinkifyProps,
        ref?: ForwardedRef<
            HTMLHeadingElement &
                HTMLParagraphElement &
                HTMLQuoteElement &
                HTMLUListElement &
                HTMLOListElement &
                HTMLDListElement
        >
    ) => {
        const words: string[] = children ? children.split(" ") : []

        return (
            <Text ref={ref} {...rest}>
                {words?.map((word: string) =>
                    word.match(URL_REGEX) ? (
                        <Fragment key={uuid()}>
                            <a
                                href={word}
                                target={blank ? "_blank" : undefined}
                                rel={blank ? "noreferrer noopener" : undefined}
                                className="linkify"
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
)
