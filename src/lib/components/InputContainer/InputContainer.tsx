import { forwardRef } from "react"
import classNames from "classnames"
import { Text } from "../../"
import { InputValidationHelper } from "../InputComponents"
import { HelperBottom } from "./HelperBottom"
import {
    StyledInputContainer,
    Label,
    LabelComment,
    StyledHelperBottom,
} from "./styles"
import type { ILibInputContainer } from "./types"

/**
 * @description Returns a InputContainer component
 * @link https://documentation-components-react.vercel.app/components/input-container
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop label?: string
 * @prop labelComment?: string
 * @prop helper?: string
 * @prop helperBottom?: string | { text: string => only if element is not defined; element: ReactChildren => only if text is not defined; textColor?: Any color from the library; fontStyle?: CssFontStyle; icon?: string | JSX.Element; iconColor?: Any color from the library; iconSize?: number }
 * @prop value?: any
 * @prop counter?: boolean
 * @prop maxLength?: number
 * @prop hasListOpen?: boolean
 * @prop style?: CSSProperties
 * @prop iconBaseUrl?: string
 * @prop validation?: { status: LibValidationStatus; message?: string; iconNotPassed?: LibIcon; iconNotPassedSize?: number; iconPassed?: LibIcon; iconPassedSize?: number; iconBaseUrl?: string }
 */
export const InputContainer = forwardRef<HTMLDivElement, ILibInputContainer>(
    (
        {
            "data-testid": testid,
            as,
            children,
            id,
            label,
            labelComment,
            helper,
            helperBottom,
            validation,
            counter,
            maxLength,
            value,
            className,
            hasListOpen,
            style,
            iconBaseUrl,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledInputContainer
                data-testid={testid}
                ref={ref}
                as={as}
                className={classNames(className, { Open: hasListOpen })}
                style={style}
                {...rest}
            >
                {(label || labelComment) && (
                    <Label
                        data-testid={testid && `${testid}.Label`}
                        className={className && "Label"}
                        htmlFor={id}
                    >
                        {label && label}

                        {labelComment && (
                            <>
                                {" "}
                                <LabelComment
                                    data-testid={
                                        testid && `${testid}.Label.Comment`
                                    }
                                    className={className && "Comment"}
                                >
                                    {labelComment}
                                </LabelComment>
                            </>
                        )}
                    </Label>
                )}

                {helper && (
                    <Text
                        data-testid={testid && `${testid}.Helper`}
                        className={className && "Helper"}
                    >
                        {helper}
                    </Text>
                )}

                {children}

                {helperBottom && (
                    <HelperBottom
                        data-testid={testid}
                        className={className}
                        helperBottom={helperBottom}
                    />
                )}

                {counter && (
                    <StyledHelperBottom
                        data-testid={testid && `${testid}.Counter`}
                        className={className && "Counter"}
                        color="gray"
                        $fontStyle="italic"
                    >
                        {value.toString().length}
                        {maxLength && `/${maxLength}`}
                    </StyledHelperBottom>
                )}

                {validation && (
                    <InputValidationHelper
                        data-testid={testid}
                        className={className}
                        validation={validation}
                    />
                )}
            </StyledInputContainer>
        )
    }
)
