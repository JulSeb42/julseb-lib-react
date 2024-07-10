/*=============================================== AccordionButton component ===============================================*/

import { useCallback } from "react"
import { LibIcon } from "../LibIcon"
import { Plus, ChevronDown } from "../../icons"
import type { DispatchState } from "../../types"
import { StyledAccordionButton, StyledAccordionIcon } from "./styles"
import type { AccordionVariant, AccordionIcon } from "./types"

interface AccordionButtonProps {
    "data-testid": string | undefined
    className: string | undefined
    variant: AccordionVariant | undefined
    title: string
    icon: AccordionIcon | undefined
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
}: AccordionButtonProps) {
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
