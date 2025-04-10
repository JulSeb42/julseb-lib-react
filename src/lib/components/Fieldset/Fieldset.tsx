import { forwardRef } from "react"
import { InputContainer } from "../InputComponents"
import { StyledFieldset, Legend } from "./styles"
import type { ILibFieldset } from "./types"

/**
 * @description Returns a Fieldset component
 * @link https://documentation-components-react.vercel.app/components/fieldset
 * @extends HTMLFieldSetElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLFieldSetElement>
 * @prop legend: string
 * @prop flexDirection?: CssFlexDirection
 * @prop flexWrap?: CssFlexWrap
 * @prop justifyContent?: CssJustifyContent
 * @prop alignItems?: CssAlignItems
 * @prop justifyItems?: CssJustifyItems
 * @prop alignContent?: CssAlignContent
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop columnGap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop rowGap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop padding?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
 * @prop border?: { style?: CssBorderStyle; width?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"; color?: Any color from the library }
 * @prop borderRadius?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }
 * @prop containerStyle?: CSSProperties
 * @prop validation?: { status: boolean | undefined; message?: string; iconNotPassed?: string | JSX.Element; iconNotPassedSize?: number; iconPassed?: string | JSX.Element; iconPassedSize?: number; iconBaseUrl?: string }
 */
export const Fieldset = forwardRef<HTMLFieldSetElement, ILibFieldset>(
    (
        {
            "data-testid": testid,
            as,
            children,
            className,
            legend,
            flexDirection = "row",
            flexWrap = "wrap",
            justifyContent = "flex-start",
            justifyItems,
            alignContent,
            alignItems = "flex-start",
            gap = "m",
            columnGap,
            rowGap,
            padding = "s",
            border = { color: "gray-200" },
            borderRadius = "m",
            containerStyle,
            validation,
            ...rest
        },
        ref
    ) => {
        return (
            <InputContainer
                validation={validation}
                id={undefined}
                label={undefined}
                labelComment={undefined}
                helper={undefined}
                helperBottom={undefined}
                counter={undefined}
                maxLength={undefined}
                value={undefined}
                className={className}
                hasListOpen={undefined}
                iconBaseUrl={undefined}
                style={containerStyle}
            >
                <StyledFieldset
                    data-testid={
                        validation && testid ? `${testid}.Fieldset` : testid
                    }
                    ref={ref}
                    as={as}
                    className={validation && className ? "Fieldset" : className}
                    $alignContent={alignContent}
                    $alignItems={alignItems}
                    $columnGap={columnGap}
                    $flexDirection={flexDirection}
                    $flexWrap={flexWrap}
                    $gap={gap}
                    $justifyContent={justifyContent}
                    $justifyItems={justifyItems}
                    $padding={padding}
                    $rowGap={rowGap}
                    $border={border}
                    $borderRadius={borderRadius}
                    $validationStatus={validation?.status}
                    {...rest}
                >
                    <Legend
                        data-testid={testid && `${testid}.Legend`}
                        className={className && "Legend"}
                    >
                        {legend}
                    </Legend>

                    {children}
                </StyledFieldset>
            </InputContainer>
        )
    }
)
