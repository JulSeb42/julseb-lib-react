/*=============================================== SlideshowButton ===============================================*/

import { LibIcon } from "../LibIcon"
import type {
    LibColorsHover,
    LibIcon as LibIconType,
    LibSlideshowButtonPosition,
    LibSlideshowButtonSize,
} from "../../types"
import { StyledSlideshowButton } from "./styles"

interface ILibSlideshowButton {
    "data-testid": string | undefined
    className: string | undefined
    onClick: () => void
    position: LibSlideshowButtonPosition
    hideTouch: boolean
    size: LibSlideshowButtonSize
    color: LibColorsHover
    "aria-label": string | undefined
    icon: LibIconType
    iconSize: number
}

export function SlideshowButton({
    "data-testid": testid,
    className,
    onClick,
    position,
    hideTouch = false,
    size = "small",
    color = "primary",
    "aria-label": label,
    icon,
    iconSize,
}: ILibSlideshowButton) {
    return (
        <StyledSlideshowButton
            data-testid={testid}
            className={className}
            onClick={onClick}
            type="button"
            role="button"
            aria-label={label}
            $hideOnTouch={hideTouch}
            $color={color}
            $position={position}
            $size={size}
        >
            <LibIcon
                data-testid={testid && `${testid}.Icon`}
                className={className && "ButtonIcon"}
                icon={icon}
                size={iconSize}
                color="currentColor"
            />
        </StyledSlideshowButton>
    )
}
