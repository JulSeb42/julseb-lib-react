/*=============================================== GetHighlightedText ===============================================*/

import { Fragment } from "react"

import { Text, uuid, slugify } from ".."

export const getHighlightedText = (text: string, value: string) => {
    const parts = text.split(new RegExp(`(${value})`, "gi"))

    return parts.map(part => (
        <Fragment key={uuid()}>
            {slugify(part) === slugify(value) ? (
                <Text tag="strong">{part}</Text>
            ) : (
                part
            )}
        </Fragment>
    ))
}
