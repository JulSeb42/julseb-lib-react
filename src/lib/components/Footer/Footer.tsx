/*=============================================== Footer component ===============================================*/

import { forwardRef, Fragment } from "react"
import { uuid } from "@julseb-lib/utils"
import { FooterLogo } from "./FooterLogo"
import { FooterLink } from "./FooterLink"
import {
    StyledFooter,
    FooterLinksContainer,
    FooterLinkSeparatorContainer,
} from "./styles"
import type { ILibFooter } from "./types"

/**
 * @description Returns a Footer component
 * @link https://documentation-components-react.vercel.app/components/footer
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop links: Array<LibFooterLink> => required if direction is set to horizontal, only if children is not defined
 * @prop logo: string | { img: string => only if text is not defined; text: string => only if img is not defined; alt?: string => only if img is defined; width?: number => only if img is defined; height?: number => only if img is defined } => required if direction is set to horizontal
 * @prop children?: ReactChildren
 * @prop withSeparator?: boolean
 * @prop linksSeparator?: "dot" | "dash"
 * @prop direction?: "horizontal" | "vertical"
 *
 * @type LibFooterLink
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLAnchorElement & HTMLButtonElement>
 * @prop text: string
 * @prop onClick: void => only if to or href are not defined
 * @prop disabled?: boolean => only if onClick is defined
 * @prop to: string => only if onClick and href are not defined
 * @prop href: string => only if onClick and to are not defined
 * @prop blank?: boolean => only if to or href are defined
 */
export const Footer = forwardRef<HTMLDivElement, ILibFooter>(
    (
        {
            "data-testid": testid,
            as,
            children,
            className,
            withSeparator,
            links,
            logo,
            direction = "horizontal",
            linksSeparator = "dot",
            ...rest
        },
        ref
    ) => {
        return (
            <StyledFooter
                data-testid={testid}
                ref={ref}
                className={className}
                as={as}
                $withSeparator={withSeparator}
                $direction={direction}
                {...rest}
            >
                {logo && (
                    <FooterLogo
                        data-testid={testid && `${testid}.Logo`}
                        className={className && "FooterLogo"}
                        logo={logo}
                    />
                )}

                <FooterLinksContainer
                    data-testid={testid && `${testid}.FooterLinksContainer`}
                    className={className && "FooterLinksContainer"}
                >
                    {links
                        ? links.map((link, i) => (
                              <Fragment key={uuid()}>
                                  <FooterLink
                                      data-testid={
                                          testid &&
                                          `${testid}.FooterLinksContainer.FooterLink`
                                      }
                                      className={className && "FooterLink"}
                                      item={link}
                                  />

                                  {i !== links.length - 1 && (
                                      <FooterLinkSeparatorContainer>
                                          {linksSeparator === "dash"
                                              ? "-"
                                              : linksSeparator === "dot"
                                              ? "•"
                                              : ""}
                                      </FooterLinkSeparatorContainer>
                                  )}
                              </Fragment>
                          ))
                        : children}
                </FooterLinksContainer>
            </StyledFooter>
        )
    }
)
