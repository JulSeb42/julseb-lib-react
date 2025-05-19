import { useState, useCallback, useEffect, type FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { Image } from "../../"
import { SlideshowButton } from "./SlideshowButton"
import { SlideshowPagination } from "./SlideshowPagination"
import {
    StyledSlideshow,
    SlideshowWrapper,
    SlideshowContentWrapper,
    SlideshowContent,
} from "./styles"
import type { ILibSlideshow } from "./types"

/**
 * Slideshow component for displaying a carousel of images or custom content with optional controls, pagination, and autoplay.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Slideshow props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.className] - Additional class names.
 * @param {Array<string>} [props.images] - Array of image URLs to display (used if children is not defined).
 * @param {ReactNode[]} [props.children] - Custom content to display in the slideshow (used if images is not defined).
 * @param {string|number} [props.height="30vw"] - Height of the slideshow.
 * @param {CssObjectFit} [props.imgFit="cover"] - Object-fit style for images.
 * @param {boolean|Object} [props.controls] - Show controls or provide controls configuration.
 * @param {boolean|Object} [props.pagination] - Show pagination or provide pagination configuration.
 * @param {Object} [props.options] - Slideshow options (e.g., autoPlay, speed).
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered Slideshow component.
 *
 * @see https://documentation-components-react.vercel.app/components/slideshow
 * @example
 * <Slideshow
 *   images={["/img1.jpg", "/img2.jpg"]}
 *   height={400}
 *   controls
 *   pagination
 *   options={{ autoPlay: 3000, speed: 1000 }}
 * />
 */
export const Slideshow: FC<ILibSlideshow> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    children,
    images,
    height = "30vw",
    imgFit = "cover",
    controls,
    pagination,
    options,
    ...rest
}) => {
    const [active, setActive] = useState(0)
    const length = children?.length || images?.length || 0

    const handleNext = () => setActive(active < length - 1 ? active + 1 : 0)
    const handlePrev = () => setActive(active > 0 ? active - 1 : length - 1)

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

    const [touchPosition, setTouchPosition] = useState(null)

    const handleTouchStart = (e: any) => setTouchPosition(e.touches[0].clientX)

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
                        data-testid={testid}
                        className={className}
                        onClick={handlePrev}
                        position="left"
                        controls={controls}
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
                                      className={className && "SlideshowImage"}
                                      key={uuid()}
                                  />
                              ))
                            : children}
                    </SlideshowContent>
                </SlideshowContentWrapper>

                {showControls && (
                    <SlideshowButton
                        data-testid={testid}
                        className={className}
                        onClick={handleNext}
                        position="right"
                        controls={controls}
                    />
                )}
            </SlideshowWrapper>

            {showPagination && (
                <SlideshowPagination
                    data-testid={testid}
                    className={className}
                    pagination={pagination}
                    images={images}
                    setActive={setActive}
                    contentLength={(images || children)?.length ?? 0}
                    activeSlide={active}
                />
            )}
        </StyledSlideshow>
    )
}
