/*=============================================== EmptyContainer ===============================================*/

import { Image } from "../../icons"
import { LibIcon } from "../LibIcon"
import { StyledEmptyContainer } from "./styles"
import type { ILibInputImage } from "./types"

export function EmptyContainer({
    "data-testid": testid,
    className,
    validation,
    iconSizes,
    icons,
    iconBaseUrl,
}: Pick<
    ILibInputImage,
    | "data-testid"
    | "className"
    | "validation"
    | "iconSizes"
    | "icons"
    | "iconBaseUrl"
>) {
    return (
        <StyledEmptyContainer
            data-testid={testid && `${testid}.EmptyContainer`}
            className={className && "EmptyContainer"}
            $validation={validation?.status}
        >
            <LibIcon
                data-testid={testid && `${testid}.EmptyContainer.Icon`}
                className={className && "IconEmpty"}
                icon={
                    icons?.empty ?? (
                        <Image
                            data-testid={
                                testid && `${testid}.EmptyContainer.Icon`
                            }
                            className={className && "IconEmpty"}
                            size={iconSizes?.empty ?? 48}
                        />
                    )
                }
                size={iconSizes?.empty ?? 48}
                baseUrl={iconBaseUrl}
            />
        </StyledEmptyContainer>
    )
}
