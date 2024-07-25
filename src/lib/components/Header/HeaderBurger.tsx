/*=============================================== HeaderBurger ===============================================*/

import { forwardRef } from "react"
import type {
    DispatchState,
    LibNavMobileVariant,
    LibHeaderVariant,
    LibColorsHover,
} from "../../types"
import { StyledHeaderBurger } from "./styles"

interface ILibHeaderBurger {
    "data-testid": string | undefined
    className: string | undefined
    isOpen: boolean
    setIsOpen: DispatchState<boolean>
    navMobileVariant: LibNavMobileVariant
    headerVariant: LibHeaderVariant
}

export const HeaderBurger = forwardRef<HTMLButtonElement, ILibHeaderBurger>(
    (
        {
            "data-testid": testid,
            className,
            isOpen,
            setIsOpen,
            navMobileVariant,
            headerVariant,
        },
        ref
    ) => {
        const getBurgerColor = (): LibColorsHover => {
            if (
                (navMobileVariant === "drawer" && isOpen) ||
                headerVariant === "primary" ||
                navMobileVariant === "full" ||
                (navMobileVariant === "top" &&
                    isOpen &&
                    headerVariant === "transparent")
            ) {
                return "white"
            }

            return "primary"
        }

        return (
            <StyledHeaderBurger
                data-testid={testid}
                ref={ref}
                className={className && "HeaderBurger"}
                isOpen={isOpen}
                onClick={() => {
                    if (isOpen) setTimeout(() => setIsOpen(false), 10)
                    setIsOpen(true)
                }}
                width={32}
                height={24}
                color={getBurgerColor()}
            />
        )
    }
)
