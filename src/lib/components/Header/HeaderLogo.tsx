import { Link } from "react-router-dom"
import { Logo, LogoImg } from "./styles"
import type { ILibHeaderLogo } from "./subtypes"

export const HeaderLogo = ({
    "data-testid": testid,
    className,
    logo,
    children,
    isOpen,
}: ILibHeaderLogo) => {
    const {
        to = "/",
        href,
        img,
        imgOpen,
        alt = "Logo",
        width = 100,
        height = 30,
    } = logo as any

    if (img) {
        const imgProps = {
            "data-testid": testid && `${testid}.HeaderLogo.Img`,
            className: className && "HeaderLogoImg",
            src: imgOpen && isOpen ? imgOpen : img,
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
            translate="no"
        >
            {children}
        </Logo>
    )
}
