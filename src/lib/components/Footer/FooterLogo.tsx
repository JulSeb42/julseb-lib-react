/*=============================================== FooterLogo ===============================================*/

import { LogoText, LogoImg } from "./styles"
import type { ILibFooterLogo } from "./subtypes"

export function FooterLogo({
    "data-testid": testid,
    className,
    logo,
}: ILibFooterLogo) {
    const { text, img, alt = "Logo", width = 100, height = 30 } = logo as any

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
