import { forwardRef } from "react"
import classNames from "classnames"
import { StyledBurger } from "./styles"
import type { ILibBurger } from "./types"

/**
 * @description Returns a Burger component
 * @link https://documentation-components-react.vercel.app/components/burger
 * @extends HTMLButtonElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLButtonElement>
 * @prop isOpen: boolean
 * @prop color?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background" | "currentColor"
 * @prop width?: number
 * @prop height?: number
 * @prop noHover?: boolean
 * @prop borderWidth?: number
 */
export const Burger = forwardRef<HTMLButtonElement, ILibBurger>(
    (
        {
            "data-testid": testid,
            as,
            className,
            isOpen,
            color = "primary",
            width = 32,
            height = 24,
            noHover,
            borderWidth = 2,
            "aria-label": ariaLabel = `${isOpen ? "Close" : "Open"} burger`,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledBurger
                data-testid={testid}
                ref={ref}
                as={as ? as : noHover ? "span" : "button"}
                className={classNames(className, { Open: isOpen })}
                aria-label={ariaLabel}
                $noHover={noHover}
                $borderWidth={borderWidth}
                $color={color}
                $height={height}
                $width={width}
                {...rest}
            >
                <span />
                <span />
                <span />
            </StyledBurger>
        )
    }
)
