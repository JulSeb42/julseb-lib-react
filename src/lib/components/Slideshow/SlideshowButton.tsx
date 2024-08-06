/*=============================================== SlideshowButton ===============================================*/

import { LibIcon } from "../LibIcon"
import { ChevronLeft, ChevronRight } from "../../icons"
import { StyledSlideshowButton } from "./styles"
import type { ILibSlideshowButton } from "./subtypes"

const DEFAULT_ICON_SIZE_SMALL = 24
const DEFAULT_ICON_SIZE_LARGE = 32

export function SlideshowButton({
    "data-testid": testid,
    className,
    onClick,
    position,
    controls,
}: ILibSlideshowButton) {
    const {
        "data-testid": controlTestid,
        className: controlClassName,
        size = "small",
        color = "primary",
        hideOnTouch,
        "aria-label": label = position === "right" ? "Previous" : "Next",
        iconPrevSize = size === "large"
            ? DEFAULT_ICON_SIZE_LARGE
            : DEFAULT_ICON_SIZE_SMALL,
        iconNextSize = size === "large"
            ? DEFAULT_ICON_SIZE_LARGE
            : DEFAULT_ICON_SIZE_SMALL,
        iconPrev = (
            <ChevronLeft
                data-testid={
                    controlTestid ??
                    (testid &&
                        `${testid}.SlideshowButton.${
                            position === "right" ? "Next" : "Prev"
                        }.Icon`)
                }
                size={iconPrevSize}
            />
        ),
        iconNext = (
            <ChevronRight
                data-testid={
                    controlTestid ??
                    (testid &&
                        `${testid}.SlideshowButton.${
                            position === "right" ? "Next" : "Prev"
                        }.Icon`)
                }
                size={iconNextSize}
            />
        ),
        iconBaseUrl,
    } = controls as any

    return (
        <StyledSlideshowButton
            data-testid={
                controlTestid ??
                (testid &&
                    `${testid}.SlideshowButton.${
                        position === "right" ? "Next" : "Prev"
                    }`)
            }
            className={controlClassName ?? (className && "SlideshowButton")}
            onClick={onClick}
            type="button"
            role="button"
            aria-label={label}
            $hideOnTouch={hideOnTouch}
            $color={color}
            $position={position}
            $size={size}
        >
            <LibIcon
                data-testid={
                    controlTestid ??
                    (testid &&
                        `${testid}.SlideshowButton.${
                            position === "right" ? "Next" : "Prev"
                        }.Icon`)
                }
                className={(className || controlClassName) && "SlideshowIcon"}
                icon={position === "right" ? iconNext : iconPrev}
                size={position === "right" ? iconNextSize : iconPrevSize}
                color="currentColor"
                baseUrl={iconBaseUrl}
            />
        </StyledSlideshowButton>
    )
}
