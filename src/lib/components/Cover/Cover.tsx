import type { FC } from "react"
import { StyledCover, CoverImg, CoverContent } from "./styles"
import type { ILibCover } from "./types"

/**
 * Cover component for displaying a full-width background image with overlay and flexible content.
 *
 * @component
 * @param {Object} props - Cover props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} props.img - Image source for the cover background.
 * @param {string} [props.alt] - Alt text for the background image.
 * @param {"black-50" | "black-80" | "white-50" | "white-80" | "gradient-black" | "gradient-white"} [props.overlay] - Overlay style for the cover.
 * @param {number|string} [props.height="100vh"] - Height of the cover.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | Object} [props.padding="xxl"] - Padding for the content.
 * @param {"column" | "row"} [props.flexDirection="column"] - Flex direction for the content.
 * @param {"center" | "start" | "end" | "flex-start" | "flex-end" | "baseline" | "stretch"} [props.justifyContent="center"] - Justify content for the content.
 * @param {"center" | "start" | "end" | "flex-start" | "flex-end" | "baseline" | "stretch"} [props.alignItems="center"] - Align items for the content.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap="s"] - Gap between children.
 * @param {string} [props.className] - Additional class names.
 * @param {ReactNode} [props.children] - Content to display inside the cover.
 * @returns {JSX.Element} The rendered Cover component.
 *
 * @example
 * <Cover img="/cover.jpg" overlay="black-50" height="60vh">
 *   <h1>Welcome</h1>
 * </Cover>
 */
export const Cover: FC<ILibCover> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    img,
    alt,
    overlay,
    height = "100vh",
    gap = "s",
    flexDirection = "column",
    justifyContent = "center",
    alignItems = "center",
    padding = "xxl",
    className,
    ...rest
}) => {
    return (
        <StyledCover
            data-testid={testid}
            ref={ref}
            as={as}
            className={className}
            $height={height}
            $overlay={overlay}
            {...rest}
        >
            <CoverImg
                data-testid={testid && `${testid}.CoverImage`}
                className={className && "CoverImage"}
                src={img}
                alt={alt}
            />

            <CoverContent
                data-testid={testid && `${testid}.CoverContent`}
                className={className && "CoverContent"}
                flexDirection={flexDirection}
                gap={gap}
                justifyContent={justifyContent}
                alignItems={alignItems}
                $overlay={overlay}
                $padding={padding}
            >
                {children}
            </CoverContent>
        </StyledCover>
    )
}
