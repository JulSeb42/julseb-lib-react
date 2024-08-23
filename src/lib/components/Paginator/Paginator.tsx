/*=============================================== Paginator component ===============================================*/

import { forwardRef, useCallback, useState, type ChangeEvent } from "react"
import { useSearchParams } from "react-router-dom"
import { Text, ButtonIcon, usePagination, Flexbox } from "../../"
import { roundIconSize } from "../../lib-utils"
import { ChevronLeft, ChevronRight } from "../../icons"
import { TextContainer, StyledInput } from "./styles"
import type { ILibPaginator } from "./types"

const DEFAULT_ICON_SIZE = 32

/**
 * @description Returns a Paginator component
 * @link https://documentation-components-react.vercel.app/components/paginator
 * @extends ILibFlexbox
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 */
export const Paginator = forwardRef<HTMLDivElement, ILibPaginator>(
    (
        {
            "data-testid": testid,
            as,
            className,
            totalPages,
            inputNotEditable,
            texts = { page: "Page", of: "of" },
            iconSizes = {
                prev: roundIconSize(DEFAULT_ICON_SIZE),
                next: roundIconSize(DEFAULT_ICON_SIZE),
            },
            icons,
            labels = { prev: "Previous", next: "Next" },
            queries,
            gap = "xs",
            alignItems = "center",
            accentColor = "primary",
            ...rest
        },
        ref
    ) => {
        const [searchParams] = useSearchParams()
        const page = Number(searchParams.get("page")) || 1

        const [currentPage, setCurrentPage] = useState(page)

        const { handlePrev, handleNext, handlePage } = usePagination({
            currentPage,
            setCurrentPage,
            queries,
            totalPages,
        })

        const handleChange = useCallback(
            (e: ChangeEvent<HTMLInputElement>) =>
                handlePage(Number(e.target.value)),
            [handlePage]
        )

        return (
            <Flexbox
                data-testid={testid}
                ref={ref}
                as={as}
                className={className}
                gap={gap}
                alignItems={alignItems}
                {...rest}
            >
                {!inputNotEditable ? (
                    <TextContainer
                        data-testid={testid && `${testid}.Text`}
                        className={className && "Text"}
                    >
                        {texts?.page}
                        <StyledInput
                            data-testid={testid && `${testid}.Text.Input`}
                            className={className && "Input"}
                            type="number"
                            value={currentPage}
                            onChange={handleChange}
                            $accentColor={accentColor}
                        />
                        {texts?.of} {totalPages}
                    </TextContainer>
                ) : (
                    <Text
                        data-testid={testid && `${testid}.Text`}
                        className={className && "Text"}
                        as="span"
                    >
                        {texts?.page} {currentPage} {texts?.of} {totalPages}
                    </Text>
                )}

                <ButtonIcon
                    data-testid={testid && `${testid}.Button.Prev`}
                    className={className && "ButtonPrev"}
                    icon={
                        icons?.prev || (
                            <ChevronLeft
                                data-testid={
                                    testid && `${testid}.Button.Prev.Icon`
                                }
                                className={className && "IconPrev"}
                                size={iconSizes.prev}
                            />
                        )
                    }
                    iconSize={iconSizes?.prev}
                    size={32}
                    variant="transparent"
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    showTooltip={labels?.show}
                    tooltip={labels?.prev}
                    aria-label={labels?.prev}
                    color={accentColor}
                />

                <ButtonIcon
                    data-testid={testid && `${testid}.Button.Next`}
                    className={className && "ButtonNext"}
                    icon={
                        icons?.next || (
                            <ChevronRight
                                data-testid={
                                    testid && `${testid}.Button.Next.Icon`
                                }
                                className={className && "IconNext"}
                                size={iconSizes.next}
                            />
                        )
                    }
                    iconSize={iconSizes?.next}
                    size={32}
                    variant="transparent"
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    showTooltip={labels?.show}
                    tooltip={labels?.next}
                    aria-label={labels?.next}
                    color={accentColor}
                />
            </Flexbox>
        )
    }
)
