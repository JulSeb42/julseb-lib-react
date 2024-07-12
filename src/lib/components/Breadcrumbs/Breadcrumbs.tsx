/*=============================================== Breadcrumbs component ===============================================*/

import { Fragment, forwardRef } from "react"
import { uuid } from "ts-utils-julseb"
import { LibIcon } from "../LibIcon"
import { ChevronRight } from "../../icons"
import { StyledBreadcrumbs, SeparatorContainer } from "./styles"
import type { ILibBreadcrumbs } from "./types"

/**
 * @description Returns a Breadcrumbs component
 * @link https://documentation-components-react.vercel.app/components/breadcrumbs
 * @extends HTMLNavElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop linksColor?: LibColorsHover
 * @prop activeColor?: LibAllColors
 * @prop separatorColor?: LibAllColors
 * @prop gap?: LibSpacers
 * @prop separator?: BreadcrumbsSeparator
 * @prop children?: ReactChildren
 */

export const Breadcrumbs = forwardRef<HTMLDivElement, ILibBreadcrumbs>(
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
                                        className={
                                            className &&
                                            "SeparatorContainer__Icon"
                                        }
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
