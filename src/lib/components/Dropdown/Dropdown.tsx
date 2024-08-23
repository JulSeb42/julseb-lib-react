/*=============================================== Dropdown component ===============================================*/

import { forwardRef, useRef, useCallback } from "react"
import classNames from "classnames"
import { uuid } from "ts-utils-julseb"
import { useMergeRefs, useClickOutside } from "../../"
import { DropdownItem } from "./DropdownItem"
import { StyledDropdown } from "./styles"
import type { ILibDropdown } from "./types"

/**
 * @description Returns a Dropdown component
 * @link https://documentation-components-react.vercel.app/components/dropdown
 * @extends HTMLDivElement
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop data-testid?: string
 */
export const Dropdown = forwardRef<HTMLDivElement, ILibDropdown>(
    (
        {
            "data-testid": testid,
            className,
            as,
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
        },
        ref
    ) => {
        const el = useRef<HTMLDivElement>(null)

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
                                  item.className ||
                                  (className && "DropdownItem")
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
)
