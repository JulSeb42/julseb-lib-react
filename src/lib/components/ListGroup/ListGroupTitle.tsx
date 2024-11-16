/*=============================================== ListGroupTitle component ===============================================*/

import { forwardRef, useState, useEffect } from "react"
import classNames from "classnames"
import { StyledListGroupTitle } from "./styles"
import type { ILibListGroupTitle } from "./types"

export const ListGroupTitle = forwardRef<HTMLDivElement, ILibListGroupTitle>(
    (
        {
            "data-testid": testid,
            as,
            children,
            className,
            backgroundColor = "primary",
            contentColor = "background",
            noSeparator,
            isFixed,
            shadowOnScroll,
            listRef,
            ...rest
        },
        ref
    ) => {
        const [isScrolled, setIsScrolled] = useState(false)

        useEffect(() => {
            listRef?.current?.addEventListener("scroll", () => {
                const scroll = listRef.current?.scrollTop

                if (scroll && scroll >= 24) {
                    setIsScrolled(true)
                } else {
                    setIsScrolled(false)
                }
            })
        }, [])

        return (
            <StyledListGroupTitle
                data-testid={testid}
                ref={ref}
                as={as}
                className={classNames(className, { Scrolled: isScrolled })}
                $backgroundColor={backgroundColor}
                $contentColor={contentColor}
                $noSeparator={noSeparator}
                $isFixed={isFixed}
                $shadow={shadowOnScroll}
                {...rest}
            >
                {children}
            </StyledListGroupTitle>
        )
    }
)
