import { useRef, useCallback, type FC } from "react"
import classNames from "classnames"
import { uuid } from "@julseb-lib/utils"
import { useMergeRefs, useClickOutside } from "../../"
import { DropdownItem } from "./DropdownItem"
import { StyledDropdown } from "./styles"
import type { ILibDropdown } from "./types"

/**
 * Dropdown component for displaying a list of selectable items or custom children, with flexible direction and styling.
 *
 * @component
 * @param {Object} props - Dropdown props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.className] - Additional class names.
 * @param {boolean} props.isOpen - Whether the dropdown is open.
 * @param {Dispatch<SetStateAction<boolean>>} props.setIsOpen - Setter for the open state.
 * @param {Array<LibDropdownItem>} [props.items] - Array of dropdown items (used if children is not provided).
 * @param {ReactNode} [props.children] - Dropdown items as children (used if items is not provided).
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"} [props.accentColor="primary"] - Accent color for the dropdown.
 * @param {"up" | "down"} [props.direction="down"] - Direction in which the dropdown appears.
 * @param {number} [props.maxHeightOpen] - Maximum height of the open dropdown.
 * @param {number} [props.positionFromButton=34] - Position offset from the button.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | null} [props.shadow="m"] - Shadow style for the dropdown.
 * @returns {JSX.Element} The rendered Dropdown component.
 *
 * @example
 * <Dropdown
 *   isOpen={isOpen}
 *   setIsOpen={setIsOpen}
 *   items={[
 *     { id: "1", text: "Option 1" },
 *     { id: "2", text: "Option 2" }
 *   ]}
 *   accentColor="secondary"
 *   direction="up"
 * />
 */
export const Dropdown: FC<ILibDropdown> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    children,
    isOpen,
    setIsOpen,
    accentColor = "primary",
    direction = "down",
    items,
    maxHeightOpen = items ? items.length * 40 : 300,
    positionFromButton = 34,
    shadow = "m",
    ...rest
}) => {
    const el = useRef<HTMLDivElement>(null as any)

    useClickOutside(
        el,
        useCallback(() => setIsOpen(false), [setIsOpen])
    )

    return (
        <StyledDropdown
            data-testid={testid}
            ref={useMergeRefs([ref, el])}
            as={as}
            className={classNames(className, { Open: isOpen })}
            $direction={direction}
            $maxHeight={maxHeightOpen}
            $buttonOpenHeight={positionFromButton}
            $shadow={shadow}
            {...rest}
        >
            {items
                ? items.map(item => (
                      <DropdownItem
                          data-testid={
                              item["data-testid"] ||
                              (testid && `${testid}.DropdownItem`)
                          }
                          className={
                              item.className || (className && "DropdownItem")
                          }
                          id={item.id}
                          ref={item.ref}
                          accentColor={accentColor}
                          {...item}
                          key={uuid()}
                      >
                          {item.text}
                      </DropdownItem>
                  ))
                : children}
        </StyledDropdown>
    )
}
