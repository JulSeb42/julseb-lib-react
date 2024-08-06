/*=============================================== InputContainer component ===============================================*/

import { InputContainer as Container } from "../../InputContainer"
import type { ILibInputContainer } from "../../InputContainer/types"

/**
 * @description Returns a input container, with label, helper, helper bottom, counter and validation
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop id: string | undefined
 * @prop label: string | JSX.Element | undefined
 * @prop helper: string | undefined
 * @prop helperBottom: string | { text: string; textColor?: LibAllColors; fontStyle?: FontStyle; icon?: string | JSX.Element; iconColor?: LibAllColors; iconSize?: number } | undefined
 * @prop validation: { status: boolean | undefined; message: string; iconNotPassed?: LibIcon; iconNotPassedSize?: number; iconPassed?: LibIcon; iconPassedSize?: number } | undefined
 * @prop value: any | undefined
 * @prop counter: boolean | undefined
 * @prop maxLength: number | undefined
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
        >
            {children}
        </Container>
    )
}
