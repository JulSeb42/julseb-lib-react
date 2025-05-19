import type { FC } from "react"
import classNames from "classnames"
import { StyledDropdownContainer } from "./styles"
import type { ILibDropdownContainer } from "./types"

/**
 * DropdownContainer component for wrapping dropdown content with flexible layout and open state styling.
 *
 * @component
 * @param {Object} props - DropdownContainer props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {boolean} props.isOpen - Whether the dropdown is open.
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
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | Object} [props.padding] - Padding for the container.
 * @param {string} [props.className] - Additional class names.
 * @returns {JSX.Element} The rendered DropdownContainer component.
 *
 * @example
 * <DropdownContainer isOpen={isOpen} gap="m" padding="l">
 *   <DropdownItem>Option 1</DropdownItem>
 *   <DropdownItem>Option 2</DropdownItem>
 * </DropdownContainer>
 */
export const DropdownContainer: FC<ILibDropdownContainer> = ({
    ref,
    isOpen,
    className,
    ...rest
}) => {
    return (
        <StyledDropdownContainer
            ref={ref}
            className={classNames(className, { Open: isOpen })}
            {...rest}
        />
    )
}
