/*=============================================== HoverContainer ===============================================*/

import classNames from "classnames"
import { LibIcon } from "../LibIcon"
import { Edit } from "../../icons"
import { StyledHoverContainer } from "./styles"
import type { ILibInputImageContainer } from "./EmptyContainer"

export function HoverContainer({
    "data-testid": testid,
    className,
    validation,
    iconSize = 32,
    icon = (
        <Edit
            data-testid={testid && `${testid}.HoverContainer.Icon`}
            className={className && "IconHover"}
            size={iconSize}
        />
    ),
    isVisible,
    disabled = false,
}: ILibInputImageContainer & {
    isVisible: boolean
    disabled: boolean | undefined
}) {
    return (
        <StyledHoverContainer
            data-testid={testid && `${testid}.HoverContainer`}
            className={classNames(
                { HoverContainer: className },
                { Visible: isVisible }
            )}
            $validation={validation}
            $disabled={disabled}
        >
            <LibIcon
                data-testid={testid && `${testid}.EmptyContainer.Icon`}
                className={className && "IconEmpty"}
                icon={icon}
                size={iconSize}
            />
        </StyledHoverContainer>
    )
}
