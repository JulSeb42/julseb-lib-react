/*=============================================== FooterLogo ===============================================*/

import { LogoText, LogoImg } from "./styles"

interface ILibFooterLogo {
    "data-testid": string | undefined
    className: string | undefined
    img?: string
    alt?: string
    width?: number
    height?: number
    text?: string
}

export function FooterLogo({
    "data-testid": testid,
    className,
    img,
    alt = "Logo",
    width = 100,
    height = 30,
    text,
}: ILibFooterLogo) {
    if (text)
        return (
            <LogoText data-testid={testid} className={className}>
                {text}
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
