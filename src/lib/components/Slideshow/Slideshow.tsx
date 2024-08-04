/*=============================================== Slideshow component ===============================================*/

import { forwardRef, useState, useCallback, useEffect } from "react"
import { uuid } from "ts-utils-julseb"
import { Image } from "../../"
import { ChevronLeft, ChevronRight } from "../../icons"
import { SlideshowButton } from "./SlideshowButton"
import { SlideshowPagination } from "./SlideshowPagination"
import {
    StyledSlideshow,
    SlideshowWrapper,
    SlideshowContentWrapper,
    SlideshowContent,
} from "./styles"
import type { ILibSlideshow } from "./types"

const DEFAULT_ICON_SIZE_SMALL = 24
const DEFAULT_ICON_SIZE_LARGE = 32

/**
 * @description Returns a Slideshow component
 * @link https://documentation-components-react.vercel.app/components/slideshow
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop images: Array<string> => only if children is not defined
 * @prop children?: Array<ReactNode> => only if images is not defined
 * @prop height?: string | number
 * @prop imgFit?: CssObjectFit
 * @prop controls?: boolean | Controls
 * @prop options?: Options
 * @prop pagination?: boolean | PaginationWithThumbnails | PaginationWithOther
 *
 * @type Controls
 * @type boolean or object
 * @prop data-testid?: string
 * @prop className?: string
 * @prop size?: LibSlideshowButtonSize
 * @prop color?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 * @prop hideOnTouch?: boolean
 * @prop iconPrev?: string | JSX.Element
 * @prop iconNext?: string | JSX.Element
 * @prop iconPrevSize?: number
 * @prop iconNextSize?: number
 * @prop labelPrev?: string
 * @prop labelNext?: string
 *
 * @type Options
 * @prop autoPlay?: number
 * @prop speed?: number
 *
 * @type PaginationWithThumbnails
 * @prop type?: "dots" | "dots-outline" | "bars" | "thumbnails"
 * @prop position?: "inside" | "outside"
 * @prop hideOnTouch?: boolean
 *
 * @type PaginationWithOther
 * @prop type?: "dots" | "dots-outline" | "bars"
 * @prop position?: "inside" | "outside"
 * @prop hideOnTouch?: boolean
 * @prop color?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 */

export const Slideshow = forwardRef<HTMLDivElement, ILibSlideshow>(
    (
        {
            "data-testid": testid,
            as,
            className,
            children,
            images,
            height = "30vw",
            imgFit = "cover",
            controls,
            pagination,
            options,
            ...rest
        },
        ref
    ) => {
        // Slideshow with buttons
        const [active, setActive] = useState(0)
        const length = children?.length || images?.length || 0

        const handleNext = () => setActive(active < length - 1 ? active + 1 : 0)
        const handlePrev = () => setActive(active > 0 ? active - 1 : length - 1)

        // Automatic slideshow
        const autoSlideshow = useCallback(() => {
            setActive(active < length - 1 ? active + 1 : 0)
        }, [active, length])

        useEffect(() => {
            if (!controls && !pagination && !options?.autoPlay) {
                setInterval(() => autoSlideshow(), 1500)
            } else if (options?.autoPlay) {
                setInterval(() => autoSlideshow(), options.autoPlay)
            }
        }, [options?.autoPlay, autoSlideshow, controls, pagination])

        // Swipe
        const [touchPosition, setTouchPosition] = useState(null)

        const handleTouchStart = (e: any) =>
            setTouchPosition(e.touches[0].clientX)

        const handleTouchMove = (e: any) => {
            if (touchPosition === null) {
                return
            }

            const diff = touchPosition - e.touches[0].clientX

            if (diff > 5) {
                handleNext()
            }

            if (diff < -5) {
                handlePrev()
            }

            setTouchPosition(null)
        }

        const controlsProps = {
            hideTouch:
                (typeof controls === "object" && controls.hideOnTouch) || false,
            size: (typeof controls === "object" && controls.size) || "small",
            color:
                (typeof controls === "object" && controls.color) || "primary",
        }

        const showControls: boolean = !!(
            (children && children.length > 1) ||
            (images && images.length > 1 && controls)
        )
        const showPagination: boolean = !!(
            (children && children.length > 1) ||
            (images && images.length > 1 && pagination)
        )

        return (
            <StyledSlideshow
                data-testid={testid}
                ref={ref}
                as={as}
                className={className}
                {...rest}
            >
                <SlideshowWrapper
                    data-testid={testid && `${testid}.SlideshowWrapper`}
                    className={className && "SlideshowWrapper"}
                    $height={height}
                >
                    {showControls && (
                        <SlideshowButton
                            data-testid={
                                testid &&
                                `${testid}.SlideshowWrapper.SlideshowButton.Prev`
                            }
                            className={className && "SlideshowButton"}
                            onClick={handlePrev}
                            position="left"
                            aria-label={
                                (typeof controls === "object" &&
                                    controls.labelPrev) ||
                                "Previous"
                            }
                            icon={
                                (typeof controls === "object" &&
                                    controls.iconPrev) || (
                                    <ChevronLeft
                                        data-testid={
                                            testid &&
                                            `${testid}.SlideshowWrapper.SlideshowButton.Prev.Icon`
                                        }
                                        size={
                                            typeof controls === "object" &&
                                            controls.iconPrevSize
                                                ? controls.iconPrevSize
                                                : typeof controls ===
                                                      "object" &&
                                                  controls.size === "large"
                                                ? DEFAULT_ICON_SIZE_LARGE
                                                : DEFAULT_ICON_SIZE_SMALL
                                        }
                                    />
                                )
                            }
                            iconSize={
                                typeof controls === "object" &&
                                controls.iconPrevSize
                                    ? controls.iconPrevSize
                                    : typeof controls === "object" &&
                                      controls.size === "large"
                                    ? DEFAULT_ICON_SIZE_LARGE
                                    : DEFAULT_ICON_SIZE_SMALL
                            }
                            {...(controlsProps as any)}
                        />
                    )}

                    <SlideshowContentWrapper
                        data-testid={
                            testid &&
                            `${testid}.SlideshowWrapper.SlideshowContentWrapper`
                        }
                        className={className && "SlideshowContentWrapper"}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                    >
                        <SlideshowContent
                            data-testid={
                                testid &&
                                `${testid}.SlideshowWrapper.SlideshowContentWrapper.SlideshowContent`
                            }
                            className={className && "SlideshowContent"}
                            $active={active}
                            $speed={options?.speed || 1000}
                            $imgFit={imgFit}
                        >
                            {images
                                ? images.map((image, i) => (
                                      <Image
                                          src={image}
                                          alt={`Image slideshow ${i}`}
                                          fit={imgFit}
                                          data-testid={
                                              testid &&
                                              `${testid}.SlideshowWrapper.SlideshowContentWrapper.SlideshowContent.Image`
                                          }
                                          className={
                                              className && "SlideshowImage"
                                          }
                                          key={uuid()}
                                      />
                                  ))
                                : children}
                        </SlideshowContent>
                    </SlideshowContentWrapper>

                    {showControls && (
                        <SlideshowButton
                            data-testid={
                                testid &&
                                `${testid}.SlideshowWrapper.SlideshowButton.Next`
                            }
                            className={className && "SlideshowButton"}
                            onClick={handleNext}
                            position="right"
                            aria-label={
                                (typeof controls === "object" &&
                                    controls.labelNext) ||
                                "Next"
                            }
                            icon={
                                (typeof controls === "object" &&
                                    controls.iconNext) || (
                                    <ChevronRight
                                        data-testid={
                                            testid &&
                                            `${testid}.SlideshowWrapper.SlideshowButton.Next.Icon`
                                        }
                                        size={
                                            typeof controls === "object" &&
                                            controls.iconNextSize
                                                ? controls.iconNextSize
                                                : typeof controls ===
                                                      "object" &&
                                                  controls.size === "large"
                                                ? DEFAULT_ICON_SIZE_LARGE
                                                : DEFAULT_ICON_SIZE_SMALL
                                        }
                                    />
                                )
                            }
                            iconSize={
                                typeof controls === "object" &&
                                controls.iconNextSize
                                    ? controls.iconNextSize
                                    : typeof controls === "object" &&
                                      controls.size === "large"
                                    ? DEFAULT_ICON_SIZE_LARGE
                                    : DEFAULT_ICON_SIZE_SMALL
                            }
                            {...(controlsProps as any)}
                        />
                    )}
                </SlideshowWrapper>

                {showPagination && (
                    <SlideshowPagination
                        data-testid={testid && `${testid}.SlideshowPagination`}
                        className={className && "SlideshowWrapper"}
                        setActive={setActive}
                        navType={
                            ((typeof pagination === "object" &&
                                pagination.type) ||
                                "dots") as any
                        }
                        images={images}
                        childrenLength={length}
                        position={
                            (typeof pagination === "object" &&
                                pagination.position) ||
                            "outside"
                        }
                        hideOnTouch={
                            (typeof pagination === "object" &&
                                pagination.hideOnTouch) ||
                            false
                        }
                        color={
                            (typeof pagination === "object" &&
                                pagination.color) ||
                            "primary"
                        }
                        activeSlide={active}
                    />
                )}
            </StyledSlideshow>
        )
    }
)
