import type { FC } from "react"
import { InputContainer } from "../InputComponents"
import { StyledFieldset, Legend } from "./styles"
import type { ILibFieldset } from "./types"

/**
 * Fieldset component for grouping related form elements with a legend and flexible layout.
 *
 * @component
 * @extends HTMLFieldSetElement
 * @param {Object} props - Fieldset props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {ForwardedRef<HTMLFieldSetElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} props.legend - Legend text for the fieldset.
 * @param {CssFlexDirection} [props.flexDirection="row"] - Flex direction.
 * @param {CssFlexWrap} [props.flexWrap="wrap"] - Flex wrap.
 * @param {CssJustifyContent} [props.justifyContent="flex-start"] - Justify content.
 * @param {CssAlignItems} [props.alignItems="flex-start"] - Align items.
 * @param {CssJustifyItems} [props.justifyItems] - Justify items.
 * @param {CssAlignContent} [props.alignContent] - Align content.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap="m"] - Gap between children.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.columnGap] - Column gap.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.rowGap] - Row gap.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | Object} [props.padding="s"] - Padding for the fieldset.
 * @param {Object} [props.border={ color: "gray-200" }] - Border style, width, and color.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | Object} [props.borderRadius="m"] - Border radius for the fieldset.
 * @param {CSSProperties} [props.containerStyle] - Style for the outer container.
 * @param {Object} [props.validation] - Validation status and message.
 * @param {ReactNode} [props.children] - Fieldset content.
 * @returns {JSX.Element} The rendered Fieldset component.
 *
 * @example
 * <Fieldset legend="Personal info" gap="l" padding="m">
 *   <Input label="First name" />
 *   <Input label="Last name" />
 * </Fieldset>
 */
export const Fieldset: FC<ILibFieldset> = ({
    "data-testid": testid,
    as,
    ref,
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
}) => {
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
