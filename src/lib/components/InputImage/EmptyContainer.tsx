/*=============================================== EmptyContainer ===============================================*/

import { Image } from "../../icons"
import { LibIcon } from "../LibIcon"
import type { LibValidationStatus, LibIcon as LibIconType } from "../../types"
import { StyledEmptyContainer } from "./styles"

export interface ILibInputImageContainer {
    "data-testid": string | undefined
    className: string | undefined
    validation: LibValidationStatus
    icon?: LibIconType
    iconSize?: number
}

export function EmptyContainer({
    "data-testid": testid,
    className,
    validation,
    iconSize = 48,
    icon = (
        <Image
            data-testid={testid && `${testid}.EmptyContainer.Icon`}
            className={className && "IconEmpty"}
            size={iconSize}
        />
    ),
}: ILibInputImageContainer) {
    return (
        <StyledEmptyContainer
            data-testid={testid && `${testid}.EmptyContainer`}
            className={className && "EmptyContainer"}
            $validation={validation}
        >
            <LibIcon
                data-testid={testid && `${testid}.EmptyContainer.Icon`}
                className={className && "IconEmpty"}
                icon={icon}
                size={iconSize}
            />
        </StyledEmptyContainer>
    )
}
