/*=============================================== Tooltip component ===============================================*/

import { forwardRef, useState, useRef, useCallback } from "react"
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
 * @prop tooltip: string | JSX.Element
 * @prop position?: "top" | "bottom"
 * @prop withArrow?: boolean
 * @prop trigger?: "hover" | "click"
 * @prop backgroundColor?: LibAllColorsAndOverlays
 * @prop textColor?: LibAllColors
 * @props offset?: LibSpacers
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
            withArrow = true,
            trigger,
            backgroundColor = "black-80",
            textColor = "white",
            onClick,
            onMouseEnter,
            onMouseLeave,
            offset = "xs",
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
                className={className}
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
                $isVisible={isVisible}
                {...rest}
            >
                <StyledTooltip
                    data-testid={testid && `${testid}.Tooltip`}
                    className={className && "Tooltip"}
                    ref={el}
                    $isVisible={isVisible}
                    $position={position}
                    $withArrow={withArrow}
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
