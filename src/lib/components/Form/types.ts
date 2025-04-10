import type {
    LibButtonLinkRequired,
    LibComponentBase,
    LibIcon,
    LibSpacers,
} from "../../types"

export interface ILibForm
    extends Exclude<LibComponentBase<HTMLFormElement>, "as"> {
    buttonPrimary?:
        | string
        | {
              text: string
              iconLeft?: LibIcon
              iconRight?: LibIcon
              iconLeftSize?: number
              iconRightSize?: number
          }
    buttonSecondary?: LibButtonLinkRequired & {
        text: string
        iconLeft?: LibIcon
        iconRight?: LibIcon
        iconLeftSize?: number
        iconRightSize?: number
    }
    isLoading?: boolean
    disabled?: boolean
    gap?: LibSpacers
    maxWidth?: string | number
}
