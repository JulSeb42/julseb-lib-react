/*=============================================== Form types ===============================================*/

import type {
    ButtonLinkRequired,
    LibComponentBase,
    LibIcon,
    LibSpacers,
} from "../../types"

export interface FormProps
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
    buttonSecondary?: ButtonLinkRequired & {
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
