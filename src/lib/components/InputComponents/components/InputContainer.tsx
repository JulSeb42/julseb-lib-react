/*=============================================== InputContainer component ===============================================*/

import { InputContainer as Container } from "../../InputContainer"
import type { ILibInputContainer } from "../../InputContainer/types"

/**
 * @description Returns a input container, with label, helper, helper bottom, counter and validation
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 */
export function InputContainer({
    "data-testid": testid,
    id,
    label,
    labelComment,
    helper,
    helperBottom,
    validation,
    counter,
    maxLength,
    children,
    value,
    className,
    hasListOpen,
    iconBaseUrl,
    style,
}: ILibInputContainer) {
    if (
        !label &&
        !labelComment &&
        !helper &&
        !helperBottom &&
        !validation &&
        !counter
    )
        return children

    return (
        <Container
            data-testid={testid}
            id={id}
            label={label}
            labelComment={labelComment}
            helper={helper}
            helperBottom={helperBottom}
            validation={validation}
            counter={counter}
            maxLength={maxLength}
            value={value}
            className={className}
            hasListOpen={hasListOpen}
            iconBaseUrl={iconBaseUrl}
            style={style}
        >
            {children}
        </Container>
    )
}
