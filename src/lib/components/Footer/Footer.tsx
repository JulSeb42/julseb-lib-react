/*=============================================== Footer component ===============================================*/

import { forwardRef, Fragment } from "react"
import { uuid } from "ts-utils-julseb"
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
 * @prop withSeparator?: boolean
 * @prop linksSeparator?: "dot" | "dash"
 * @prop items: Array<LibFooterLink>
 * @prop children?: ReactChildren => only if items is not defined
 * @prop logo: { img: string => only if text is not defined; alt?: string => only if img is defined; width?: number => only if img is defined; height?: number => only if img is defined; text?: string => only if img is not defined }
 * @prop direction?: "horizontal" | "vertical"
 *
 * @type LibFooterLink
 * @extends LibButtonLinkBlankRequired
 * @prop "data-testid"?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLAnchorElement & HTMLButtonElement>
 * @prop text: string
 */

export const Footer = forwardRef<HTMLDivElement, ILibFooter>(
    (
        {
            "data-testid": testid,
            as,
            children,
            withSeparator,
            items,
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
                as={as}
                $withSeparator={withSeparator}
                $direction={direction}
                {...rest}
            >
                {logo && <FooterLogo {...logo} />}

                <FooterLinksContainer>
                    {items
                        ? items.map((item, i) => (
                              <Fragment key={uuid()}>
                                  <FooterLink item={item} />

                                  {i !== items.length - 1 && (
                                      <FooterLinkSeparatorContainer>
                                          {linksSeparator === "dash"
                                              ? "-"
                                              : "•"}
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
