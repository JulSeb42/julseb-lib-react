/*=============================================== StyleSheetManager ===============================================*/

import {
    StyleSheetManager as Manager,
    type IStyleSheetManager,
    type WebTarget,
} from "styled-components"
import isPropValid from "@emotion/is-prop-valid"

export function shouldForwardProp(propName: string, target: WebTarget) {
    if (typeof target === "string") {
        // For HTML elements, forward the prop if it is a valid HTML attribute
        return isPropValid(propName)
    }
    // For other elements, forward all props
    return true
}

export function StyleSheetManager({
    shouldForwardProp: shouldForwardPropFn = shouldForwardProp,
    ...rest
}: IStyleSheetManager) {
    return (
        <Manager
            shouldForwardProp={shouldForwardPropFn}
            enableVendorPrefixes
            {...rest}
        />
    )
}
