/*=============================================== GetHighlightedText ===============================================*/

import { Fragment } from "react"
import { uuid, slugify } from "ts-utils-julseb"
import { Text } from ".."

export const getHighlightedText = (
    text: string,
    value: string,
    className?: string
) => {
    const parts = text.split(new RegExp(`(${value})`, "gi"))

    return parts.map(part => (
        <Fragment key={uuid()}>
            {slugify(part) === slugify(value) ? (
                <Text
                    tag="strong"
                    className={className && `${className}__Highlight`}
                >
                    {part}
                </Text>
            ) : (
                part
            )}
        </Fragment>
    ))
}
