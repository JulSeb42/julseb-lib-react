import { useCallback, useState, type FC } from "react"
import { useSearchParams } from "react-router-dom"
import classNames from "classnames"
import { usePagination, useMaxWidth, Flexbox } from "../../"
import { roundIconSize } from "../../lib-utils"
import { PaginationButton } from "./PaginationButton"
import { LibIcon } from "../LibIcon"
import { ChevronLeft, ChevronRight } from "../../icons"
import type { ILibPagination } from "./types"

/**
 * Pagination component for rendering a pagination control with page numbers, previous/next buttons, and flexible icon and layout options.
 *
 * @component
 * @extends ILibFlexbox
 * @param {Object} props - Pagination props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {number} [props.totalPages] - Total number of pages (used if children is not defined).
 * @param {number} [props.pageLimit=5] - Maximum number of page buttons to display at once (used if children is not defined).
 * @param {{ previous?: string | JSX.Element; next?: string | JSX.Element }} [props.icons] - Custom icons for previous/next buttons (used if children is not defined).
 * @param {{ previous?: number; next?: number }} [props.iconSizes] - Icon sizes for previous/next buttons (used if children is not defined).
 * @param {string} [props.iconBaseUrl] - Base URL for icons (used if children is not defined).
 * @param {ReactNode} [props.children] - Custom pagination content (used if totalPages is not defined).
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"} [props.accentColor="primary"] - Accent color for active page and buttons.
 * @param {Array<Array<string>>} [props.queries] - Query parameters for pagination.
 * @param {boolean} [props.inline] - Display pagination inline.
 * @param {CssFlexDirection} [props.flexDirection] - Flex direction.
 * @param {CssFlexWrap} [props.flexWrap] - Flex wrap.
 * @param {CssJustifyContent} [props.justifyContent] - Justify content.
 * @param {CssAlignItems} [props.alignItems] - Align items.
 * @param {CssJustifyItems} [props.justifyItems] - Justify items.
 * @param {CssAlignContent} [props.alignContent] - Align content.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap] - Gap between elements.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.columnGap] - Column gap.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.rowGap] - Row gap.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }} [props.padding] - Padding for the pagination container.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element|null} The rendered Pagination component, or null if totalPages is 1 or less.
 *
 * @see https://documentation-components-react.vercel.app/components/pagination
 * @example
 * <Pagination totalPages={10} pageLimit={5} />
 */
export const Pagination: FC<ILibPagination> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    className,
    accentColor = "primary",
    queries,
    totalPages,
    pageLimit = 5,
    icons,
    iconSizes,
    iconBaseUrl,
    justifyContent = "center",
    gap,
    ...rest
}) => {
    const [searchParams] = useSearchParams()
    const currentPage = Number(searchParams.get("page")) || 1

    const [page, setPage] = useState(currentPage)

    const { handlePrev, handleNext, handlePage } = usePagination({
        currentPage: page,
        setCurrentPage: setPage,
        queries,
    })

    const getPaginationGroup = useCallback(() => {
        const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit

        return new Array(pageLimit)
            .fill(totalPages)
            .map((_, i) => start + i + 1)
            .filter(item => item <= (totalPages || 0))
    }, [currentPage, pageLimit, totalPages])
    const paginationGroup = getPaginationGroup()

    const isMobile = useMaxWidth(600)
    const defaultGap = gap || isMobile ? "xxs" : "xs"

    if (totalPages && totalPages <= 1) return null

    return (
        <Flexbox
            data-testid={testid}
            ref={ref}
            as={as}
            justifyContent={justifyContent}
            gap={defaultGap}
            className={className}
            {...rest}
        >
            {totalPages ? (
                <>
                    <PaginationButton
                        data-testid={
                            testid && `${testid}.PaginationButton.Previous`
                        }
                        className={className && "ButtonPrevious"}
                        onClick={handlePrev}
                        isActive={false}
                        disabled={page === 1}
                        accentColor={accentColor}
                    >
                        <LibIcon
                            data-testid={
                                testid &&
                                `${testid}.PaginationButton.Previous.Icon`
                            }
                            className={className && "IconPrevious"}
                            size={roundIconSize(iconSizes?.previous || 32)}
                            icon={
                                icons?.previous || (
                                    <ChevronLeft
                                        data-testid={
                                            testid &&
                                            `${testid}.PaginationButton.Previous.Icon`
                                        }
                                        className={className && "IconPrevious"}
                                        size={roundIconSize(
                                            iconSizes?.previous || 32
                                        )}
                                    />
                                )
                            }
                            baseUrl={iconBaseUrl}
                        />
                    </PaginationButton>

                    {paginationGroup[0] !== 1 && (
                        <>
                            <PaginationButton
                                data-testid={
                                    testid &&
                                    `${testid}.PaginationButton.Number${
                                        page === 1 ? ".Active" : ""
                                    }`
                                }
                                className={
                                    className &&
                                    classNames(`Number`, {
                                        Active: page === 1,
                                    })
                                }
                                isActive={page === 1}
                                onClick={() => handlePage(1)}
                                accentColor={accentColor}
                            >
                                1
                            </PaginationButton>

                            <PaginationButton
                                data-testid={
                                    testid && `${testid}.PaginationButton.More`
                                }
                                className={className && "More"}
                                accentColor={accentColor}
                                readOnly
                            >
                                ...
                            </PaginationButton>
                        </>
                    )}

                    {paginationGroup.map(n => (
                        <PaginationButton
                            data-testid={
                                testid &&
                                `${testid}.PaginationButton.Number${
                                    page === n ? ".Active" : ""
                                }`
                            }
                            className={
                                className &&
                                classNames("Number", { Active: page === n })
                            }
                            isActive={n === page}
                            onClick={() => handlePage(n)}
                            accentColor={accentColor}
                            key={n}
                        >
                            {n}
                        </PaginationButton>
                    ))}

                    {paginationGroup[paginationGroup.length - 1] !==
                        totalPages && (
                        <>
                            <PaginationButton
                                data-testid={
                                    testid && `${testid}.PaginationButton.More`
                                }
                                className={className && "More"}
                                accentColor={accentColor}
                                readOnly
                            >
                                ...
                            </PaginationButton>

                            <PaginationButton
                                data-testid={
                                    testid &&
                                    `${testid}.PaginationButton.Number${
                                        page === totalPages ? ".Active" : ""
                                    }`
                                }
                                className={className && "Number"}
                                isActive={page === totalPages}
                                onClick={() => handlePage(totalPages)}
                                accentColor={accentColor}
                            >
                                {totalPages}
                            </PaginationButton>
                        </>
                    )}

                    <PaginationButton
                        data-testid={
                            testid && `${testid}.PaginationButton.Next`
                        }
                        className={className && "ButtonNext"}
                        onClick={handleNext}
                        isActive={false}
                        disabled={page === totalPages}
                        accentColor={accentColor}
                    >
                        <LibIcon
                            data-testid={
                                testid && `${testid}.PaginationButton.Next.Icon`
                            }
                            className={className && "IconNext"}
                            size={roundIconSize(iconSizes?.next || 32)}
                            icon={
                                icons?.next || (
                                    <ChevronRight
                                        data-testid={
                                            testid &&
                                            `${testid}.PaginationButton.Next.Icon`
                                        }
                                        className={className && "IconNext"}
                                        size={roundIconSize(
                                            iconSizes?.next || 32
                                        )}
                                    />
                                )
                            }
                            baseUrl={iconBaseUrl}
                        />
                    </PaginationButton>
                </>
            ) : (
                children
            )}
        </Flexbox>
    )
}
