import classNames from "classnames"
import { LibIcon } from "../LibIcon"
import { Edit } from "../../icons"
import { StyledHoverContainer } from "./styles"
import type { ILibHoverContainer } from "./subtypes"

export const HoverContainer = ({
    "data-testid": testid,
    className,
    validation,
    iconSizes,
    icons,
    iconBaseUrl,
    isVisible,
    disabled = false,
}: ILibHoverContainer) => {
    return (
        <StyledHoverContainer
            data-testid={testid && `${testid}.HoverContainer`}
            className={classNames(
                { HoverContainer: className },
                { Visible: isVisible }
            )}
            $validationStatus={validation?.status}
            $disabled={disabled}
        >
            <LibIcon
                data-testid={testid && `${testid}.EmptyContainer.Icon`}
                className={className && "IconEmpty"}
                icon={
                    icons?.hover ?? (
                        <Edit
                            data-testid={
                                testid && `${testid}.HoverContainer.Icon`
                            }
                            className={className && "IconHover"}
                            size={iconSizes?.hover ?? 32}
                        />
                    )
                }
                size={iconSizes?.hover ?? 32}
                baseUrl={iconBaseUrl}
            />
        </StyledHoverContainer>
    )
}
