import { useCallback, useState, type ChangeEvent, type FC } from "react"
import { useSearchParams } from "react-router-dom"
import { Text, ButtonIcon, usePagination, Flexbox } from "../../"
import { roundIconSize } from "../../lib-utils"
import { ChevronLeft, ChevronRight } from "../../icons"
import { TextContainer, StyledInput } from "./styles"
import type { ILibPaginator } from "./types"

const DEFAULT_ICON_SIZE = 32

/**
 * Paginator component for rendering a pagination control with input, previous/next buttons, and flexible icon, label, and layout options.
 *
 * @component
 * @extends ILibFlexbox
 * @param {Object} props - Paginator props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.className] - Additional class names.
 * @param {number} props.totalPages - Total number of pages.
 * @param {boolean} [props.inputNotEditable] - If true, disables editing the page input.
 * @param {{ page?: string; of?: string }} [props.texts] - Texts for "page" and "of" labels.
 * @param {{ prev?: string | JSX.Element; next?: string | JSX.Element }} [props.icons] - Custom icons for previous/next buttons.
 * @param {{ prev?: number; next?: number }} [props.iconSizes] - Icon sizes for previous/next buttons.
 * @param {string} [props.iconsBaseUrl] - Base URL for icons.
 * @param {{ prev?: string; next?: string; show?: boolean }} [props.labels] - Labels and tooltip options for previous/next buttons.
 * @param {Array<Array<string>>} [props.queries] - Query parameters for pagination.
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"} [props.accentColor="primary"] - Accent color for active page and buttons.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap="xs"] - Gap between elements.
 * @param {CssAlignItems} [props.alignItems="center"] - Align items property for Flexbox.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element|null} The rendered Paginator component, or null if totalPages is 1 or less.
 *
 * @see https://documentation-components-react.vercel.app/components/paginator
 * @example
 * <Paginator
 *   totalPages={10}
 *   texts={{ page: "Page", of: "of" }}
 *   labels={{ prev: "Previous", next: "Next", show: true }}
 * />
 */
export const Paginator: FC<ILibPaginator> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    totalPages,
    inputNotEditable,
    texts = { page: "Page", of: "of" },
    iconSizes = {
        prev: roundIconSize(DEFAULT_ICON_SIZE),
        next: roundIconSize(DEFAULT_ICON_SIZE),
    },
    icons,
    iconsBaseUrl,
    labels = { prev: "Previous", next: "Next" },
    queries,
    gap = "xs",
    alignItems = "center",
    accentColor = "primary",
    ...rest
}) => {
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

    if (totalPages && totalPages <= 1) return null

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
                            data-testid={testid && `${testid}.Button.Prev.Icon`}
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
                iconBaseUrl={iconsBaseUrl}
            />

            <ButtonIcon
                data-testid={testid && `${testid}.Button.Next`}
                className={className && "ButtonNext"}
                icon={
                    icons?.next || (
                        <ChevronRight
                            data-testid={testid && `${testid}.Button.Next.Icon`}
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
                iconBaseUrl={iconsBaseUrl}
            />
        </Flexbox>
    )
}
