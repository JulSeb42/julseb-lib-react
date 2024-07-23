/*=============================================== BackToTop component ===============================================*/

import { forwardRef, useState, useEffect } from "react"
import { scrollToTop } from "ts-utils-julseb"
import { ArrowUp } from "../../icons"
import { StyledBackToTop } from "./styles"
import type { ILibBackToTop } from "./types"
import { roundIconSize } from "../../lib-utils"

/**
 * @description Returns a BackToTop component
 * @link https://documentation-components-react.vercel.app/components/back-to-top
 * @extends ILibButtonIcon
 * @prop data-testid?: string
 * @prop as?: ElementType
 */

export const BackToTop = forwardRef<HTMLButtonElement, ILibBackToTop>(
    (
        {
            icon = <ArrowUp size={roundIconSize(48)} />,
            tooltip = "Back to top",
            showTooltip,
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
                ? { offset: -12, ...showTooltip }
                : showTooltip !== false
                ? { offset: -12 }
                : false

        return (
            <StyledBackToTop
                ref={ref}
                icon={icon}
                onClick={smoothScroll}
                size={48}
                iconSize={roundIconSize(48)}
                tooltip={tooltip}
                showTooltip={tooltipObj}
                $isVisible={isVisible}
                {...rest}
            />
        )
    }
)
