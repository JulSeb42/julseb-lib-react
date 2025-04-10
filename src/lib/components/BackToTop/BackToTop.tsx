import { forwardRef, useState, useEffect } from "react"
import classNames from "classnames"
import { scrollToTop } from "@julseb-lib/utils"
import { ArrowUp } from "../../icons"
import { StyledBackToTop } from "./styles"
import type { ILibBackToTop } from "./types"
import { roundIconSize } from "../../lib-utils"

/**
 * @description Returns a BackToTop component
 * @link https://documentation-components-react.vercel.app/components/back-to-top
 * @extends Partial<ILibButtonIcon>
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLButtonElement>
 * @prop position?: { left?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | "unset"; top?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | "unset"; right?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | "unset"; bottom?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | "unset"; zIndex?: number }
 */
export const BackToTop = forwardRef<HTMLButtonElement, ILibBackToTop>(
    (
        {
            "data-testid": testid,
            className,
            icon = (
                <ArrowUp
                    size={roundIconSize(48)}
                    data-testid={testid && `${testid}.Button.Icon`}
                    className={className && "IconArrowUp"}
                />
            ),
            tooltip = "Back to top",
            showTooltip,
            position,
            ...rest
        },
        ref
    ) => {
        const [isVisible, setIsVisible] = useState(false)

        useEffect(() => {
            if (window.scrollY >= 200) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }

            window.addEventListener("scroll", () => {
                if (window.scrollY >= 200) {
                    setIsVisible(true)
                } else {
                    setIsVisible(false)
                }
            })
        }, [])

        const smoothScroll = () => {
            document.body.classList.add("smooth")
            document.documentElement.classList.add("smooth")

            setTimeout(() => scrollToTop(), 100)

            setTimeout(() => {
                document.body.classList.remove("smooth")
                document.documentElement.classList.remove("smooth")
            }, 1000)
        }

        const tooltipObj =
            showTooltip && typeof showTooltip === "object"
                ? { offset: 42, ...showTooltip }
                : showTooltip !== false
                ? { offset: 42 }
                : false

        return (
            <StyledBackToTop
                data-testid={testid}
                className={classNames(className, { Visible: isVisible })}
                ref={ref}
                icon={icon}
                onClick={smoothScroll}
                size={48}
                iconSize={roundIconSize(48)}
                tooltip={tooltip}
                showTooltip={{
                    ...tooltipObj,
                    position: "left",
                    backgroundColor: "white",
                    textColor: "black",
                }}
                $left={position?.left}
                $top={position?.top}
                $right={position?.right ?? "xl"}
                $bottom={position?.bottom ?? "xl"}
                $zIndex={position?.zIndex ?? 999}
                {...rest}
            />
        )
    }
)
