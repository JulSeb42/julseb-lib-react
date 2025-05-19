import { Fragment, type FC } from "react"
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
 * Footer component for displaying a footer section with links, logo, and optional separators.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Footer props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {Array<LibFooterLink>} [props.links] - Array of footer links (required if direction is horizontal and children is not provided).
 * @param {string|Object} [props.logo] - Logo for the footer. String for text, or object with { img, text, alt, width, height }.
 * @param {ReactNode} [props.children] - Custom footer content (used if links is not provided).
 * @param {boolean} [props.withSeparator] - Show separator between links.
 * @param {"dot" | "dash"} [props.linksSeparator="dot"] - Separator style between links.
 * @param {"horizontal" | "vertical"} [props.direction="horizontal"] - Layout direction for the footer.
 * @param {string} [props.className] - Additional class names.
 * @returns {JSX.Element} The rendered Footer component.
 *
 * @example
 * <Footer
 *   logo={{ img: "/logo.svg", alt: "Logo" }}
 *   links={[
 *     { text: "Home", to: "/" },
 *     { text: "About", to: "/about" }
 *   ]}
 *   withSeparator
 *   linksSeparator="dash"
 * />
 */
export const Footer: FC<ILibFooter> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    className,
    withSeparator,
    links,
    logo,
    direction = "horizontal",
    linksSeparator = "dot",
    ...rest
}) => {
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
