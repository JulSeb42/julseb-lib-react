import { useState, useRef, useCallback, type FC } from "react"
import classNames from "classnames"
import { useTouchScreen, useClickOutside } from "../../"
import type { LibTooltipTrigger } from "../../types"
import { TooltipWrapper, StyledTooltip } from "./styles"
import type { ILibTooltip } from "./types"

/**
 * Tooltip component for displaying contextual information on hover or click, with customizable position, colors, arrow, and trigger.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Tooltip props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {ForwardedRef<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.className] - Additional class names.
 * @param {ReactNode} props.tooltip - Tooltip content (string or JSX element).
 * @param {"top" | "bottom" | "left" | "right"} [props.position="top"] - Tooltip position relative to the trigger.
 * @param {boolean} [props.hideArrow] - If true, hides the tooltip arrow.
 * @param {"hover" | "click"} [props.trigger] - Trigger event for showing the tooltip.
 * @param {string} [props.backgroundColor="black-80"] - Tooltip background color.
 * @param {string} [props.textColor="white"] - Tooltip text color.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.offset="xs"] - Offset between the tooltip and the trigger.
 * @param {CSSProperties} [props.tooltipStyles] - Custom styles for the tooltip.
 * @param {MouseEventHandler} [props.onClick] - Custom click handler for the trigger.
 * @param {MouseEventHandler} [props.onMouseEnter] - Custom mouse enter handler for the trigger.
 * @param {MouseEventHandler} [props.onMouseLeave] - Custom mouse leave handler for the trigger.
 * @param {ReactNode} [props.children] - Element that triggers the tooltip.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered Tooltip component.
 *
 * @see https://documentation-components-react.vercel.app/components/tooltip
 * @example
 * <Tooltip tooltip="More info" position="bottom">
 *   <button>Hover me</button>
 * </Tooltip>
 */
export const Tooltip: FC<ILibTooltip> = ({
    "data-testid": testid,
    as,
    ref,
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
}) => {
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
