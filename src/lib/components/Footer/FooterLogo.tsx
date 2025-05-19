import type { FC } from "react"
import { LogoText, LogoImg } from "./styles"
import type { ILibFooterLogo } from "./subtypes"

export const FooterLogo: FC<ILibFooterLogo> = ({
    "data-testid": testid,
    className,
    logo,
}) => {
    const { text, img, alt = "Logo", width = 100, height = 30 } = logo as any

    if (text || typeof logo === "string")
        return (
            <LogoText data-testid={testid} className={className}>
                {text || logo}
            </LogoText>
        )

    return (
        <LogoImg
            data-testid={testid}
            className={className}
            src={img}
            alt={alt}
            width={width}
            height={height}
        />
    )
}
