import classNames from "classnames"
import { StyledInputWrapper } from "../styles"
import type { ILibInputWrapper } from "../types"

/**
 * @description Returns a wrapper for inputs holding icon left, input and right container
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop hasContainer: boolean | undefined
 * @prop hasListOpen: boolean | undefined
 * @prop isTextArea: boolean
 * @prop inputBackground: "light" | "dark" | undefined
 * @prop inputVariant: "rounded" | "pill" | undefined
 * @prop validationStatus: boolean | undefined
 * @prop children?: ReactChildren
 */
export const InputWrapper = ({
    "data-testid": testid,
    className,
    hasContainer,
    children,
    hasListOpen,
    isTextArea,
    inputBackground,
    inputVariant,
    validationStatus,
}: ILibInputWrapper) => {
    return (
        <StyledInputWrapper
            data-testid={hasContainer && testid ? `${testid}.Wrapper` : testid}
            className={classNames(
                hasContainer && className ? "Wrapper" : className,
                { Open: hasListOpen }
            )}
            $isTextArea={isTextArea}
            $inputBackground={inputBackground}
            $inputVariant={inputVariant}
            $validationStatus={validationStatus}
        >
            {children}
        </StyledInputWrapper>
    )
}
