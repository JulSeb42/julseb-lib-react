/*=============================================== AccordionButton component ===============================================*/

import { useCallback } from "react"
import { LibIcon } from "../LibIcon"
import { Plus, ChevronDown } from "../../icons"
import type {
    DispatchState,
    LibAccordionVariant,
    LibAccordionIcon,
} from "../../types"
import { StyledAccordionButton, StyledAccordionIcon } from "./styles"

interface ILibAccordionButton {
    "data-testid": string | undefined
    className: string | undefined
    variant: LibAccordionVariant | undefined
    title: string
    icon: LibAccordionIcon | undefined
    isOpen: boolean
    setIsOpen: DispatchState<boolean>
}

export function AccordionButton({
    "data-testid": testid,
    className,
    variant = "basic",
    icon = "plus",
    title,
    isOpen,
    setIsOpen,
}: ILibAccordionButton) {
    const iconProps = {
        "data-testid":
            testid &&
            `${testid}.AccordionButton.IconContainer.Icon.${
                icon === "plus" ? "Plus" : "Chevron"
            }`,
        className: className && "AccordionButton__IconContainer__Icon",
        size: 20,
    }

    const handleClick = useCallback(() => {
        setIsOpen(!isOpen)
    }, [isOpen, setIsOpen])

    return (
        <StyledAccordionButton
            data-testid={testid && `${testid}.AccordionButton`}
            className={className && "AccordionButton"}
            onClick={handleClick}
            $variant={variant}
        >
            {title}

            <StyledAccordionIcon
                data-testid={
                    testid && `${testid}.AccordionButton.IconContainer`
                }
                className={className && "AccordionButton__IconContainer"}
                $isOpen={isOpen}
                $icon={icon}
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
                />
            </StyledAccordionIcon>
        </StyledAccordionButton>
    )
}
