import { LibIcon } from "../LibIcon"
import { ChevronLeft, ChevronRight } from "../../icons"
import { StyledSlideshowButton } from "./styles"
import type { ILibSlideshowButton } from "./subtypes"

const DEFAULT_ICON_SIZE_SMALL = 24
const DEFAULT_ICON_SIZE_LARGE = 32

export const SlideshowButton = ({
    "data-testid": testid,
    className,
    onClick,
    position,
    controls,
}: ILibSlideshowButton) => {
    const {
        "data-testid": controlTestid,
        className: controlClassName,
        size = "small",
        color = "primary",
        hideOnTouch,
        "aria-label": label = position === "right" ? "Previous" : "Next",
        iconsSizes = {
            prev:
                size === "large"
                    ? DEFAULT_ICON_SIZE_LARGE
                    : DEFAULT_ICON_SIZE_SMALL,
            next:
                size === "large"
                    ? DEFAULT_ICON_SIZE_LARGE
                    : DEFAULT_ICON_SIZE_SMALL,
        },
        icons = {
            prev: (
                <ChevronLeft
                    data-testid={
                        controlTestid ??
                        (testid &&
                            `${testid}.SlideshowButton.${
                                position === "right" ? "Next" : "Prev"
                            }.Icon`)
                    }
                    size={iconsSizes?.prev}
                />
            ),
            next: (
                <ChevronRight
                    data-testid={
                        controlTestid ??
                        (testid &&
                            `${testid}.SlideshowButton.${
                                position === "right" ? "Next" : "Prev"
                            }.Icon`)
                    }
                    size={iconsSizes?.next}
                />
            ),
        },
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
                icon={position === "right" ? icons.next : icons.prev}
                size={position === "right" ? iconsSizes.next : iconsSizes.prev}
                color="currentColor"
                baseUrl={iconBaseUrl}
            />
        </StyledSlideshowButton>
    )
}
