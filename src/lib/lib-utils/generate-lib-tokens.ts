import { rgbToHex, toConstantCase } from "@julseb-lib/utils"

interface Token {
    [name: string]: {
        rgb: string
        hex: string
        css: string
        variable: string
    }
}

export const generateColorTokens = (tokens: Array<string>): Array<Token> => {
    return tokens.map(token => {
        const tokenName = token
            .split(":")[0]
            .replaceAll("--color-", "")
            .replaceAll("light-", "")
            .replaceAll("dark-", "")
        const colorValue = token.split(":")[1]
        const rgb = colorValue
            .replaceAll("rgb(", "")
            .replaceAll(")", "")
            .split(",")

        return {
            [tokenName]: {
                rgb: `"${colorValue}"`,
                hex: `"${rgbToHex(
                    Number(rgb[0]),
                    Number(rgb[1]),
                    Number(rgb[2])
                )}"`,
                css: `"${token.split(":")[0]}"`,
                variable: `"COLORS_DARK.${toConstantCase(tokenName)}"`,
            },
        }
    })
}
