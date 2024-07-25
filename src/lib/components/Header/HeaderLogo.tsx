/*=============================================== HeaderLogo ===============================================*/

import { Link } from "react-router-dom"
import type { ReactChildren } from "../../types"
import { Logo, LogoImg } from "./styles"

interface ILibHeaderLogo {
    "data-testid": string | undefined
    className: string | undefined
    to?: string
    href?: string
    children?: ReactChildren
    img?: string
    alt?: string
    width?: number
    height?: number
}

export function HeaderLogo({
    "data-testid": testid,
    className,
    to = "/",
    href,
    children,
    img,
    alt = "Logo",
    width = 100,
    height = 30,
}: ILibHeaderLogo) {
    if (img) {
        const imgProps = {
            "data-testid": testid && `${testid}.HeaderLogo.Img`,
            className: className && "HeaderLogoImg",
            src: img,
            alt,
            width,
            height,
        }

        return href ? (
            <a
                href={href}
                data-testid={testid && `${testid}.HeaderLogo`}
                className={className && "HeaderLogo"}
            >
                <LogoImg {...imgProps} />
            </a>
        ) : (
            <Link
                data-testid={testid && `${testid}.HeaderLogo`}
                className={className && "HeaderLogo"}
                to={to}
            >
                <LogoImg {...imgProps} />
            </Link>
        )
    }

    return (
        <Logo
            data-testid={testid && `${testid}.HeaderLogo`}
            as={href ? "a" : Link}
            className={className && "HeaderLogo"}
            to={to}
            href={href}
        >
            {children}
        </Logo>
    )
}
