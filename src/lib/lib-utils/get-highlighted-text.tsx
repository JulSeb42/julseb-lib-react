/*=============================================== GetHighlightedText ===============================================*/

import { Fragment, type CSSProperties } from "react"
import { uuid, slugify } from "ts-utils-julseb"
import { Text } from ".."

export const getHighlightedText = (
    text: string,
    value: string,
    className?: string,
    styles?: CSSProperties
) => {
    const parts = text.split(new RegExp(`(${value})`, "gi"))

    return parts.map(part => (
        <Fragment key={uuid()}>
            {slugify(part) === slugify(value) ? (
                <Text
                    tag="strong"
                    className={className && "HighlightedText"}
                    style={styles}
                >
                    {part}
                </Text>
            ) : (
                part
            )}
        </Fragment>
    ))
}
