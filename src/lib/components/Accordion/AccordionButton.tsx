/*=============================================== AccordionButton component ===============================================*/

import { useCallback } from "react"
import classNames from "classnames"
import { capitalize } from "@julseb-lib/utils"
import { LibIcon } from "../LibIcon"
import { Plus, ChevronDown } from "../../icons"
import { StyledAccordionButton, StyledAccordionIcon } from "./styles"
import type { ILibAccordionButton } from "./subtypes"

export function AccordionButton({
    "data-testid": testid,
    className,
    variant = "basic",
    icon = "plus",
    isOpen,
    setIsOpen,
    title,
}: ILibAccordionButton) {
    const iconProps = {
        "data-testid":
            testid &&
            `${testid}.AccordionButton.IconContainer.Icon.${
                icon === "plus" ? "Plus" : "Chevron"
            }`,
        className: className && "AccordionButtonIcon",
        size: 20,
    }

    const handleClick = useCallback(() => {
        setIsOpen(!isOpen)
    }, [isOpen, setIsOpen])

    return (
        <StyledAccordionButton
            data-testid={testid && `${testid}.AccordionButton`}
            className={classNames(
                { AccordionButton: className },
                capitalize(variant)
            )}
            onClick={handleClick}
        >
            {title}

            <StyledAccordionIcon
                data-testid={
                    testid && `${testid}.AccordionButton.IconContainer`
                }
                className={classNames(
                    { AccordionButtonIconContainer: className },
                    { Open: isOpen },
                    { [capitalize(icon as string)]: typeof icon === "string" }
                )}
            >
                <LibIcon
                    icon={
                        typeof icon === "string" ? (
                            icon === "chevron" ? (
                                <ChevronDown {...iconProps} />
                            ) : (
                                <Plus {...iconProps} />
                            )
                        ) : (
                            icon
                        )
                    }
                    baseUrl={undefined}
                />
            </StyledAccordionIcon>
        </StyledAccordionButton>
    )
}
