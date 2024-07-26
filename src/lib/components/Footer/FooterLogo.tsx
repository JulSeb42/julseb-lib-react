/*=============================================== FooterLogo ===============================================*/

import { LogoText, LogoImg } from "./styles"

interface ILibFooterLogo {
    img?: string
    alt?: string
    width?: number
    height?: number
    text?: string
}

export function FooterLogo({
    img,
    alt = "Logo",
    width = 100,
    height = 30,
    text,
}: ILibFooterLogo) {
    if (text) return <LogoText>{text}</LogoText>

    return <LogoImg src={img} alt={alt} width={width} height={height} />
}
