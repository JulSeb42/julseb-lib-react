/*=============================================== InputIconComponent ===============================================*/

import { LibIcon } from "../../LibIcon"
import { StyledInputIconContainer } from "../styles"
import type { ILibInputIconContainer } from "../types"

/**
 * @description Returns a icon located on the left of an input
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop icon: string | JSX.Element | undefined
 * @prop iconSize: number | undefined
 * @prop iconBaseUrl: string | undefined
 * @prop validationStatus: boolean | undefined
 * @prop disabled: boolean | undefined
 * @prop inputBackground: "light" | "dark" | undefined
 * @prop inputVariant: "rounded" | "pill" | undefined
 */
export function InputIcon({
    "data-testid": testid,
    className,
    icon,
    iconSize = 24,
    iconBaseUrl,
    validationStatus,
    inputBackground,
    disabled,
    inputVariant,
}: ILibInputIconContainer) {
    if (!icon) return null

    return (
        <StyledInputIconContainer
            data-testid={testid && `${testid}.IconContainer`}
            className={className && "IconContainerLeft"}
            $disabled={disabled}
            $inputBackground={inputBackground}
            $inputVariant={inputVariant}
            $validationStatus={validationStatus}
        >
            <LibIcon
                data-testid={testid && `${testid}.IconContainer.Icon`}
                className={className && "IconLeft"}
                icon={icon}
                size={iconSize}
                baseUrl={iconBaseUrl}
            />
        </StyledInputIconContainer>
    )
}
