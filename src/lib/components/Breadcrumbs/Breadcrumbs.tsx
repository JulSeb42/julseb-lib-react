/*=============================================== Breadcrumbs component ===============================================*/

import { Fragment, forwardRef } from "react"
import { Link } from "react-router-dom"
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
 * @prop breadcrumbsItems: Array<LibButtonLinkBlank & { text: string | JSX.Element }> => only if children is not defined
 * @prop children: Array<ReactNode> => only if breadcrumbsItems is not defined
 * @prop linksColor?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 * @prop activeColor?: Any color from the library
 * @prop separatorColor?: Any color from the library
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop separator?: "slash" | "chevron" | JSX.Element
 */

export const Breadcrumbs = forwardRef<HTMLDivElement, ILibBreadcrumbs>(
    (
        {
            "data-testid": testid,
            className,
            children,
            breadcrumbsItems,
            ...rest
        },
        ref
    ) => {
        return (
            <BreadcrumbsFn ref={ref} {...rest}>
                {breadcrumbsItems
                    ? breadcrumbsItems.map(({ text, to }, i) =>
                          to ? (
                              <Link
                                  to={to}
                                  data-testid={
                                      testid && `${testid}.LinkItem${i}`
                                  }
                                  className={className && "LinkItem"}
                                  key={uuid()}
                              >
                                  {text}
                              </Link>
                          ) : (
                              <span
                                  key={uuid()}
                                  data-testid={
                                      testid && `${testid}.TextItem${i}`
                                  }
                                  className={className && "TextItem"}
                              >
                                  {text}
                              </span>
                          )
                      )
                    : children}
            </BreadcrumbsFn>
        )
    }
)

const BreadcrumbsFn = forwardRef<
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
