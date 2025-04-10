import { Image } from "../../icons"
import { LibIcon } from "../LibIcon"
import { StyledEmptyContainer } from "./styles"
import type { ILibEmptyContainer } from "./subtypes"

export const EmptyContainer = ({
    "data-testid": testid,
    className,
    validation,
    iconSizes,
    icons,
    iconBaseUrl,
}: ILibEmptyContainer) => {
    return (
        <StyledEmptyContainer
            data-testid={testid && `${testid}.EmptyContainer`}
            className={className && "EmptyContainer"}
            $validationStatus={validation?.status}
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
