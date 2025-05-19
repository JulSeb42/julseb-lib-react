import type { FC } from "react"
import type { LibColorsHover } from "../../types"
import { StyledHeaderBurger } from "./styles"
import type { ILibHeaderBurger } from "./subtypes"

export const HeaderBurger: FC<ILibHeaderBurger> = ({
    "data-testid": testid,
    ref,
    className,
    isOpen,
    navMobileVariant,
    variant,
    burgerColor,
    handleOpen,
    handleClose,
}) => {
    const getBurgerColor = (): LibColorsHover => {
        if (burgerColor) {
            if (typeof burgerColor === "string") return burgerColor

            return isOpen ? burgerColor.open : burgerColor.closed
        }

        if (
            (navMobileVariant === "drawer" && isOpen) ||
            variant === "primary" ||
            navMobileVariant === "full" ||
            (navMobileVariant === "top" && isOpen && variant === "transparent")
        ) {
            return "white"
        }

        return "primary"
    }

    return (
        <StyledHeaderBurger
            data-testid={testid && `${testid}.HeaderBurger`}
            ref={ref}
            className={className && "HeaderBurger"}
            isOpen={isOpen}
            onClick={() => {
                if (isOpen) handleClose()
                else handleOpen()
            }}
            width={32}
            height={24}
            color={getBurgerColor()}
        />
    )
}
