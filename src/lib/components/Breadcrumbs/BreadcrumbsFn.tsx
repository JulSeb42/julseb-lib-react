/*=============================================== BreadcrumbsFn ===============================================*/

import { forwardRef, Fragment } from "react"
import { uuid } from "ts-utils-julseb"
import { LibIcon } from "../LibIcon"
import { ChevronRight } from "../../icons"
import { StyledBreadcrumbs, SeparatorContainer } from "./styles"
import type { ILibBreadcrumbs } from "./types"

export const BreadcrumbsFn = forwardRef<
    HTMLDivElement,
    Exclude<ILibBreadcrumbs, "breadcrumbsItems">
>(
    (
        {
            "data-testid": testid,
            className,
            as,
            children,
            linksColor = "primary",
            activeColor = "currentColor",
            gap = "xs",
            separator = "slash",
            separatorColor = "currentColor",
            ...rest
        },
        ref
    ) => {
        return (
            <StyledBreadcrumbs
                data-testid={testid}
                ref={ref}
                as={as}
                className={className}
                $gap={gap}
                $linkColor={linksColor}
                $activeColor={activeColor}
                {...rest}
            >
                {children?.map((child, i) => (
                    <Fragment key={uuid()}>
                        {child}

                        {i !== children.length - 1 && (
                            <SeparatorContainer
                                data-testid={
                                    testid && `${testid}.SeparatorContainer`
                                }
                                className={className && "SeparatorContainer"}
                                $color={separatorColor}
                            >
                                {separator === "chevron" ? (
                                    <ChevronRight
                                        size={16}
                                        data-testid={
                                            testid &&
                                            `${testid}.SeparatorContainer.Icon`
                                        }
                                        className={className && "Icon"}
                                    />
                                ) : separator === "slash" ? (
                                    "/"
                                ) : (
                                    <LibIcon icon={separator} />
                                )}
                            </SeparatorContainer>
                        )}
                    </Fragment>
                ))}
            </StyledBreadcrumbs>
        )
    }
)
