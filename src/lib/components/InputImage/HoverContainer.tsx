/*=============================================== HoverContainer ===============================================*/

import classNames from "classnames"
import { LibIcon } from "../LibIcon"
import { Edit } from "../../icons"
import { StyledHoverContainer } from "./styles"
import type { ILibInputImage } from "./types"
// import type { ILibInputImageContainer } from "./EmptyContainer"

export function HoverContainer({
    "data-testid": testid,
    className,
    validation,
    iconSizes,
    icons,
    iconBaseUrl,
    isVisible,
    disabled = false,
}: Pick<
    ILibInputImage,
    | "data-testid"
    | "className"
    | "validation"
    | "icons"
    | "iconSizes"
    | "iconBaseUrl"
    | "disabled"
> & {
    isVisible: boolean
}) {
    return (
        <StyledHoverContainer
            data-testid={testid && `${testid}.HoverContainer`}
            className={classNames(
                { HoverContainer: className },
                { Visible: isVisible }
            )}
            $validation={validation?.status}
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
