/*=============================================== Fieldset component ===============================================*/

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
            <InputContainer validation={validation}>
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
