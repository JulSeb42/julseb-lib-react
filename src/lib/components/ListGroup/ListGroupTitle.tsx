import { useState, useEffect, type FC } from "react"
import classNames from "classnames"
import { StyledListGroupTitle } from "./styles"
import type { ILibListGroupTitle } from "./types"

export const ListGroupTitle: FC<ILibListGroupTitle> = ({
    "data-testid": testid,
    ref,
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
}) => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        if (listRef && typeof listRef !== "function" && listRef.current) {
            const handleScroll = () => {
                const scroll = listRef.current?.scrollTop

                if (scroll && scroll >= 24) {
                    setIsScrolled(true)
                } else {
                    setIsScrolled(false)
                }
            }
            listRef.current.addEventListener("scroll", handleScroll)
            return () => {
                listRef.current?.removeEventListener("scroll", handleScroll)
            }
        }
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
