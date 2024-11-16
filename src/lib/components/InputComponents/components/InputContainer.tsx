/*=============================================== InputContainer component ===============================================*/

import { InputContainer as Container } from "../../InputContainer"
import type { ILibInputContainer } from "../../InputContainer/types"

/**
 * @description Returns a input container, with label, helper, helper bottom, counter and validation
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop label: string | undefined
 * @prop labelComment: string | undefined
 * @prop helper: string | undefined
 * @prop helperBottom: string | { text: string; textColor?: Any color from the library; fontStyle?: CssFontStyle; icon?: string | JSX.Element; iconColor?: Any color from the library; iconSize?: number } | undefined
 * @prop children?: ReactChildren
 * @prop value: any | undefined
 * @prop counter: boolean | undefined
 * @prop maxLength: number | undefined
 * @prop hasListOpen: boolean | undefined
 * @prop style: CSSProperties | undefined
 * @prop iconBaseUrl: string | undefined
 */
export const InputContainer = ({
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
}: ILibInputContainer) => {
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
