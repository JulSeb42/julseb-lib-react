import { useEffect, type FC } from "react"
import { disableScroll } from "@julseb-lib/utils"
import { Loader } from "../../"
import { StyledPageLoading } from "./styles"
import type { ILibPageLoading } from "./types"

/**
 * PageLoading component for displaying a fullscreen loading spinner with customizable background, loader color, and variant.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - PageLoading props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.backgroundColor="primary"] - Background color for the loading overlay.
 * @param {string} [props.loaderColor="white"] - Color for the loader spinner.
 * @param {1 | 2 | 3 | 4} [props.loaderVariant=1] - Loader visual variant.
 * @param {boolean} [props.stopScrolling] - Disable page scrolling while loading.
 * @param {string} [props.className] - Additional class names.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered PageLoading component.
 *
 * @see https://documentation-components-react.vercel.app/components/page-loading
 * @example
 * <PageLoading backgroundColor="gray" loaderColor="primary" loaderVariant={2} stopScrolling />
 */
export const PageLoading: FC<ILibPageLoading> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    backgroundColor = "primary",
    loaderColor = "white",
    loaderVariant = 1,
    stopScrolling,
    ...rest
}) => {
    useEffect(() => {
        if (stopScrolling) disableScroll()
    }, [stopScrolling])

    const loaderProps = {
        "data-testid": testid && `${testid}.Loader`,
        size: 64,
        color: loaderColor
            ? loaderColor
            : backgroundColor === "white"
            ? "primary"
            : "background",
        className: className && "Loader",
        variant: loaderVariant,
    }

    return (
        <StyledPageLoading
            data-testid={testid}
            ref={ref}
            as={as}
            className={className}
            $backgroundColor={backgroundColor}
            {...rest}
        >
            <Loader {...(loaderProps as any)} />
        </StyledPageLoading>
    )
}
