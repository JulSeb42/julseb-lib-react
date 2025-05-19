import type { FC } from "react"
import { StyledGrid } from "./styles"
import type { ILibGrid } from "./types"

/**
 * Grid component for creating flexible grid layouts with configurable columns, gaps, alignment, and padding.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Grid props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {boolean} [props.inline] - Display as inline-grid.
 * @param {number|string} [props.col] - Number or string for grid columns.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap] - Gap between grid items.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.columnGap] - Column gap.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.rowGap] - Row gap.
 * @param {CssJustifyItems} [props.justifyItems] - Justify items.
 * @param {CssAlignItems} [props.alignItems] - Align items.
 * @param {CssJustifyContent} [props.justifyContent] - Justify content.
 * @param {CssAlignContent} [props.alignContent] - Align content.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | Object} [props.padding] - Padding for the grid container.
 * @param {ReactNode} [props.children] - Grid content.
 * @returns {JSX.Element} The rendered Grid component.
 *
 * @example
 * <Grid col={3} gap="l" padding="m">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 */
export const Grid: FC<ILibGrid> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    inline,
    col,
    gap,
    columnGap,
    rowGap,
    justifyItems,
    alignItems,
    justifyContent,
    alignContent,
    padding,
    ...rest
}) => {
    return (
        <StyledGrid
            data-testid={testid}
            ref={ref}
            as={as}
            $inline={inline}
            $col={col}
            $gap={gap}
            $columnGap={columnGap}
            $rowGap={rowGap}
            $justifyItems={justifyItems}
            $alignItems={alignItems}
            $justifyContent={justifyContent}
            $alignContent={alignContent}
            $padding={padding}
            {...rest}
        >
            {children}
        </StyledGrid>
    )
}
