import { forwardRef, useState, useRef, useCallback } from "react"
import classNames from "classnames"
import { useTouchScreen, useClickOutside } from "../../"
import type { LibTooltipTrigger } from "../../types"
import { TooltipWrapper, StyledTooltip } from "./styles"
import type { ILibTooltip } from "./types"

/**
 * @description Returns a Tooltip component
 * @link https://documentation-components-react.vercel.app/components/tooltip
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop tooltip: string | JSX.Element
 * @prop position?: "top" | "bottom" | "left" | "right"
 * @prop hideArrow?: boolean
 * @prop trigger?: "hover" | "click"
 * @prop backgroundColor?: Any color or overlay from the library
 * @prop textColor?: Any color from the library
 * @prop offset?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop tooltipStyles?: CSSProperties
 */
export const Tooltip = forwardRef<HTMLDivElement, ILibTooltip>(
    (
        {
            "data-testid": testid,
            as,
            className,
            children,
            tooltip,
            position = "top",
            hideArrow,
            trigger,
            backgroundColor = "black-80",
            textColor = "white",
            onClick,
            onMouseEnter,
            onMouseLeave,
            offset = "xs",
            tooltipStyles,
            ...rest
        },
        ref
    ) => {
        const isTouchScreen = useTouchScreen()
        const defaultTrigger: LibTooltipTrigger =
            trigger === "click" || isTouchScreen ? "click" : "hover"

        const [isVisible, setIsVisible] = useState(false)

        const el = useRef<HTMLDivElement>(null)
        useClickOutside(el, () => {
            if (isVisible && defaultTrigger === "click") setIsVisible(false)
        })

        const handleClick = useCallback(() => {
            setIsVisible(!isVisible)
        }, [isVisible])

        const handleHover = useCallback(() => {
            setIsVisible(true)
        }, [])
        const handleLeave = useCallback(() => {
            setIsVisible(false)
        }, [])

        return (
            <TooltipWrapper
                data-testid={testid}
                ref={ref}
                as={as}
                className={classNames(className, { Visible: isVisible })}
                onClick={
                    onClick
                        ? onClick
                        : defaultTrigger === "click"
                        ? handleClick
                        : undefined
                }
                onMouseEnter={
                    onMouseEnter
                        ? onMouseEnter
                        : defaultTrigger === "hover"
                        ? handleHover
                        : undefined
                }
                onMouseLeave={
                    onMouseLeave
                        ? onMouseLeave
                        : defaultTrigger === "hover"
                        ? handleLeave
                        : undefined
                }
                {...rest}
            >
                <StyledTooltip
                    data-testid={testid && `${testid}.Tooltip`}
                    className={classNames(
                        { Tooltip: className },
                        { Visible: isVisible }
                    )}
                    ref={el}
                    style={tooltipStyles}
                    $position={position}
                    $withArrow={!hideArrow}
                    $backgroundColor={backgroundColor}
                    $textColor={textColor}
                    $offset={offset}
                >
                    {tooltip}
                </StyledTooltip>

                {children}
            </TooltipWrapper>
        )
    }
)
