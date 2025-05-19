import type { FC } from "react"
import { StyledFlexbox } from "./styles"
import type { ILibFlexbox } from "./types"

/**
 * Flexbox component for creating flexible layouts with configurable direction, alignment, gap, and padding.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Flexbox props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {boolean} [props.inline] - Display as inline-flex.
 * @param {CssFlexDirection} [props.flexDirection] - Flex direction.
 * @param {CssFlexWrap} [props.flexWrap] - Flex wrap.
 * @param {CssJustifyContent} [props.justifyContent] - Justify content.
 * @param {CssAlignItems} [props.alignItems] - Align items.
 * @param {CssJustifyItems} [props.justifyItems] - Justify items.
 * @param {CssAlignContent} [props.alignContent] - Align content.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap] - Gap between children.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.columnGap] - Column gap.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.rowGap] - Row gap.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | Object} [props.padding] - Padding for the flexbox container.
 * @param {ReactNode} [props.children] - Flexbox content.
 * @returns {JSX.Element} The rendered Flexbox component.
 *
 * @example
 * <Flexbox gap="l" flexDirection="row" alignItems="center">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Flexbox>
 */
export const Flexbox: FC<ILibFlexbox> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    inline,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    justifyItems,
    alignContent,
    gap,
    columnGap,
    rowGap,
    padding,
    ...rest
}) => {
    return (
        <StyledFlexbox
            data-testid={testid}
            ref={ref}
            as={as}
            $inline={inline}
            $flexDirection={flexDirection}
            $flexWrap={flexWrap}
            $justifyContent={justifyContent}
            $alignItems={alignItems}
            $justifyItems={justifyItems}
            $alignContent={alignContent}
            $gap={gap}
            $columnGap={columnGap}
            $rowGap={rowGap}
            $padding={padding}
            {...rest}
        >
            {children}
        </StyledFlexbox>
    )
}
