import { useState, useEffect, type FC } from "react"
import classNames from "classnames"
import { scrollToTop } from "@julseb-lib/utils"
import { ArrowUp } from "../../icons"
import { StyledBackToTop } from "./styles"
import type { ILibBackToTop } from "./types"
import { roundIconSize } from "../../lib-utils"

/**
 * BackToTop component for displaying a floating button that scrolls the page to the top.
 *
 * @component
 * @param {Object} props - BackToTop props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLButtonElement>} [props.ref] - Ref forwarded to the button element.
 * @param {string} [props.className] - Additional class names.
 * @param {ReactNode} [props.icon] - Icon to display in the button.
 * @param {string} [props.tooltip="Back to top"] - Tooltip text.
 * @param {boolean|Object} [props.showTooltip] - Show tooltip or tooltip options.
 * @param {Object} [props.position] - Position of the button ({ left, top, right, bottom, zIndex }).
 * @returns {JSX.Element} The rendered BackToTop component.
 *
 * @example
 * <BackToTop tooltip="Go up" position={{ right: "l", bottom: "l" }} />
 */
export const BackToTop: FC<ILibBackToTop> = ({
    "data-testid": testid,
    ref,
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
}) => {
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
