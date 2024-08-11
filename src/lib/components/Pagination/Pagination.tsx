/*=============================================== Pagination component ===============================================*/

import { forwardRef, useCallback, useState } from "react"
import { useSearchParams } from "react-router-dom"
import classNames from "classnames"
import { usePagination, useMaxWidth, Flexbox } from "../../"
import { roundIconSize } from "../../lib-utils"
import { PaginationButton } from "./PaginationButton"
import { LibIcon } from "../LibIcon"
import { ChevronLeft, ChevronRight } from "../../icons"
import type { ILibPagination } from "./types"

/**
 * @description Returns a Pagination component
 * @link https://documentation-components-react.vercel.app/components/pagination
 * @extends ILibFlexbox
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop totalPages: number => only if children is not defined
 * @prop pageLimit?: number => only if children is not defined
 * @prop icons?: { previous?: string | JSX.Element; next?: string | JSX.Element } => only if children is not defined
 * @prop iconSizes?: { previous?: number; next?: number } => only if children is not defined
 * @prop children?: ReactChildren => only if totalPages & pageLimit & icons & iconSizes are not defined
 * @prop accentColor?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 * @prop queries?: Array<Array<string>>
 */
export const Pagination = forwardRef<HTMLDivElement, ILibPagination>(
    (
        {
            "data-testid": testid,
            as,
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
        },
        ref
    ) => {
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
                                            className={
                                                className && "IconPrevious"
                                            }
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
                                        testid &&
                                        `${testid}.PaginationButton.More`
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
                                        testid &&
                                        `${testid}.PaginationButton.More`
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
                                    testid &&
                                    `${testid}.PaginationButton.Next.Icon`
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
)
